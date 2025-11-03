export const PLANETS = {'mercury': 0.2408467, 'venus': 0.61519726, 'earth': 1.0, 'mars': 1.8808158, 'jupiter': 11.862615, 'saturn':29.447498, 'uranus':84.016846, 'neptune': 164.79132} as const

export type Planets = keyof typeof PLANETS
export const EARTH_YEAR = 31557600

export function age(planet: Planets, seconds: number): number {
  return Number((seconds/(EARTH_YEAR*PLANETS[planet])).toFixed(2))
}
