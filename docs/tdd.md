# TDD - Testdrevet utvikling

TDD, test-driven development, er en programmeringsteknikk hvor du skriver testene først og så koden.
I grove trekk består TDD av tre trinn som du gjentar i hele utviklingsløpet.

- Skriv en test som feiler
- Skriv den minste implementasjonen du kan av koden for å få testen til å bestå
- Refaktorer koden

## Et eksempel: en enkel kalkulator

Vi skal lage en kalkulator.
For å starte så enkelt som mulig bestemmer vi oss for at den skal kunne legge sammen 2 tall.
Vi ønsker å ha en funksjon for dette.

![Test som sjekker at 1 + 3 er 4](../images/kalkulator-test-1.png)

Testen sjekker at funksjonen tar imot to tall, 1 og 3. Så sjekker den at resultatet av dette blir 4.

Så skriver vi den minste implementasjonen vi kan komme på for at denne testen skal bestå.

![Funksjon som returnerer 4](../images/kalkulator-trinn-1.png)

Å skrive en funksjon som bare returnerer 4 får testen til å bestå.
Det kan virke dumt å gjøre noe så lite men nå vet du at denne testen vil passere så lenge funksjonen din returnerer 4 når du sender inn 1 og 3.
Da kan du trygt starte å refaktorere koden din fordi du vet at dersom du gjør det riktig vil testen fortsatt bestå.

![Funksjon som returnerer summen av 2 tall](../images/kalkulator-trinn-2.png)

Testen består fortsatt og da kan vi, dersom vi ønsker, refaktorere videre.
Det er for eksempel ikke så tydelig å lese koden og forstå hva a og b er.
Vi kan for eksempel erstatte de med tall1 og tall2, eller bruke det helt korrekte addend1 og addend2

![Funksjon som returnerer summen av 2 tall](../images/kalkulator-trinn-3.png)

# Oppgave

Koden vi har laget nå ligger i filen [lib/kalkulator.js](../lib/kalkulator.js).
Testene ligger i [test/kalkulator.test.js](../test/kalkulator.test.js)

Disse filene skal du nå jobbe videre med selv.
Oppgavene er at du skal implementere funksjonalitet for subtraksjon, multiplikasjon og divisjon i kalkulatoren.
Brukerhistoriene ligger som kommentarer i testfilen.

For å kjøre testene åpner du terminalen i VS Code (View => Terminal) og du skriver `npm test` for at den skal kjøre testen.

Tips: Om du vil testene skal kjøre hver gang du lagrer kan du bruke `npm run watch:test`.
Når du vil slå av automatikken bruker du tastekombinasjonen [control] + [c]. Det kommer en stygg feilmelding, men det er helt ok :-)


