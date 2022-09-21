const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const cloud = document.querySelector(".cloud");
let score = 0;
pipePositionScore = pipe.offsetLeft;

const jump = () => {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500)

}

const loop = setInterval(() => {

    const cloudPosition = cloud.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    console.log(pipePosition);
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // pra a animação da nuvem parar quando der game over
        cloud.style.animation = "none";
        cloud.style.left = `${cloudPosition}px`;

        // pra a animação do cano parar quando der game over
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        // quando o mario encostar no cano se dá  game over
        mario.style.animation = "none";
        mario.style.botton = `${marioPosition}px`;
        mario.src = "assets/img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
        document.getElementById("recomecar").removeAttribute("hidden");
        clearInterval(loop);
    } else if (pipePosition > pipePositionScore) {
        score += 100;
        document.getElementById("score").innerHTML = score;
    }
    pipePositionScore = pipePosition; 

}, 10);

document.addEventListener("keydown", jump);





