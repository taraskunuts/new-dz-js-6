
ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ npm init
This utility will walk you through creating a package.json file.    
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields    
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (new-dz-js-6)
version: (1.0.0)
description: Parcel dz-js-6
entry point: (index.js)
test command: start
git repository: https://github.com/taraskunuts/new-dz-js-6
keywords:
author: Me(taraz)
license: (ISC)
About to write to C:\Users\ТехноRAY\Documents\GitHub\new-dz-js-6\package.json:

{
  "name": "new-dz-js-6",
  "version": "1.0.0",
  "description": "Parcel dz-js-6",
  "main": "index.js",
  "scripts": {
    "test": "start"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/taraskunuts/new-dz-js-6.git"     
  },
  "author": "Me (taraz)",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/taraskunuts/new-dz-js-6/issues"      
  },
  "homepage": "https://github.com/taraskunuts/new-dz-js-6#readme"   
}


Is this OK? (yes) yes

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ pm install --save-dev parcel
bash: pm: command not found

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ npm install --save-dev parcel

added 161 packages, and audited 162 packages in 24s

87 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ git init
Reinitialized existing Git repository in C:/Users/ТехноRAY/Documents/GitHub/new-dz-js-6/.git/

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ npm run build

> new-dz-js-6@1.0.0 build    
> parcel build src/index.html

🚨 Build failed.

@parcel/namer-default: Target "main" declares an output file path of "index.js" which does not match the compiled bundle type "html".   

  C:\Users\ТехноRAY\Documents\GitHub\new-dz-js-6\package.json:5:11  
    4 |   "description": "Parcel dz-js-6",
  > 5 |   "main": "index.js",
  >   |           ^^^^^^^^^^ Did you mean "index.html"?
    6 |   "scripts": {
    7 |     "start": "parcel src/index.html",

  💡 Try changing the file extension of "main" in package.json.     

[Error: Error opening directory]

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ npm run build

> new-dz-js-6@1.0.0 build    
> parcel build src/index.html

🚨 Build failed.

@parcel/namer-default: Target "main" declares an output file path of "main.js" which does not match the compiled bundle type "html".    

  C:\Users\ТехноRAY\Documents\GitHub\new-dz-js-6\package.json:5:11  
    4 |   "description": "Parcel dz-js-6",
  > 5 |   "main": "main.js",
  >   |           ^^^^^^^^^ Did you mean "main.html"?
    6 |   "scripts": {
    7 |     "start": "parcel src/index.html",

  💡 Try changing the file extension of "main" in package.json.     

[Error: Error opening directory]

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ npm run build

> new-dz-js-6@1.0.0 build
> parcel build src/index.html

✨ Built in 1.54s

dist\index.html                 230 B    171ms
dist\new-dz-js-6.b9d44bd6.js    167 B    150ms
[Error: Error opening directory]

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ npm run deploy

> new-dz-js-6@1.0.0 deploy
> gh-pages -d dist        

'gh-pages' is not recognized as an internal or external command,
operable program or batch file.

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ npm install --save-dev gh-pages

added 40 packages, and audited 202 packages in 3s

94 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$ npm run deploy

> new-dz-js-6@1.0.0 deploy
> gh-pages -d dist

Published

ТехноRAY@DESKTOP-UPV4HIP MINGW64 ~/Documents/GitHub/new-dz-js-6 (main)
$