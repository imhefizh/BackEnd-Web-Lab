export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

export type Colors = (typeof COLORS)[number];

export function decodedValue([first, second]: Colors[]): number {
  return Number(`${COLORS.indexOf(first)}${COLORS.indexOf(second)}`)
}
