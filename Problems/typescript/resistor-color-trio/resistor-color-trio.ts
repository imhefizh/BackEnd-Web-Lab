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

export function decodedResistorValue(bands: Colors[]): string {
  const firstBand = COLORS.indexOf(bands[0])
  const secBand = COLORS.indexOf(bands[1])
  const thirdBand = COLORS.indexOf(bands[2])

  let resistance = (firstBand * 10 + secBand) * (10 ** thirdBand)
  
  let unit = "ohms"
  if (resistance >= 1_000_000_000) {
    resistance /= 1_000_000_000
    unit = "gigaohms"
  } else if (resistance >= 1_000_000) {
    resistance /= 1_000_000
    unit = "megaohms"
  } else if (resistance >= 1_000) {
    resistance /= 1_000
    unit = "kiloohms"
  } 

  return `${resistance} ${unit}`;
}