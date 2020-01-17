#!/bin/bash

npm run-script build

tar -czvf dist.tar.gz ./dist

sshpass -p $2 scp ./dist.tar.gz root@$1:/root/dist.tar.gz

rm ./dist.tar.gz

