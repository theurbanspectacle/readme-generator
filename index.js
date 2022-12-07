const inquirer = require("inquirer"); 

const licenses = {
    MIT: {
        name: 'MIT',
        description: 'The MIT license gives users express permission to reuse code for any purpose, sometimes even if code is part of proprietary software.',
        badge: 'https://img.shields.io/badge/license-MIT-green',
    },
    Apache: {
        name: 'Apache',
        description: 'The Apache License is a free and open source software (FOSS) licensing agreement from the Apache Software Foundation (ASF).',
        badge: 'https://img.shields.io/badge/license-Apache-blue',
    },
    GPL: {
        name: 'GPL',
        description: 'GPL License is a free software license that allows software to be modified or redistributed without any restrictions or compulsory payments for the licensed code.',
        badge: 'https://img.shields.io/badge/license-GPL-blue',
    },
    Unlicensed: {
        name: 'Unlicensed',
        description: 'This project has no license.',
    },
};

const questions = [
    {
        message: 'What is your project title?',
        name: 'projectName',
	},
    {
        message: 'Enter Description ',
        name: 'projectDescription',
	},
    {
        message: 'What was your motivation?',
        name: 'motivation',
	},
    {
        message: 'Why did you build this project?',
        name: 'whyBuild',
	},
    {
        message: 'What problem does it solve?',
        name: 'whatSolve',
	},
    {
        message: 'What did you learn?',
        name: 'whatLearn',
	},
    {
        message: 'What are the installation instructions?',
        name: 'whatInstruct',
	},
    {
        message: 'What is the common usage of this?',
        name: 'whatUsage',
	},
    {
        message: 'How do you run it?',
        name: 'howRun',
	},
    {
        message: 'Who would you like to credit?',
        name: 'whoCredit',
	},
    {
        message: 'What is the license?',
        name: 'whatLicense',
        type: 'list',
        choices: [
            'MIT',
            'Apache',
            'GPL',
            'Unlicensed',
        ],
	},
    {
        message: 'What are the features?',
        name: 'whatFeatures',
	},
    {
        message: 'What is your GitHub username?',
        name: 'whatGithub',
	},
    {
        message: 'What is your email?',
        name: 'whatEmail',
	},
    {
        message: 'How do you run test?',
        name: 'whatTest',
	},
];

const createReadme = (answers) => {
    const {projectName, projectDescription, motivation, whyBuild, whatSolve, whatLearn, whatInstruct, whatUsage, howRun, whoCredit, whatLicense, whatFeatures, whatGithub, whatEmail, whatTest} = answers;
    const currentLicense = licenses[whatLicense];

    let readMe = `# ${projectName}

${currentLicense.badge ? `![${currentLicense.name}](${currentLicense.badge})` : ""}

## Description

${projectDescription}

${motivation ? `- ${motivation}` : ""}
${whyBuild ? `- ${whyBuild}` : ""}
${whatSolve ? `- ${whatSolve}` : ""}
${whatLearn ? `- ${whatLearn}` : ""}

## Table of Contents

${whatInstruct ? '- [Installation](#installation)' : ''}
${whatUsage ? '- [Usage](#usage)' : ''}
${howRun ? '- [How to run it](#how-to-run-it)' : ''}
${whoCredit ? '- [Credits](#credits)' : ''}
${whatLicense ? '- [License](#license)' : ''}
${whatFeatures ? '- [Features](#features)' : ''}
${whatTest ? '- [Tests](#tests)' : ''}
- [Questions](#questions)

${whatInstruct ? `## Installation

${whatInstruct}` : ""}

${whatUsage ? `## Usage

${whatUsage}` : ""}

${howRun ? `## How to run it

${howRun}` : ""}

${whoCredit ? `## Credits

${whoCredit}` : ""}

## License

**${currentLicense.name}** 

${currentLicense.description}

${whatFeatures ? `## Features

${whatFeatures}` : ""}

${whatTest ? `## Tests

${whatTest}` : ""}

## Questions

Reach me via [GitHub](https://github.com/${whatGithub}) or [${whatEmail}](mailto:${whatEmail}).
    `;

    readMe = readMe.replaceAll('\n\n\n', '\n\n');
    console.log(readMe);
}

inquirer.prompt(questions).then(data => {
    createReadme(data);
}).catch(error => {
    console.error('App unable to get questions.');
    console.error(error);
}); 
