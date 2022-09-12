const p = document.querySelectorAll(".push");

for(let i=0; i < p.length; i++ ){
p[i].onclick = function() {
    p[i].classList.toggle("active")
}
}
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump()
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))


    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("ЛОХ")
    }
}, 10)
