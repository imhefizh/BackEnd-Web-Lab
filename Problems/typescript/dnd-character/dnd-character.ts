export class DnDCharacter {
  hitpoints!: number; 
  strength!: number;
  dexterity!: number;
  constitution!: number;
  intelligence!: number;
  wisdom!: number;
  charisma!: number;

  constructor() {
    const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'] as const

    abilities.forEach(ability => {
      this[ability] = DnDCharacter.generateAbilityScore()
    })

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    let rollingResult = Array.from({length: 4}, (_) => Math.ceil(Math.random() * 6))
    return rollingResult.sort((a, b) => b - a).slice(0, 3).reduce((temp, num) => temp += num, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}