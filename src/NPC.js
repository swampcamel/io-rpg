export default class NPC {
  constructor(hp, xpValue, strength, agility) {
    this.hp = hp;
    this.xpValue = xpValue;
    this.strength = strength;
    this.agility = agility;

    this.chanceToHit = this.agility * .6;
    this.chanceToDodge = this.agility * .4;
  }
}
