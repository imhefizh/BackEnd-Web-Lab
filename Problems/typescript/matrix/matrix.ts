export class Matrix {
  rows: number[][];
  columns: number[][];

  constructor(input: string) {
    this.rows = [...input.split("\n")].map((x) => x.split(' ').map(Number))
    
    this.columns = []
    for (let i in this.rows[0]) {
      const column = []
      for (let row in this.rows) {
        column.push(this.rows[row][i])
      }
      this.columns.push(column)
    }
  }
}