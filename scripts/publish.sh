cp package.json ./dist
cd dist
npm version patch
npm publish
cp package.json ../
