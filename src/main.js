import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import Character from './Character.js';
import NPC from './NPC.js';
import { battleStep } from './battle.js';
import $ from 'jquery';

$(document).ready(function(){
  let character2 = new Character('eli', 'male', 'pirate');
  let monster1 = new NPC(3, 5, 6, 2);

while( character2.hp > 0 || monster1.hp > 0 ) {
  let battleSequence = battleStep(character2, monster1);
  character2 = battleSequence[0];
  monster1 = battleSequence[1];

  console.log(character2);
  console.log(monster1);
}

});
