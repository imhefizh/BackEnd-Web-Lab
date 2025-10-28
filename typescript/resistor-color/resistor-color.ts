// export const colorCode = (color: string):number => {
//   return COLORS.findIndex((x) => x == color.toLowerCase())
// }

// export const COLORS:string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

// Revision after mentoring
export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] as const; // as const make it being string literal

export type Color = typeof COLORS[number]; // make the COLORS as union type so this type will help to validate the input

export const colorCode = (color: Color):number => {
  return COLORS.indexOf(color)
}

// Mentoring feedback by atk
/*
indexOf is slightly faster, not having to run a callback on every item, unlike findIndex. While performance is not an issue here, indexOf is indeed the more idiomatic method. Also, instead of converting the color to lower case, wouldn't it be better to only allow valid color names?

TypeScript actually gives you that power through its type system. It works like that: you use types to constrain arguments and assignments whenever needed. The trick is to get the most out of the types with the least amount of work.

To do that, you can convert objects into types using typeof. Unfortunately, an array of strings will be typed as string[], because TS thinks the items may change. To get the actual strings, you need to make it read only using a const assertion by adding as const at the end of the assignment
*/