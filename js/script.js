$(document).ready(function() {
  randomArray = [];
  arrayUtente = [];
  arrayIndovinati = [];
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
});

function countdown() {
  $("#countdown").text(secondi);
  secondi--;
  if (secondi < 0) {
    clearInterval(intervallo);
    $("#countdown").text("");
    finale = setTimeout(domande, 100);
  }
}

function domande() {
  for (var i = 1; i <= 5; i++) {
    arrayUtente[i - 1] = parseInt(prompt("inserisci il " + i + "° numero che pensi sia nella lista"));
    index = randomArray.indexOf(arrayUtente[i - 1]);
    if (index != -1) {
      arrayIndovinati.push(arrayUtente[i - 1]);
      randomArray.splice(index, 1);
      console.log(randomArray);
    }
  }
  alert("hai indovinato: " + arrayIndovinati + ". Hai dimenticato: " + randomArray );
}
