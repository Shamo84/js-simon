$(document).ready(function() {
  array = [];
  arrayUtente = [];
  i = 0
  do {
    newRandom = Math.floor(Math.random() * 100 + 1);
    if (array.includes(newRandom) == false) {
      array.push(newRandom);
    }
  } while (array.length < 5);
  alert(array);
  secondi = 5;
  intervallo = setInterval(countdown, 1000);
  finale = setTimeout(domande, (secondi+1.1)*1000);
});

function countdown() {
  $("#countdown").text(secondi);
  secondi--;
  if (secondi < 0) {
    clearInterval(intervallo);
    $("#countdown").text("");
  }
}

function domande() {
  for (var i = 1; i <= array.length; i++) {
    arrayUtente[i - 1] = prompt("inserisci il " + i + "° numero della lista");
  }
  indovinato = 0;
  for (var i = 1; i <= array.length; i++) {
    if (arrayUtente[i - 1] == array[i - 1]) {
      indovinato++;
      alert("hai indovinato il " + i + "° numero che era " + array[i - 1])
    } else {
      alert("hai sbagliato il " + i + "° numero. Non era " + arrayUtente[i - 1] + " ma " + array[i - 1])
    }
  }
  alert("hai indovinato " + indovinato + " numeri su 5")
}
