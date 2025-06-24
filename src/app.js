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

let container =document.getElementById('domainContainer');

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      for (let k = 0; k <domain.length; k++){
      let elements = pronoun[i] + adj[j] + noun[h] + domain[k];
      console.log(elements);

      let col = document.createElement('div');
      col.className = 'col-sm-6 col-md-4 col-lg-3 mb-3';

      let card = document.createElement('div');
      card.className = 'card p-3 text-center' ;
      
      
      // Nuevo enlace con el dominio
      
      let link = document.createElement('a');
      link.href='https://' + elements;
      link.target = '_blank' ;
      link.textContent = elements;
      link.className ='text-decoration-none w-bold text-primary';
        
        card.appendChild(link);
        card.textContent = elements;
        col.appendChild(card);
        container.appendChild(col);
      }
    }
  }
}