// export function twoFer(name?: string): string {
//   return  name ? `One for ${name}, one for me.` : 'One for you, one for me.'
// }

// Revision after mentoring
export const twoFer = (name:string = 'you') =>
  `One for ${name}, one for me.`;