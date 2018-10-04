import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import Character from './Character.js';
import NPC from './NPC.js';
import { battleStep, replaceMonster } from './battle.js';
import $ from 'jquery';

$(document).ready(function(){
  let playerCharacter;
  let monster1 = new NPC();

  $("form#creatorForm").submit(function(event) {
    event.preventDefault();
    const playerName = $('#nameInput').val();
    const playerGender = $('#gender').val();
    const playerClass = $('#class').val();
    if(playerClass === "cyborg") {
      $(".player #cyborgImage").show();
    } else if (playerClass === "pirate") {
      $(".player #pirateImage").show();
    } else {
      alert("Please Choose a class!");
    }
    playerCharacter = new Character(playerName, playerGender, playerClass);

    $('.creator').hide();
    $('.game').addClass('showGame');

    $("#playerName").text(playerCharacter.name);

    $("#playerAgility span").text(playerCharacter.agility);
    $("#monsterAgility span").text(monster1.agility);

    $("#playerStrength span").text(playerCharacter.strength);
    $("#monsterStrength span").text(monster1.strength);

    $("#playerLevel span").text(playerCharacter.level);
    // $("#monsterLevel span").text(monster1.level);

    $("#playerHit-points span").text(playerCharacter.hp);
    $("#monsterHit-points span").text(monster1.hp);

    $("#playerXP span").text(playerCharacter.xp);

    $("#playerGender").text(playerCharacter.gender);

    $("#playerEnergy span").text(playerCharacter.energy);

    console.log(playerCharacter);
  });

  $("#attack-btn").click(function(){
    let battleSequence = battleStep(playerCharacter, monster1);
    playerCharacter = battleSequence[0];
    monster1 = battleSequence[1];
    if (playerCharacter.hp <= 0) {
      $("#monsterWins").show();
    } else if (monster1.hp <= 0) {
      monster1 = new NPC();
      $("#monsterStrength span").text(monster1.strength);
      $("#monsterAgility span").text(monster1.agility);
      $("#npcImage").addClass("newMonsterAnimator");
      setTimeout(function() {
        $('#npcImage').removeClass("newMonsterAnimator");
      }, 2050);
    }
    $("#playerHit-points span").text(playerCharacter.hp);
    $("#monsterHit-points span").text(monster1.hp);
    $("#playerEnergy span").text(playerCharacter.energy);

    console.log(playerCharacter);
    console.log(monster1);



  });


});
