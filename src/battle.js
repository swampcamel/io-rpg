
export function battleStep (character, target) {


  let rollToHit = Math.random();
  let dodgeAttempt = Math.random();

  if (rollToHit <= character.chanceToHit) {
    if (dodgeAttempt <= target.chanceToDodge) {
      target.hp -= (character.strength * .4);
      if(target.hp <= 0) {
        console.log("he ded!")
      }
    }
    rollToHit = Math.random();
    dodgeAttempt = Math.random();
  } else if (rollToHit <= target.chanceToHit) {
    if (dodgeAttempt <= character.chanceToDodge) {
      character.hp -= (target.strength * .4);
      if(character.hp <=0){
        console.log("yer dead.");
      }
    }
  }

  let returnValues = [character, target];

  return returnValues;
}
