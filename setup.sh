#!/bin/bash

cd ./server
poetry install

cd ..

cd ./front-end
npm i

cd ..