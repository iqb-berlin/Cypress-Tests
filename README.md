Use it to create some specific **E2E-tests** with **cypress**. Excecute the created tests with virtual devices on **browserstack** or with your **local** browser. In the folder: **Cypress/e2e** you can find a file with the name **spec1.cy.js**. Sample code is included in this specification. Use this code structure to create your spezific test and add the new **spec.cy.js** in the same folder. Run your new **spec** with your preferred browser **local** or on **browserstack**.

[Here](https://docs.cypress.io/guides/overview/why-cypress) you can find more information about cypress.<br>
[Here](https://docs.cypress.io/examples/examples/recipes) you can find a lot of helpful examples.

## Preconditions

* install an IDE (for example Visual Studio Code)
* install [git](https://git-scm.com/downloads)
* install [node.js](https://nodejs.org/de/download/)
* clone this repository
* run [npm i]() for install all dependencies
* enter the web-address from web-application if you want to test: **cypress.config.js** / `baseUrl`

**to use local with Mocha-Reporting:**

Reports are currently stored in the **reports** directory. The directory can be changed here: **cypress.config.js** `reportDir`.

**to use with Browserstack:**

If you want to start a test with **browserstack** you need a **browserstack** account. After you have registered, you will receive authentification data. You have to enter authentification data in the configuration file **browserstack.json** / `Username` and `access_key`. You can use several Browser and Devices with **Browserstack**. Set the Browser and Devices in the same configuration file **browserstack.json** / `browsers`.

## Start Testing

Start a test **local** with **Mocha-Reporting**, with **Browserstack** or use the **Cypress-GUI**. For this enter the following commands in your CLI.

1. **Start a local Cypress test with Cypress GUI**: `npm run CY:open` <br>
Here you can select a browser and a test case and run it locally.<br>
:information_source: You can use the recorder function to create new test cases. For this use the Cypress-Studio function.
More information you can find  [here](https://docs.cypress.io/guides/references/cypress-studio#Extending-a-Test). Start with chapter: Step1-Run the spec. The Cypress-Studio function is already switched on in this repository!<br>
:information_source: No reports are saved when starting a test with Cypress GUI. When Cypress GUI is closed, the test results are no longer visible.

2. **Start an local full automatically Cypress test:** `npm run CY:runLocal:all` <br>
All created tests in E2E-directory will be run. After each test, corresponding reports and videos are stored in the "reports" and "videos" directory. It is also possible to start a specific test. To do this, the command `npm run CY:runLocal: your test name` must be entered. A corresponding script must first be created in **package.json**. Currently all tests are running with Firefox. If you want to test another browser, you can change the browser in **package.json** / `scripts`.

**Coming soon:**

3. **Start a Browserstack test:** `npm run CY:runBrowserstack:all` <br>
All created tests in **E2E-directory** will be run. It is also possible to start a specific test. To do this, the command `npm run CY:runBrowserstack:your test name` must be entered in your CLI. A corresponding script must first be created in **package.json**.<br>
:information_source: Runs with browserstack are only possible if you have created a browserstack account.<br>
:information_source: Reports will be only saved by browserstack. There is no local report cache.