const output = document.querySelector('.output');
const txtInput = document.getElementById('txtInput');
const form = document.querySelector('form');
const delay = ms => new Promise(res => setTimeout(res, ms));
let charClass;
let charStat;
let foeStat;
let deathCount = 0;

// Add Monster Array

document.addEventListener('DOMContentLoaded', function () {
  //put start game back
 startGame();
});

// Rolls character stats

function rollStat() {
  return Math.floor(Math.random() * 10)
}

// Battle

function fight(first, second) {
  return results = first - second
}

// For cry babies only

const cryBaby = async () => {
  await delay(1000);
  window.location.href = 'https://us.teletubbies.com/';
};

// Wrong Input

function wrgInput() {
  output.innerHTML = `Please take this serious, this isn't a game.<br> Make an appropriate  selection`;
}

// DEATH is fun

function deathFun() {
  // add +1 to death
  deathCount++;
  alert(`You died ${deathCount} Want to try again?`) // Change to a death screen
  //restart on okay
  startGame()

}

// Load Next Scene

const loadScene = function (scene) {
  txtInput.value = '';
  setTimeout(scene, 2000);
}

// Starts the game

function startGame() {
  output.innerHTML = `
    I hope you're ready for DEATHSDUNGEON where only <br>
    death awaits you ahead. Now please select if <br>
    you'd like to die as a Wizard or a Rogue? <p> 1. Wizard <br> 2. Rogue`;

  let formListener = function (e) {
    e.preventDefault();
    let select = txtInput.value;

    switch (select) {
      case '1':
        output.innerHTML = `Yer a wizard 'arry, an excellent way to die`;
        charClass = 'wizard';
        loadScene('rollForStat()')
        break;
      case '2':
        output.innerHTML = `Ah, you think your sneaks will save you?`;
        charClass = 'rogue';
        loadScene('rollForStat()')
        break;
      default:
        wrgInput();
    }
    form.removeEventListener('submit', formListener);
  };
  form.addEventListener('submit', formListener);
}

// Character stat creation

function rollForStat() {
  let stat = charClass == 'wizard' ? 'Int' : 'Haste';
  output.innerHTML = `Do you want to go with 5 ${stat} <br>
        or roll a d10? <br>If you roll 0 you die, no redos. <p>1. Lets roll baby!<br>2. I'll just take the 5.<br> 3. I don't want to play this anymore.`;
  let formListener = function (e){
    e.preventDefault();
    let select = txtInput.value;

    switch (select) {
      case '1':
        charStat = rollStat();
        if (charStat === 0) {
          output.innerHTML = `You rolled a ${charStat}.<br> Awwwww too bad, you die`;
          deathFun(); // crash game modal maybe??
        } else if (charStat < 0 || charStat < 5) {
          output.innerHTML = `You rolled a ${charStat}.<br> Tough luck, but maybe you wont die...`;
          loadScene('battle1()');
        } else {
          output.innerHTML = `You rolled a ${charStat}.<br> The Gods may be on your side yet.`;
          loadScene('battle1()');
        }
        break;
      case '2':
        output.innerHTML = `Not willing to take the risk? I guess we'll see how it goes. RIP.`;
        break;
      case '3':
        output.innerHTML = `This site might be a better fit for you.`;
        cryBaby();
        break;
      default:
        wrgInput();
    }
    form.removeEventListener('submit', formListener);
  };
  form.addEventListener('submit', formListener);
}

// First encounter

function battle1() {
  let ratStat = 10
  output.innerHTML = `You bust through the door of the dungeon (which was a bad<br>
    idea I might add). The musk of the depths wafts across your face leaving you<br>
    slightly light headed. As you look around you cant see much in the dim light,<br>
    but you notice something small in the corner. As you turn to continue gazing<br>
    aimlessly and recklessly around this very dangerous DUNGEON, the thing in the<br>
    corner suddenly lashes out and attacks your fragile ${charClass} head.<br>
    It's a Dirt Rat!<br>
    What are you going to do?<p/>
    1. ATTACK!<br> 2. Try to avoid attack.<br> 3. RUUN!!!!!`

  let formListener = function (e) {
    e.preventDefault();
    let s = txtInput.value;


    switch (s) {
      case '1':
        fight(charStat, ratStat);
        if (results <= 0) {
          console.log(`char: ${charStat}, rat: ${ratStat}`)
          output.innerHTML = `You killed the rat! Huzzah!`;
          console.log(results)
          //loadScene(battle2)
        } else {
          output.innerHTML = `YOU DIED`;
          deathFun()
          console.log(deathCount)
        }
        break;
      case '2':
        deathFun();
        break;
      case '3':
        output.innerHTML = `You were attacked!!`;
        break
      default:
        wrgInput();
    }
    form.removeEventListener('submit', formListener);
  };
  form.addEventListener('submit', formListener);

}

//second encounter

// function battle2() {
//   output.innerHTML = `battle 2`

//   let formListener = function (e) {
//     e.preventDefault();
//     let s = txtInput.value;

//     switch (s) {
//       case '1':

//         output.innerHTML = `Attacked`;
//         break;
//       case '2':
//         deathFun();
//         break;
//       case '3':
//         output.innerHTML = `You were attacked!!`;
//         break
//      default:
//         wrgInput();
//     }
//     form.removeEventListener('submit', formListener);
//   };
//   form.addEventListener('submit', formListener);

// }

