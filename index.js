const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Project title?',
        name: 'project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licence did you use for your project?',
        choices: ["MIT License", "Apache License 2.0", "GNU GPL License", "BSD License(2-clause)",
        "BSD License(3-clause)","Perl License"],
    },

    {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution guidlines:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the testing instructions for this project?',
        name: 'tests',
    },
    {
        type: 'linkinput',
        message: 'What is your Github in URL?',
        name: 'github'
    },
    {
        type: 'link',
        message: 'What is your email address?',
        name: 'email'
    },
])
.then((response)=> {
    let licenseType;
    if(response.license == "MIT License"){
        licenseType=`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }else if (response.license =="Apache License 2.0"){
        licenseType=`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }else if (response.license =="GNU GPL License"){
        licenseType=`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }else if (response.license =="BSD License(2-clause)"){
            licenseType=`[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }else if (response.license =="BSD License(3-clause)"){
            licenseType=`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }else if (response.license == "Perl License"){
        licenseType=`[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

        `
    }
    fs.writeFile(`README.md`,
    `## Project title :                         ${licenseType}
${response.project} 

## License:
${response.license}

    
## Description: 
${response.description}
    
## Table of contents:

[License](#license)

[Installation instructions](#installation-instructions)

[Usage Information](#usage)

[Contribution guidelines](#contributing)

[Test instructions](#tests)

[Questions](#questions)
    
## Installation instructions:
${response.installation}

## Usage information:
${response.usage}

## Contribution guidelines:
${response.contributing}

## Test instructions:
${response.tests}

## Questions: 
Github account: github.com/${response.github}


Email address: ${response.email}.com`,(err)=>{
        if (err){
            throw err;
        }
        console.log('success')
    })
})