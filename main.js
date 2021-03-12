"use strict";

let ctverecek = document.querySelector(".ctverecek");

//  TASK - 1 - Vytvořte tlačítko, při jehož stisknutí se změní barva Čtvereček na zelenou.

//  Option 1
// document.querySelector("#myBtn").addEventListener("click", () => {
// ctverecek.style.backgroundColor = "red";
// });

// option 2
let myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", changeColor);

function changeColor() {
  ctverecek.style.backgroundColor = "tomato";
  ctverecek.textContent = "Tomato Color";
}

// TASK - 2 - Upravte kód tak, aby se výsledek funkce secti() zobrazil v prvku s ID vysledek až po stiknutí nově přidaného tlačítka "Zobraz výsledek".

let btnVysledek = document.querySelector("#btnVysledek");
btnVysledek.addEventListener("click", () => {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
});

function secti(a, b) {
  let c = a + b;
  return c;
}

//  TASK - 3 - Uprav funkci upozorni() tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu Čtvereček.

function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Klikáš na mě?");
  ctverecek.textContent = "Changes";
}

