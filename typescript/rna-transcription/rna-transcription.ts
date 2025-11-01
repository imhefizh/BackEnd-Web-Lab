export const PAIRS: Pairs = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
} 

export interface Pairs {
  [key: string]: string
}

export function toRna(dna: string):string {
  const rna: string[] = []
  for (let x of dna) {
    if (PAIRS[x]) {
      rna.push(PAIRS[x])
    } else {
       throw new Error("Invalid input DNA.");
    }
  }
  return rna.join("")
}