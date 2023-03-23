var betetInput = document.querySelector("#betet");
var nevlegesInput = document.querySelector("#nevleges");
var tokesitesekSzamaInput = document.querySelector("#tokesitesekSzama");
var szamolasBtn = document.querySelector("#szamolas");
var evesKamatOutput = document.querySelector("#evesKamat");

function evesKamatSzamolas() {
    let tenyleges = (Math.pow((1 + Number(nevlegesInput.value) / (100 * Number(tokesitesekSzamaInput.value))), Number(tokesitesekSzamaInput.value))-1) * Number(betetInput.value);
    evesKamatOutput.value = tenyleges;
}