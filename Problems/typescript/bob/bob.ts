export function hey(message: string): string {
  let data: string|number = 0b00 // [questionMark, isShouting]
  const letter: string[] = 'abcdefghijklmnopqrstuvwxyz'.split("")

  message = message.trim()
  if (!message) return "Fine. Be that way!"
  if (message[message.length - 1] == "?") data = data + 0b10
  if ([...message].some(x => letter.includes(x.toLowerCase()))) {
    if (message == message.toUpperCase()) data = data + 0b01
  }

  switch (data) {
    case 0b10:
      return "Sure."
    case 0b01:
      return "Whoa, chill out!"
    case 0b11:
      return "Calm down, I know what I'm doing!"
    default:
      return "Whatever.";
  }
}