$(document).ready(function() {
  randomArray = [];
  arrayUtente = [];
  i = 0
  do {
    newRandom = Math.floor(Math.random() * 100 + 1);
    if (randomArray.includes(newRandom) == false) {
      randomArray.push(newRandom);
    }
  } while (randomArray.length < 5);
  alert(randomArray);
  console.log(randomArray);
  secondi = 30;
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
  indovinato = 0;
  for (var i = 1; i <= 5; i++) {
    arrayUtente[i - 1] = parseInt(prompt("inserisci il " + i + "° numero che pensi sia nella lista"));
    index = randomArray.indexOf(arrayUtente[i - 1]);
    if (index != -1) {
      randomArray.splice(index, 1);
      indovinato++;
      console.log(randomArray);
    }
  }
  alert("hai indovinato " + indovinato + " numeri su 5")
}
