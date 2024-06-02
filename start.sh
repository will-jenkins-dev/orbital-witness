#!/bin/bash

cleanup() {
    echo "Cleaning up..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

cd ./server
poetry run python ./app.py &

cd ..

cd ./front-end
npm run dev

wait