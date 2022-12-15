Diese Umgebung kann verwendet werden, um **E2E-tests** mit **Cypress** einzurichten. Mittels dieser Umgebung ist es möglich Tests gegen emulierte Geräte auf **Browserstack** und gegen **lokale** Browser auszuführen. Im Verzeichnis: *Cypress/e2e* ist eine Datei mit dem Namen: *spec1.cy.js* zu finden. Diese Datei enthält einen bsph. Testcode. Mittels dieser Vorlage können weitere Tests (Specs)im gleichen Verzeichnis angelegt werden.
Dazu muss eine weitere Datei mit gleicher Endung dem Verzeichnis hinzugefügt werden und der gewünschte Testcode eingegeben werden. Abschließend kann der neue Test mit den unten aufgeführten Befehlen sowohl lokal als auch gegen Browserstack gestartet werden. 
 
[Hier](https://docs.cypress.io/guides/overview/why-cypress) sind Informationen zu Cypress zu finden.<br>
[Hier](https://docs.cypress.io/examples/examples/recipes) sind Beispiele zu finden.

## Vorbedingungen

* installieren einer IDE (Bspw. Visual Studio Code)
* installieren von [Git](https://git-scm.com/downloads)
* installieren von [Node.js](https://nodejs.org/de/download/)
* klonen dieses Repositories
* Eingabe des Befehls [npm i]() um alle Abhängigkeiten zu installieren
* Eingabe der Webadresse, die getestet werden soll: *cypress.config.js* / `baseUrl`

**Für die Benutzung mit Mocha-Reports:**

Wird eine Testung lokal durchgeführt, werden alle Berichte im *Reports* Verzeichnis abgelegt. Es ist möglich ein anderes Verzeichnis anzugeben, dazu muss das gewünschte Verzeichnis hier angegeben werden: *cypress.config.js* `reportDir`.

**Für die Benutzung mit Browserstack:**

Bevor eine Testung gegen Browserstack durchgeführt werden kann, wird ein Konto bei Browserstack benötigt. Nach der Anmeldung werden Authentifizierungsdaten präsentiert, die in der folgenden Datei eingetragen werden müssen: *browserstack.json* / `Username` and `access_key`. In der gleichen Datei können die zu testenden Browser und Betriebssysteme unter: *browserstack.json* / `browsers` angegeben werden.

## Starten der Testung

Starten eines lokalen Tests oder eines Browserstack Tests. Hierfür sind die folgenden Befehle zu verwenden:

### Öffnen der Cypress Oberfläche:

`npm run CY:open`

Hier kann ein Browser und der programierte Testfall ausgewählt und gestartet werden.

:information_source: Es ist möglich mit dem Cypress-Studio gewünschte Testschritte aufzuzeichnen. Dazu muss die Studio Funktionalität eingeschaltet sein. In diesem Repository ist diese Funktion bereits aktiv und steht in der Cypress Oberfläche zur Verfügung. Mehr Informationen zum Studio sind [hier](https://docs.cypress.io/guides/references/cypress-studio#Extending-a-Test) zu finden.

:information_source: Es werden nur zur Laufzeit Auswertungen (Testergebnisse) präsentiert, es findet keine dauerhafte Speicherung statt.

### Starten eines lokalen automatischen Tests: 

`npm run CY:runLocal:all`

Alle Tests (Specs) im E2E-Verzeichnis werden ausgeführt. Nach jedem abgeschlossenen Test werden Berichte, Screenshots und Videos im Verzeichnis: *reports*, *videos* and *screenshots* gespeichert. Es ist auch möglich nur einen einzelne Test aus dem E2E-Verzeichnis zu starten. Hierfür wird der Befehl: `npm run CY:runLocal: your test name` eingegeben. Damit der gewünschte Test gestartet werden kann, ist dieser Test zuvor in der *package.json* / `scripts` plus des gewünschten Browsers anzugeben. 

### Starten eines Browserstack Tests:

`npm run CY:runBrowserstack:all`

**Diese Funktion ist bald vorhanden!**

Alle Tests (Specs) im E2E-Verzeichnis werden ausgeführt. Nach jedem abgeschlossenen Test werden Berichte, Screenshots und Videos bei Browserstack gespeichert. Es ist auch möglich nur einen einzelne Test aus dem E2E-Verzeichnis zu starten. Hierfür wird der Befehl:<br>
 `npm run CY:runBrowserstack:your test name` verwendet. Damit der gewünschte Test gestartet werden kann, ist dieser Test zuvor in der *package.json* / `scripts` plus des gewünschten Browsers anzugeben. 

:information_source: Testen mit Browserstack ist nur möglich, wenn zuvor ein Konto bei Browserstack eingerichtet wurde!

:information_source: Berichte werden nur bei Browserstack gespeichert, es findet keine lokale Speicherung statt!