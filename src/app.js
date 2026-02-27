import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


//write your code here


let button = document.createElement("button");

button.textContent = "Generar nueva carta";
button.style.marginBottom = "20px";
button.style.marginLeft = "20px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";


document.body.appendChild(button);



let card = document.createElement("div");

card.style.marginLeft = "20px";
card.style.width = "300px";
card.style.height = "450px";
card.style.background = "white";
card.style.borderRadius = "15px";
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
card.style.position = "relative";
card.style.display = "flex";
card.style.justifyContent = "center";
card.style.alignItems = "center";
card.style.fontSize = "80px";
card.style.fontFamily = "serif";

let number = document.createElement("div");

let topHeart = document.createElement("div");

topHeart.style.position = "absolute";
topHeart.style.top = "10px";
topHeart.style.left = "15px";
topHeart.style.fontSize = "40px";

let bottomHeart = document.createElement("div");

bottomHeart.style.position = "absolute";
bottomHeart.style.bottom = "10px";
bottomHeart.style.right = "15px";
bottomHeart.style.fontSize = "40px";
bottomHeart.style.transform = "rotate(180deg)";


card.appendChild(number);
card.appendChild(topHeart);
card.appendChild(bottomHeart);
document.body.appendChild(card);

function generarCarta() {

  let numerosCartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let simbolosCartas = ["♥", "♦", "♠", "♣"];

  let indiceSimbolos = Math.floor(Math.random() * simbolosCartas.length);
  let indiceNumerosCartas = Math.floor(Math.random() * numerosCartas.length);

  let simbolo = simbolosCartas[indiceSimbolos];
  let valor = numerosCartas[indiceNumerosCartas];


  number.textContent = valor;
  topHeart.textContent = simbolo;
  bottomHeart.textContent = simbolo;

  // Cambiar color según el palo//
  let color = (simbolo === "♥" || simbolo === "♦") ? "red" : "black";

  topHeart.style.color = color;
  bottomHeart.style.color = color;
  number.style.color = color;






}

document.addEventListener("click", generarCarta)

