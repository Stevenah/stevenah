import os
import inspect
import re
import argparse
import json

def do_dots(value, *dots):
    for dot in dots:
        try:
            value = getattr(value, dot)
        except AttributeError:
            value = value[dot]
        if callable(value):
            value = value()
    return value

class PythonBuilder():

    def __init__(self, indent_level=0, indent_step=4):
        self._indent_level = indent_level
        self._indent_step = indent_step

        self.code = []

    def write(self, filepath):
        with open( filepath, "w" ) as f:
            f.write( str( self ) )

    def indent(self):
        self._indent_level += self._indent_step

    def dedent(self):
        self._indent_level -= self._indent_step

    def add_line(self, line):
        self.code.extend([" " * self._indent_level, line, "\n"])

    def add_fucntion(self, func):
        for line in inspect.getsource(func).split("\n"):
            self.code.extend( [ " " * self._indent_level, line, "\n" ] )

    def add_section(self):
        section = PythonBuilder(self._indent_level)
        self.code.append(section)
        return section
    
    def __str__(self):
        return "".join( str( c ) for c in self.code )

class Templater():

    variables = set()
    loop_variables = set()

    def __init__(self, template, context={}):

        if os.path.exists(template):
            template = self.read_file()

        self.template = self.read_template(template)
        self.context = context
        
    def handle_expression(self, expr, add_variable=True):

        if "." in expr:
            dots = expr.split(".")
            code = self.handle_expression(dots[0])
            args = ", ".join(repr(d) for d in dots[1:])
            code = "do_dots(%s, %s)" % (code, args)

        else:
            if add_variable:
                self.variables.add(expr)
            code = "c_%s" % expr

        return code

    def read_template(self, text):

        tokens = re.split( r"(?s)({{.*?}}|{%.*?%}|{#.*?#})", text )

        code = PythonBuilder()

        code.add_line("def render_function(context):")
        code.indent()
        vars_code = code.add_section()
        code.add_line("result = []")
        code.add_fucntion(do_dots)

        for token in tokens:

            if token.startswith( "{#" ):
                continue

            elif token.startswith( "{{" ):
                expr = self.handle_expression(token[ 2 : -2 ].strip())
                code.add_line("result.append(str(%s))" % expr)

            elif token.startswith( "{%" ):
                
                words = token[ 2 : -2 ].strip().split()
                operation = words[0]

                if operation == "if":
                    code.add_line("if %s:" % self.handle_expression(words[1]))
                    code.indent()

                elif operation == "for":
                    self.loop_variables.add(words[1])
                    code.add_line(
                        "for c_%s in %s:" % (
                            words[1],
                            self.handle_expression(words[3])
                        )
                    )
                    code.indent()

                elif operation.startswith("end"):
                    code.dedent()

            else:
                if token:
                    code.add_line("result.append(%s)" % repr(token))

        for var_name in self.variables - self.loop_variables:
            vars_code.add_line("c_%s = context[%r]" % (var_name, var_name))
        
        code.add_line("return ''.join(result)")
        code.dedent()

        return code

    def render(self):
        globes = {}
        exec(str(self.template), globes)
        return globes["render_function"](self.context)

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description="Split data into k folds.")

    parser.add_argument("-t", "--template", type=str)
    parser.add_argument("-o", "--output", type=str)
    parser.add_argument("-c", "--context", type=str, default=None)

    args = parser.parse_args()

    template = args.template
    output = args.output
    context = args.context

    if context is not None:
        with open(context) as f:
            context = json.load(f)

    with open(template) as f:
        html = f.read()

    with open(output, "w") as f:
        f.write(Templater(html, {"context": context}).render())