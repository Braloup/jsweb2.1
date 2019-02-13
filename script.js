// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

import axios from 'axios';

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

let cute_Cat = document.querySelector("#cute_Cat");

async function getCuteCat() {

  let answer = await axios.get('https://aws.random.cat/meow');
  cute_Cat.src = answer.data.file;
}
setInterval(() => {

  getCuteCat()
}, 1000);
