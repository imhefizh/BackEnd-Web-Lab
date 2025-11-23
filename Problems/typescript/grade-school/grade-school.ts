interface Roster {
  [key: number]: string[]
}

export class GradeSchool {
  private _roster: Roster = {}

  public roster():Roster {return JSON.parse(JSON.stringify(this._roster));}

  public add(name:string, grade:number): void {
    const legacy = this._roster[grade] ? [...this._roster[grade]] : []
    for (const key of Object.keys(this._roster)) {
      const grade = Number(key);
      const value = this._roster[grade];
      if (value.includes(name)) {
        this._roster[grade] = value.filter(x => x !== name);
      }
    }
    this._roster[grade] = [...legacy, name].sort()
  }

  public grade(grade: number): string[] {
    return this._roster[grade] ? JSON.parse(JSON.stringify(this._roster[grade])) : []
  }
}