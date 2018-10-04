export default class NPC {
  constructor() {
    this.hp = Math.round((Math.random() * 20));
    this.strength = Math.round((Math.random() + 1) * 5);
    this.agility = Math.round((Math.random() + 1) * 5);
    this.xpValue = (this.hp / 2) + this.strength + this.agility;

    this.chanceToHit = this.agility * .06;
    this.chanceToDodge = this.agility * .04;
  }
}
