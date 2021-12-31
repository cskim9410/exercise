const randomNum = Math.floor(Math.random()*101);
const inputNum = document.querySelector("#inputNum");
const submitBtn = document.querySelector("#submitBtn");
const compare = document.querySelector("#compare")
const HIDDEN_KEY = "hidden"

submitBtn.addEventListener("click", onSubmit)
submitBtn.addEventListener("click", count)

function endGame() {
    compare.classList.add(HIDDEN_KEY)
    inputNum.setAttribute("disabled", true)
    submitBtn.setAttribute("disabled", true)
    document.querySelector("#newgame").classList.remove(HIDDEN_KEY)
}

let a = 0;
function count() {
    a = a + 1;
}

const b = [];

function onSubmit() {
    let guessNum = inputNum.value;
    if (!guessNum) {
        guessNum = 0;
    }
    inputNum.value = "";
    document.querySelector(".dummy").classList.remove(HIDDEN_KEY);
    b.push(guessNum)
    document.querySelector("#preNum").innerText = b.join(' ');
    console.log(b)

    if (a >= 9 && parseInt(guessNum) !== randomNum) {
        endGame()
        document.querySelector("#wrong").innerText = "!!!GAME OVER!!!"
    }

    if (parseInt(guessNum) === randomNum) {
        document.querySelector("#right").classList.remove(HIDDEN_KEY)
        document.querySelector("#wrong").classList.add(HIDDEN_KEY)
        endGame()
    }   else if (guessNum > randomNum) {
        compare.innerText = "Last guess was too high!"
        document.querySelector("#wrong").classList.remove(HIDDEN_KEY)
    }   else  if (guessNum < randomNum) {
        compare.innerText = "Last guess was too low!"
        document.querySelector("#wrong").classList.remove(HIDDEN_KEY)
    }
}




