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
