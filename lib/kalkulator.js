/**
 * En veldig enkel kalkulator som skal kunne addere, subtrahere, multiplisere og dividere 2 tall
 */

function addisjon (addend1, addend2) {
  return addend1 + addend2
}

/**
 * Tips til oppgaven 
  function subtraksjon (a, b) {
    return 2
  }
*/


// Eksporterer modulen slik at den kan gjenbrukes
module.exports.addisjon = addisjon

// Tips til oppgaven
// module.exports.subtraksjon = subtraksjon
