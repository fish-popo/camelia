#!/bin/bash

set -e

npm config set registry https://registry.npm.taobao.org/

pnpm i --frozen-lockfile

pnpm build

pnpm update:version

npm config set registry https://registry.npmjs.org/

cd ..

dir

cd ./dist/camelia

npm login

npm publish

echo "✅ Publish completed"
