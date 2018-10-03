export default class Character {
  constructor(name, gender, charClass) {
    this.name = name;
    this.gender = gender;
    this.charClass = charClass;

    this.hp = 20;
    this.xp = 0;
    this.level = 1;

    this.inventory = [];

    if ( charClass == "pirate" ) {
      this.strength = 10;
      this.agility = 12;
      this.energy = 3;
    } else if ( charClass == "cyborg" ) {
      this.strength = 12;
      this.agility = 10;
      this.energy = 3;
    } else {
      console.log("Danger!");
    }

    this.chanceToHit = this.agility * 6;
    this.chanceToDodge = this.agility * 4;
  }
}
