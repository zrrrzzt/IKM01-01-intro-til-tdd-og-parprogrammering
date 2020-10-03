/**
 * En veldig enkel kalkulator som skal kunne addere, subtrahere, multiplisere og dividere 2 tall
 */

// Lager modulen
const kalkulator = () => {
  return {
    addisjon (a, b) {
      return a + b
    }
  }
}

// Eksporterer modulen slik at den kan brukes av andre
module.exports = kalkulator
