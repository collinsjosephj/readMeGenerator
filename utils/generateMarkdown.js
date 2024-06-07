// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === 'MIT') {
		return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
	} else if (license === 'Apache 2.0') {
		return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
	} else if (license === 'GPLv3') {
		return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
	} else if (license === 'BSD 3-Clause') {
		return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
	} else {
		return '';
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}


module.exports = generateMarkdown;
