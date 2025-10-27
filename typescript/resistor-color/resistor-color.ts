export const colorCode = (color: string):number => {
  return COLORS.findIndex((x) => x == color.toLowerCase())
}

export const COLORS:string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
