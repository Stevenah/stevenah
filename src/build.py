from tinytemplate import TinyTemplate

import re
import json
import argparse

parser = argparse.ArgumentParser(description="Split data into k folds.")

parser.add_argument("-t", "--template", type=str)
parser.add_argument("-o", "--output", type=str)
parser.add_argument("-c", "--context", type=str, default=None)

def build(template, output, context=None):

    if context is not None:
        with open(context) as f:
            context = json.load(f)

    with open(template) as f:
        html = f.read()

    with open(output, "w") as f:
        f.write(TinyTemplate(html, {"context": context}).render())

if __name__ == "__main__":

    args = parser.parse_args()

    template = args.template
    output = args.output
    context = args.context

    build(template, output, context)