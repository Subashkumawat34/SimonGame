let gameSeq = [];
let userSeq = [];
let btn = ["red", "yellow", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
  if(started == false){
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },300);
}


function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(function(){
    btn.classList.remove("userFlash");
  },300);
}

function checkAns(Idx){
  if(userSeq[Idx] === gameSeq[Idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }else{
    h2.innerHTML = `Game Over! Score <b style = "color : red;">${level}</b><br>Press any Key to Start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },200);
    reset();
  }
  }

function levelUp(){
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random()*5);
  let randomClor = btn[randomIdx];
  let randomBtn = document.querySelector(`.${randomClor}`);

  gameSeq.push(randomClor);
  console.log(gameSeq);
  gameFlash(randomBtn);
}

function btnPress(){
  let btn = this;
  userFlash(btn);

 let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btns of allBtn){
  btns.addEventListener("click", btnPress);
}

function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}