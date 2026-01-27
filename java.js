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
const partyMode = document.getElementById("partyMode")
const epsteinBtn = document.getElementById("epstein")
const epsteinPopup = document.getElementById("epsteinPopup")
const closeBtn = epsteinPopup ? epsteinPopup.querySelector(".close") : null
const geekBtn = document.getElementById("Geek")


let bonusMeddelande = "";
let meddelandeText = "";
let count = 0;
let audioInstances = []; // Track all audio instances


Multi10.addEventListener("click", function(){
    count *= 10;
    nummer.textContent = count;

});


Mult5.addEventListener("click", function(){
    count *= 5;
    nummer.textContent = count;
    
});


plus.addEventListener("click", function(){
    count++;
    nummer.textContent = count;
    färgändring();
    loggaMeddelande();
    Bonus();
    play();

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


function play() {   
    const newSound = new Audio("audio/Windows XP Error Sound.mp3");
    audioInstances.push(newSound);
    newSound.play();
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

partyMode.addEventListener("click", function(){
    let time = 0;

    const ernSound = new Audio("audio/ern.mp3");
    audioInstances.push(ernSound);
    ernSound.play();
    
function animate() {
  time += 0.01;

  const r = Math.floor(128 + 127 * Math.sin(time));
  const g = Math.floor(128 + 127 * Math.sin(time + 2));
  const b = Math.floor(128 + 127 * Math.sin(time + 4));

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  requestAnimationFrame(animate);
}




animate();
});

epsteinBtn.addEventListener("click", function(){
    // Show popup
    if (epsteinPopup) {
        epsteinPopup.style.display = "block";
    }
});

// Close popup when clicking the X
if (closeBtn) {
    closeBtn.addEventListener("click", function(){
        epsteinPopup.style.display = "none";
    });
}

// Close popup when clicking outside of it
if (epsteinPopup) {
    window.addEventListener("click", function(event){
        if (event.target == epsteinPopup) {
            epsteinPopup.style.display = "none";
        }
    });
}

// Stop all audio function
function stopAllAudio() {
    audioInstances.forEach(function(audio) {
        if (audio && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
    // Clear the array after stopping
    audioInstances = [];
}

// Add event listener for stop all audio button
const stopAllAudioBtn = document.getElementById("stopAllAudio");
if (stopAllAudioBtn) {
    stopAllAudioBtn.addEventListener("click", function(){
        stopAllAudio();
    });
}

geekBtn.addEventListener("click", function(){
    const geeked = new Audio("audio/Odd fellow.mp3");
    audioInstances.push(geeked);
    geeked.play();
    
});