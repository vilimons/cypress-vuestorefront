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
- [Test Reporting](#test-reporting)
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

## Test Reporting
Cypress provides detailed test logs, real-time test execution, and captures screenshots and videos for each test run.

## Continuous Integration
This project contains CI with Github Actions. You can see the configuration file [here](https://github.com/vilimons/cypress-vuestorefront/blob/main/cypress/.github/workflow/main.yaml).
<br>
<br>
<br>
### Thank you for checking out the Cypress Vue Storefront Demo Test Project. Feel free to reach out if you have any questions or suggestions!
