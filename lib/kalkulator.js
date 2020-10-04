/**
 * En veldig enkel kalkulator som skal kunne addere, subtrahere, multiplisere og dividere 2 tall
 */

function addisjon (addend1, addend2) {
  return addend1 + addend2
}

// Eksporterer modulen slik at den kan gjenbrukes
module.exports.addisjon = addisjon
