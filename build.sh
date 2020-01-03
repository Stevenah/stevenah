#!/bin/bash

mincss=$(sed ':a; s%(.*)/\*.*\*/%\1%; ta; /\/\*/ !b; N; ba' ./src/style.css \
    | tr -d '\t' \
    | tr -d '\n' \
    | tr -s ' ' ' ')

python ./src/build.py \
    --template ./src/index.html \
    --output ./dist/index.html;

python ./src/build.py \
    --context ./src/publications.json \
    --template ./src/publications.html \
    --output ./dist/publications.html;

sed -i '' '/^[[:space:]]*$/d' ./dist/index.html;
sed -i '' '/^[[:space:]]*$/d' ./dist/publications.html;
sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/index.html
sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/publications.html