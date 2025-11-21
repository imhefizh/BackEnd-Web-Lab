export class Robot {
  private myName: string = "";
  static nameRegistrar: Set<string> = new Set();

  constructor() {
    this.myName = this.name
  }

  public get name(): string {
    if (this.myName) {
      return this.myName
    } else {
      this.myName = this.generateName()
      return this.myName
    }
  }

  private generateName(): string {
    let generatedName: string[] = []
      const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
      const digit = "1234567890".split("")

    do {
      generatedName = []
      while (generatedName.length < 5) {
        if (generatedName.length < 2) {
          generatedName.push(letter[Math.floor(Math.random() * (letter.length))])
        } else {
          generatedName.push(digit[Math.floor(Math.random() * (digit.length))])
        }
      }
    } while (Robot.nameRegistrar.has(generatedName.join("")))
    
    Robot.nameRegistrar.add(generatedName.join(""))
    return generatedName.join("")
  }

  public resetName(): void {
    this.myName = ""
  }

  public static releaseNames(): void {
    Robot.nameRegistrar.clear()
    
  }
}