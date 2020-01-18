#!/bin/bash

mincss=$(sed ':a; s%(.*)/\*.*\*/%\1%; ta; /\/\*/ !b; N; ba' ./src/style.css \
    | tr -d '\t' \
    | tr -d '\n' \
    | tr -s ' ' ' ')

python ./src/tinytemplate.py \
    --template ./src/index.html \
    --output ./dist/index.html;

python ./src/tinytemplate.py \
    --context ./src/publications.json \
    --template ./src/publications.html \
    --output ./dist/publications.html;

python ./src/tinytemplate.py \
    --context ./src/projects.json \
    --template ./src/projects.html \
    --output ./dist/projects.html;

python ./src/tinytemplate.py \
    --template ./src/404.html \
    --output ./dist/404.html;

sed -i '' '/^[[:space:]]*$/d' ./dist/index.html;
sed -i '' '/^[[:space:]]*$/d' ./dist/publications.html;
sed -i '' '/^[[:space:]]*$/d' ./dist/projects.html;
sed -i '' '/^[[:space:]]*$/d' ./dist/404.html;
sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/index.html
sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/publications.html
sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/projects.html
sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/404.html