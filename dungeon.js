const output = document.querySelector('.output');
const txtInput = document.getElementById('txtInput');
const form = document.querySelector('form');
const delay = ms => new Promise(res => setTimeout(res, ms));
const term = output.innerHTML;

let fightPower;
let charClass;

document.addEventListener('DOMContentLoaded', function () {
  charCreate();
});

function charCreate() {
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
        txtInput.value = '';
        setTimeout(rollForStat, 2000);
        break;
      case '2':
        output.innerHTML = `Ah, you think your sneaks will save you?`;
        charClass = 'rogue';
        txtInput.value = '';
        setTimeout(rollForRog, 2000);
        break;
      default:
        output.innerHTML = `Please take this serious, this isn't a game.<br> Make an appropriate  selection`;
    }
    form.removeEventListener('submit', formListener);
  };
  form.addEventListener('submit', formListener);
}

function rollForStat() {
  let stat = charClass == 'wizard' ? 'Int' : 'Haste';
  output.innerHTML = `Do you want to go with 5 ${stat} (charClassInt, <br>
        or roll a d10? <br>If you roll 0 you die, no redos. <p>1. Lets roll baby!<br>2. I'll just take the 5.<br> 3. I don't want to play this anymore.`;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let select = txtInput.value;

    switch (select) {
      case '1':
        //something
        break;
      case '2':
        output.innerHTML = `Let's see what happens.`;
        break;
      case '3':
        output.innerHTML = `This site might be a better fit for you.`;
        cryBaby();
    }
  });
}

function rollForRog() {
  output.innerHTML = `Do you want to go with 5 Haste, <br>
        or roll a d10?<br>If you roll 0 you die, no redos.`;
}

const cryBaby = async () => {
  await delay(1000);
  window.location.href = 'https://us.teletubbies.com/';
};
