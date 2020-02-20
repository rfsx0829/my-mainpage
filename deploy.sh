#!/bin/bash

repodir="/home/zeng/rfsx0829.github.io"
generatedir="/home/zeng/my-mainpage-src/dist"

npm run-script build

white_list=`ls -1 ${generatedir}`

for i in ${white_list[@]}
do
    rm -rf ${repodir}/${i}
done

mv ${generatedir}/* ${repodir}/

cd $repodir
git add -A
git commit -m "${1}"
git push -u origin master

