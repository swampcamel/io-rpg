import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import Character from './Character.js';
import NPC from './NPC.js';
import { battleStep } from './battle.js';
import $ from 'jquery';

$(document).ready(function(){
  let character2 = new Character('eli', 'male', 'cyborg');
  let monster1 = new NPC(13, 5, 8, 8);
  console.log(character2);
  console.log(monster1);

  $(".butt").click(function(){
    let battleSequence = battleStep(character2, monster1);
    character2 = battleSequence[0];
    monster1 = battleSequence[1];

    console.log(character2);
    console.log(monster1);

  })


});
