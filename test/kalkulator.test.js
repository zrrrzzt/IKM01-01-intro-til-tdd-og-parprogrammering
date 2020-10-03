/**
 * I Node bruker man require for å hente inn moduler
 * Man oppgir navnet på modulen dersom man har installert den slik vi gjør med ava
 * Man oppgir banen til modulen dersom der er en lokal fil
 * ".." betyr opp et nivå i katalogstrukturen, dersom du skal hente en fil i samme katalog du står så bruker du "./"
 */

const test = require('ava')
const kalkulator = require('../lib/kalkulator')()

/**
 * Som bruker ønsker jeg at addisjon av 1 + 3 gir svaret 4
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */
test('addisjon av 1 + 3 gir 4', t => {
  t.is(kalkulator.addisjon(1, 3), 4, 'addisjon 1 + 3 er ok')
})

/**
 * Som bruker ønsker jeg at addisjon av 1 + 2 gir svaret 3
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */
test('addisjon av 1 + 2 gir 3', t => {
  t.is(kalkulator.addisjon(1, 2), 3, 'addisjon 1 + 2 er ok')
})
