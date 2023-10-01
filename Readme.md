# Playwright TypeScript Setup and Execution

This repository provides a basic setup and examples for running Playwright tests using TypeScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Writing Your Own Tests](#writing-your-own-tests)
- [Custom Configuration](#custom-configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (version 14 or higher).

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone repo

   cd project folder

Project structure:

playwright-sep-2023-batch/
  ├── src/
  |   ├── tests/
  |   |   ├── example.test.ts
  ├── tsconfig.json
  ├── package.json
  ├── playwright.config.ts
  └── README.md

tests/: Contains example test files written in TypeScript.
tsconfig.json: TypeScript configuration file.
package.json: Node.js package configuration.
playwright.config.ts: Playwright configuration file.
README.md: This documentation.

Installation
Install the project dependencies using npm:

cmmd:
npm install

Run tests in UI Mode
Run your tests with UI Mode for a better developer experience with time travel debugging, watch mode and more.

npx playwright test --ui

Command Line
Running all tests

npx playwright test

Running a single test file

npx playwright test landing-page.spec.ts

Run a set of test files

npx playwright test tests/todo-page/ tests/landing-page/

Run files that have landing or login in the file name

npx playwright test landing login

Run the test with the title

npx playwright test -g "add a todo item"

Running tests in headed mode

npx playwright test landing-page.spec.ts --headed

Running tests on a specific project

npx playwright test landing-page.ts --project=chromium

Debugging Tests
Since Playwright runs in Node.js, you can debug it with your debugger of choice e.g. using console.log or inside your IDE or directly in VS Code with the VS Code Extension. Playwright comes with the Playwright Inspector which allows you to step through Playwright API calls, see their debug logs and explore locators.

Debugging all tests:

npx playwright test --debug

Debugging one test file:

npx playwright test example.spec.ts --debug

Debugging a test from the line number where the test(.. is defined:

npx playwright test example.spec.ts:10 --debug

Test Reports
The HTML Reporter shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. By default, the HTML report is opened automatically if some of the tests failed.

npx playwright show-report