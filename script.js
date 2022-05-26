const output = document.querySelector('.output');
const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
output.innerHTML = 'Enter User Name and password';
const delay = ms => new Promise(res => setTimeout(res, ms));

let usr;
let charClass;

function login() {
  usr = username.value;
  output.innerHTML =
    output.innerHTML +
    `<br/>Welcome ${
      username.value
    } to DEATHSDUNGEON <br/>${password.value.replace(
      /./g,
      '*',
    )} is a pretty good password`;
  document.querySelector('span').innerHTML = `${username.value}@DEATHSDUNGEON`;
  enterTheDungeon();
}

const enterTheDungeon = async () => {
  await delay(5000);
  window.location.href = 'dungeon.html';
};
