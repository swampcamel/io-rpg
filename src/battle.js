
export function battleStep (character, target) {


  let rollToHit = Math.random();
  let dodgeAttempt = Math.random();
  console.log("dodge attempt character");
  console.log(dodgeAttempt);
  if (rollToHit <= (character.chanceToHit * .1)) {
    if (dodgeAttempt >= (target.chanceToDodge * .1)) {
      target.hp -= (character.strength * .4);
      if(target.hp <= 0) {
        console.log("he ded!")
      }
    }
    rollToHit = Math.random();
    dodgeAttempt = Math.random();
    console.log("dodge attempt npc");
    console.log(dodgeAttempt);
    console.log("chance: character");
    console.log(character.chanceToDodge * .1);
    console.log("chance target");
    console.log(target.chanceToDodge * .1);
  }

   if (rollToHit <= (target.chanceToHit  * .1)) {
    if (dodgeAttempt >= (character.chanceToDodge  * .1)) {
      character.hp -= (target.strength * .4);
      if(character.hp <=0){
        console.log("yer ded.");
      }
    }
  }

  let returnValues = [character, target];

  return returnValues;
}
