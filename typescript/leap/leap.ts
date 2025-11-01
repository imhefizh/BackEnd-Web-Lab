export function isLeap(yearToBeValidate: number): boolean {
  return yearToBeValidate % 100 == 0 ? yearToBeValidate % 400 == 0 : yearToBeValidate % 4 == 0
}