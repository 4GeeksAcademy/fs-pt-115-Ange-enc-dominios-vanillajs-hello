import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.es', '.org', '.net']

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      for (let k = 0; k <domain.length; k++){
      let elements = pronoun[i] + adj[j] + noun[h] + domain[k];
      console.log(elements);
      }
    }
  }
}