const nummer = document.getElementById("nummer")
const plus = document.getElementById("öka")
const minus = document.getElementById("minska")
const reset = document.getElementById("återställa")
const meddelande = document.getElementById("meddelande")
const meddelande2 = document.getElementById("meddelande2")
const Öka5 = document.getElementById("Öka5")


let bonusMeddelande = "";
let meddelandeText = "";
let count = 0;

plus.addEventListener("click", function(){
    count++;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();

});
minus.addEventListener("click", function(){
    count--;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();
});
reset.addEventListener("click", function(){
    count = 0;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();
    
});

Öka5.addEventListener("click", function(){
    count += 5;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();
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
    if (count > 10){
        bonusMeddelande = "Du har nått ett högt positivt tal!";
    }
    else if (count < -10){
        bonusMeddelande = "Du har nått ett lågt negativt tal!";
    }
    meddelande2.textContent = bonusMeddelande;
}









