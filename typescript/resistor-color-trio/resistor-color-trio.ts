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

interface Units {
  [key: number]: string;
}

export const UNITS: Units = {
  1: "",
  100: "hecto",
  1000: "kilo",
  1000000: "mega",
  1000000000: "giga",
};

export function decodedResistorValue(bands: Colors[]): string {
  return `${bands[0] == "black" ? "" : COLORS.indexOf(bands[0])}${COLORS.indexOf(bands[1])} ${UNITS[10 ** COLORS.indexOf(bands[2])]}ohms`;
}

console.log(decodedResistorValue(["blue", "green", "yellow", "orange"]))
console.log(UNITS[10 ** COLORS.indexOf("yellow")])
