/*
    npm install -g <package>   // global usage of a package/dependency

    npm i <package>  // local usage of a package/dependency

    package.json -> config or manifest file
        create in root manually and add properties of installed dependencies (like a pom file)
                    or
        npm init -y
    
    the installed package is stored in the node_modules folder

*/

const _ = require('lodash'); // _: Common convention to use _ as a variable name. 
                             // It is essentially a shorthand or placeholder variable name.
const items = [1,[2,[3,[4]]]]
//  console.log(items)

const newItems = _.flattenDeep(items)
console.log(newItems)

/*
    when sharing a repo to the github or VCS platform,
    we dont need to share the node_modules folder as it has packages and more packages that depend on other packages
        (we can add the /node_modules directory to the .gitignore file)
    
    so, when someone clones the repo, they can just run 
        npm install
    it will install all the packages using the package.json file

    so node_modules is only needed when working on a project locally on a pc
        and package.json is the shit
*/

/*
    dev dependency npm install <package> -D
        dev dependencies are different from dependencies in that they are not meant to be
        installed by a user, or used once the product is deployed
*/

/* 
    "scripts" section is a key-value object that defines various scripts or commands 
  that can be executed using npm. 
  These scripts are typically used for tasks such as running tests, 
  starting the application, building the project, and other common development 
  or deployment tasks.

  some can run with "npm <command>"
  others need "npm run <package_command>"
  
*/

/*  
    npm uninstall <package_name>

*/