import $ from 'jquery';
export function battleStep (character, target) {

  let rollToHit = Math.random();
  let dodgeAttempt = Math.random();

  if (rollToHit <= (character.chanceToHit)) {
    if (dodgeAttempt >= (target.chanceToDodge)) {
      target.hp -= Math.round((character.strength * .4));
      $('#playerRollNumber').text("HIT!");
      $('#npcImage').addClass('shake-horizontal');
      setTimeout(function() {
        $('#npcImage').removeClass("shake-horizontal");
      }, 450);
    } else {
      $('#playerRollNumber').text("DODGED!");
    }
  } else {
    $('#playerRollNumber').text("MISS!");
  }
    rollToHit = Math.random();
    dodgeAttempt = Math.random();


   if (rollToHit <= (target.chanceToHit)) {
    if (dodgeAttempt >= (character.chanceToDodge)) {
      character.hp -= Math.round((target.strength * .4));
      $('#monsterRollNumber').text("HIT!");
      $('.animator').addClass('shake-horizontal');
      setTimeout(function() {
        $('.animator').removeClass("shake-horizontal");
      }, 450);
    } else {
      $('#monsterRollNumber').text("DODGED!");
    }
  } else {
    $('#monsterRollNumber').text("MISS!");
  }

  let returnValues = [character, target];

  return returnValues;
}

// export function replaceMonster(monster) {
//   monster = new NPC(hp, xpValue, strength, agility);
//   return monster;
// }
