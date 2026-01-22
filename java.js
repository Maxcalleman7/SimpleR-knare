const nummer = document.getElementById("nummer")
const plus = document.getElementById("öka")
const minus = document.getElementById("minska")
const reset = document.getElementById("återställa")
const meddelande = document.getElementById("meddelande")
const meddelande2 = document.getElementById("meddelande2")
const Öka5 = document.getElementById("Öka5")
const Mult5 = document.getElementById("*5")
const Multi10 = document.getElementById("*10")
const Windows = document.getElementById("Windows")
const sounde = new Audio("Windows XP Error Sound.mp3");


let bonusMeddelande = "";
let meddelandeText = "";
let count = 0;


Multi10.addEventListener("click", function(){
    count *= 10;
    nummer.textContent = count;
    Färg();
});


Mult5.addEventListener("click", function(){
    count *= 5;
    nummer.textContent = count;
    Färg();
});


plus.addEventListener("click", function(){
    count++;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();
    Färg();

});
minus.addEventListener("click", function(){
    count--;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();
    Färg();
});
reset.addEventListener("click", function(){
    count = 0;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();
    Färg();
});

Öka5.addEventListener("click", function(){
    count += 5;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();
    Färg();
    sounde.play();
});



sounde.addEventListener("click", function(){
    sounde.play();
});



function färgändring(){
if (count > 0){
    nummer.style.color = "green";
}else if (count < 0 ){
    nummer.style.color = "red";
}else {
    nummer.style.color = "black";
}
}

function loggaMeddelande(){
    if (count > 0){
        meddelandeText = "Talet är positivt";
    }else if (count < 0){
        meddelandeText = "Talet är negativt";
    }else {
        meddelandeText = "Talet är noll";
    }
    meddelande.textContent = meddelandeText;
}

function Bonus(){
    if (count > 0){
        bonusMeddelande = "Du har nått ett högt positivt tal!";
    }
    else if (count < 0){
        bonusMeddelande = "Du har nått ett lågt negativt tal!";
    }
    meddelande2.textContent = bonusMeddelande;
}














