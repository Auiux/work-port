#!/bin/bash

cp -f .env ws-server/.env;
echo "" >> ws-server/.env;
echo "" >> ws-server/.env;
echo "please use live server extension to serve index.html file (relative path to public file)"
export $(cat .env | xargs)
./private/main.exe $DEV_WS_PORT;
bash ./build.sh -m DEV & docker-compose -f docker-compose.dev.yml up;
