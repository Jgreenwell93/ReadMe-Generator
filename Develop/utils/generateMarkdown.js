// TODO: Create a function that returns a license based on which license is passed in
// If there is no license, return an empty string
function renderLicense(answers) {
  let license;
  if (answers.licenseType === 'Apache 2.0') {
    license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (answers.licenseType === 'MIT') {
    license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (answers.licenseType === 'Mozilla Public License 2.0') {
    license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    license = "";
  }
  return license;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const license = renderLicense(answers);
  console.log(license);
  return license;

}

module.exports = generateMarkdown;
