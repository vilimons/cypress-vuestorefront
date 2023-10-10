# Cypress Vue Storefront Demo Test Project

Welcome to the Cypress VueStore Demo Project documentation. This project demonstrates how to use Cypress, an end-to-end testing framework, to automate tests for a Vue.js-based web application called VueStore. In this documentation, you'll find instructions on setting up, writing tests, and running them to ensure the quality and reliability of the VueStore application.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Reports](#reports)
- [Continuous Integration](#continuous-integration)

## Introduction <a name="introduction"></a>
The **Cypress VueStore Demo Project** showcases how to write automated tests for a Vue.js web application. VueStore is a sample e-commerce website built using Vue.js, and Cypress is utilized to create and run tests that validate its functionality.

## Prerequisites <a name="prerequisites"></a>
Before you begin, make sure you have the following:

- Node.js installed (v12 or later)
- npm (Node Package Manager) or yarn
- Basic understanding of Vue.js
- Familiarity with web application concepts

## Installation <a name="installation"></a>

1. **Clone the Repository**: Start by cloning this repository to your local machine:

   ```bash
   git clone https://github.com/vilimons/cypress-vuestorefront.git

2. **Navigate to Directory**: Change your working directory to the project folder:
   ```bash
   cd cypress-vuestorefront

3. **Install Dependencies**: Install the required Node.js packages using npm:
    ```bash
    npm install

## Project Structure <a name="project-structure"></a>
The project structure is organized as follows:

    ```
    cypress-vuestorefront
    ├── cypress/
    │   ├── .github/workflow/
    │   ├── e2e/
    |   |   ├── integration/
    |   |   |   ├── cart
    |   |   |   ├── checkout
    |   |   |   ├── product 
    │   ├── fixtures/
    |   ├── results/
    |   ├── screenshots/
    │   └── support/
    ├── cypress.json
    ├── package.json
    ├── README.md
    └── ...

## Writing Tests <a name="writing-tests"></a>
Cypress tests are written in JavaScript and organized under the cypress/e2e/integration directory. Create new test files or modify existing ones to test VueStore's functionality.

## Running Tests <a name="running-tests"></a>
1. Open the Cypress Test Runner by running:

    ```bash
    npx cypress open
    or
    npx cypress run

2. Click on the test file you want to run.

3. The Cypress Test Runner will open, and you can see the tests being executed.

## Test Examples <a name="test-examples"></a>
For comprehensive test examples, explore the cypress/integration/ directory in this repository. You'll find tests for various features of the VueStore application.

## Test Scenarios <a name="test-scenarios"></a>
All **Test Scenarios** and **Test Cases** was written by me. You can visualize and read them [here](https://github.com/users/vilimons/projects/2/views/2).

## Reports
1. Initial Setup
   Make sure you have set up Cypress and Mochawesome in your project. If you haven't done so already, follow the relevant setup steps.

2. Run Your Cypress Tests
   Ensure that you already have your Cypress tests ready and working correctly. You can run them with the following command:
    ```bash
    npm run cypress:run

3. Accessing the Mochawesome Report
   After running the tests, a directory named mochawesome-report will be created in your project. This directory contains the reports generated automatically. You can access the HTML report by opening the mochawesome.html file in a web browser.
   ```bash
   ./results/mochawesome.html

4. Verifying the Reports
   Mochawesome provides a wealth of information about test results, including test outcomes, detailed logs, execution times, and more. You can use the report to:

   Check test results.
   Analyze detailed logs for specific tests.
   Identify failing tests and the reasons for the failures.

### Example of Verifying Reports

   Here's a simple example of how to verify reports using Mochawesome:
   
   1. Open the mochawesome.html file in your browser.
   
   2. On the report page, you'll see an overview of the tests executed.
   
   3. To view details of a specific test, click on the test name in the "Test" column on the left. This will open a page with detailed information about the test.
   
   4. To access logs and error messages, scroll down on the test details page.
   
   5. Use the information provided in the report to troubleshoot issues or verify test results.
   
   Keep in mind that Mochawesome offers advanced features such as chart generation and metrics that can help in analyzing test results. Explore the Mochawesome documentation for more information on making the most of this report.
   

## Continuous Integration
This project contains CI with Github Actions. You can see the configuration file [here](https://github.com/vilimons/cypress-vuestorefront/blob/main/cypress/.github/workflow/main.yaml).
<br>
<br>
<br>
### Thank you for checking out my Cypress Vue Storefront Demo Test Project. Feel free to reach out if you have any questions or suggestions!
