#Steps for Creating typerscript first program
 1. Create package.json using the 'npm init' command
 2. for installing and adding typescript to the package.json as dependancy use "npm i typescript"
 3. for generating the typerscript configuration file "tsconfig.json" use "tsc-init"

#git related steps 
1. first use git init
2. use this to avoid publishing the node modules to remote repo ´echo "node_modules/" >> .gitignore´

#conversion from ts to js
  run "tsc" it'll change the ts file to js file.

#steps for running typerscript files
    run "tsc"
    node filename.ts

