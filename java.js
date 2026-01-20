const nummer = document.getElementById("nummer")
const plus = document.getElementById("öka")
const minus = document.getElementById("minska")
const reset = document.getElementById("återställa")

let count = 0;

plus.addEventListener("click", function(){
    count++;
    nummer.textContent = count;
});
minus.addEventListener("click", function(){
    count--;
    nummer.textContent = count;
});
reset.addEventListener("click", function(){
    count = 0;
    nummer.textContent = count;
});