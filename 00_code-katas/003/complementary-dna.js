function DNAStrand(dna) {
  const parts = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  let newDna = '';

  for (let i = 0; i < dna.length; i++) {
    newDna += parts[dna[i]];
  }

  return newDna;
}

console.log(DNAStrand('AAAA'), 'TTTT', 'String AAAA is');
console.log(DNAStrand('ATTGC'), 'TAACG', 'String ATTGC is');
console.log(DNAStrand('GTAT'), 'CATA', 'String GTAT is');
