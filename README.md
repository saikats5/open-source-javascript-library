# open-source-javascript-library

#GIT
git status
git add .
git commit -m "Message"
git push //online storage


#NPM
npm set init-author-name "Saikat Saha"
npm set init-author-email "saikats_5@yahoo.co.in"
npm set init-author-url ""
npm set init-license "MIT"
npm set save-exact true

npm adduser
npm publish
npm info

https://www.npmjs.com


Open bash in desktop
vim index.js
var test = require('opensourcejslib');
console.log(test.all);
console.log(test.random());

ESC key
:wq
node index.js

GITHUB TAG
git tag 1.0.0
git push --tags

git diff

version name 1.2.3
1 --> Major changes which can break the code
2 --> Enhancement of code or additional features
3 --> Bugfix

npmjs.im/opensourcejslib //to directly go to library

npm publish --tag beta //publishing beta version on npm

npm install libname
npm install libname@beta

npm install -g semantic-release-cli(run in command prompt as adminstrator) //ignore
semantic-release-cli setup(git bash) //ignore

npm i -D istanbul
"test:single":"istanbul cover -x *.test.js node_modules/mocha/bin/_mocha -- -R spec src/index.test.js"

npm i -D babel-cli

"prebuild": "rm -rf dist" //delete the folder before build
"build": "babel --out-dir dist --ignore *.test.js src" //create babel directory

npm i -D babel-preset-es2015 babel-preset-stage-2 //to transpile the es6 files inside dist folder

npm i -D nyc
npm i -D babel-register

//to make nyc work, the code should be written in below format
"test": "mocha src/index.test.js --compilers js:babel-register"
"watch:test": "npm t -- -w"
"cover":"nyc npm t"
