export const ANSWER = ["Whatever.", "Sure.", "Whoa, chill out!", "Calm down, I know what I'm doing!"]

export function hey(message: string): string {
  message = message.trim()
  if (!message) return "Fine. Be that way!"
  const isQuenstion = message.endsWith("?")
  const isShouting = /[a-z]/gi.test(message) && message == message.toUpperCase()

  return ANSWER[Number(isQuenstion) + (isShouting ? Number(isShouting) + 1: 0) ]
}