#!/bin/sh
USER=root
HOST=stevenhicks.xyz             
DIR=/var/www/hicks

rsync -avz --delete dist/ ${USER}@${HOST}: