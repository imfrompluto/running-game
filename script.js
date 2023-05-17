let boy = document.getElementById("boy")
let canjump = true
let score = 0
let scoretitle = document.getElementById("scoretitle")
let rock = document.getElementsByClassName("rock")[0]
let rockdistance =( Math.random()*3000 + 180)*(-1)
let bird = document.getElementById("bird")
let birddistance =( Math.random()*3000 + 300)*(-1)
let boyjump = 0
let modal = document.getElementsByClassName("modal")[0]
let button = document.getElementById("button")
let movement = false
let girl = document.getElementById("girl")
let real = document.getElementById("real")
let short = document.getElementById("short")

document.body.onkeydown = function(event){
    if (event.keyCode == 32 && canjump == true && movement == true){
        console.log(2);
        canjump = false
        boyjump = -100
        boy.style.transform = "translateY("+boyjump+"%)"
        setTimeout(function(){
            boyjump = 0
            boy.style.transform = "translateY("+boyjump+"%)"
            setTimeout(function(){
                canjump = true
            },350)
        },600)
    }
}

function startGame() {
    // score = new component("30px", "Consolas", "black", 280, 40, "text");
    score = 0
    bird.style.opacity = 1
    rock.style.opacity = 1
    rockdistance =( Math.random()*3000 + 180)*(-1)
    birddistance =( Math.random()*3000 + 300)*(-1)
    let gameinterval = setInterval(function(){
        score = score + 1
        rockdistance = rockdistance + 2
        birddistance = birddistance + 2
        bird.style.right = birddistance + "px"
        rock.style.right = rockdistance + "px"
        scoretitle.innerHTML = "score: " + score
        if (rockdistance > window.innerWidth){
            rockdistance =( Math.random()*2000 + 180)*(-1)
        }
        if (rockdistance > (window.innerWidth - 300) && boyjump == 0 && rockdistance < (window.innerWidth - 200)){
            clearInterval(gameinterval)
            endGame()
        }
        if (birddistance > window.innerWidth){
            birddistance =( Math.random()*2000 + 300)*(-1)
            // score = 0
        }
        if (birddistance > (window.innerWidth - 300) && boyjump == -100 && birddistance < (window.innerWidth - 200)){
            clearInterval(gameinterval)
            endGame()
        }
    },1)
  }

button.onclick = function(event){
    event.preventDefault()
    modal.style.opacity = 0
    movement = true 
    startGame()
}

function endGame(){
    console.log("endgame");
    bird.style.opacity = 0
    rock.style.opacity = 0
    modal.style.opacity = 1
}

girl.onclick = function(event){
    let active = document.getElementsByClassName("active")[0]
    console.log(active)
    active.classList.remove("active")
    girl.classList.add("active")
}

real.onclick = function(event){
    let active = document.getElementsByClassName("active")[0]
    console.log(active)
    active.classList.remove("active")
    real.classList.add("active")
}

short.onclick = function(event){
    let active = document.getElementsByClassName("active")[0]
    console.log(active)
    active.classList.remove("active")
    short.classList.add("active")
}

boybutton.onclick = function(event){
    let active = document.getElementsByClassName("active")[0]
    console.log(active)
    active.classList.remove("active")
    boybutton.classList.add("active")
}






