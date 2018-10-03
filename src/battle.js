import $ from 'jquery';
export function battleStep (character, target) {

  let rollToHit = Math.random();
  let dodgeAttempt = Math.random();

  if (rollToHit <= (character.chanceToHit * .1)) {
    if (dodgeAttempt >= (target.chanceToDodge * .1)) {
      target.hp -= Math.round((character.strength * .4));
      $('#playerRollNumber').text("HIT!");
      if(target.hp <= 0) {
        console.log("he ded!")
      }
    } else {
      $('#playerRollNumber').text("DODGED!");
    }
  } else {
    $('#playerRollNumber').text("MISS!");
  }
    rollToHit = Math.random();
    dodgeAttempt = Math.random();


   if (rollToHit <= (target.chanceToHit  * .1)) {
    if (dodgeAttempt >= (character.chanceToDodge  * .1)) {
      character.hp -= Math.round((target.strength * .4));
      $('#monsterRollNumber').text("HIT!");
      if(character.hp <=0){
        console.log("yer ded.");
      }
    } else {
      $('#monsterRollNumber').text("DODGED!");
    }
  } else {
    $('#monsterRollNumber').text("MISS!");
  }

  let returnValues = [character, target];

  return returnValues;
}
