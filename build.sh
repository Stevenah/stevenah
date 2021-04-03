#!/bin/bash

mincss=$( cat ./src/style.css | sed -e 's/^[    ]*//g; s/[ \t]*$//g; s/\([:{;,]\) /\1/g; s/ {/{/g; s/\/\*.*\*\///g; /^$/d' | sed -e :a -e '$!N; s/\n\(.\)/\1/; ta' )

python ./templater.py \
    --template ./src/index.html \
    --output ./dist/index.html;

python ./templater.py \
    --context ./contexts/publications.json \
    --template ./src/publications.html \
    --output ./dist/publications.html;

python ./templater.py \
    --template ./src/404.html \
    --output ./dist/404.html;

sed -i '' '/^[[:space:]]*$/d' ./dist/index.html;
sed -i '' '/^[[:space:]]*$/d' ./dist/publications.html;
sed -i '' '/^[[:space:]]*$/d' ./dist/404.html;

sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/index.html
sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/publications.html
sed -i "" "s/\/\* style \*\//$mincss/g" ./dist/404.html
