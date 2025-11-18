export function isPangram(str: string): boolean {
  const letters = new Set(str.toLowerCase().replace(/[^a-z]/g, ''))
  return letters.size === 26
}

// Inspired by Community