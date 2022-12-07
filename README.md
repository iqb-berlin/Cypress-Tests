## Preconditions

**Generally**

* install [git](https://git-scm.com/downloads)
* install [node.js](https://nodejs.org/de/download/)
* clone this repo
* run [npm i]() for install all dependencies

**to use browserstack:**

If you want start a test with browserstack you need a browserstack account. After you have registered, you will receive authentication data. You have to enter this in the **browserstack.json** / `Username` and `access_key`. The browsers to be tested can also be specified here.

**to use cypress with mocha reporting:**

Reports are currently stored in the **reports** directory. The directory can be changed here: **cypress.config.js** `reportDir`.

## Start Testing

There are several ways to start a test.

1. Open the Cypress interface: **npm run CY:open** <br>
Here you can select a browser and a test case and run it locally.
:information_source: If you want you can use the recorder function to create new test cases.
For this one you find some information about it [here](https://docs.cypress.io/guides/references/cypress-studio#Extending-a-Test). Start with chapter: **Step1-Run the spec**. The studio function is already switched on in this repository!

2. Start an automatically executed local cypress test: **npm run CY:runLocal:all** <br>
All tests created in the E2E-directory will be run. After each test, corresponding reports and videos are stored in the "Reports" and "Videos" directory. <br>
It is also possible to start a specific test. To do this, the command **npm run CY:runLocal: your test name** must be entered. A corresponding script must first be created in **package.json**.

3. Start a Browserstack Test: **npm run CY:runBrowserstack:all** <br>
It is also possible to start a specific test. To do this, the command **npm run CY:runBrowserstack:your test name** must be entered. A corresponding script must first be created in **package.json**.

:information_source: Runs with browserstack are only possible if you have created a browserstack account.

:information_source: Reports will be only saved by browserstack. There is no local report cache.