#!/bin/bash
docker-compose down --rmi all

docker-compose up -d

docker ps -a