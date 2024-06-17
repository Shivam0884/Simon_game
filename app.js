let gameSeq=[];
let userSeq=[];

let started= false;
let level= 0;
let btns=["one","two","three","four"];
let h2=document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started==false){
        started=true;

        levelUp();
    }
})

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;


    let randIdx=Math.floor(Math.random() * 3);
    let randColor= btns[randIdx];
    let randomBtn=document.querySelector(`.${randColor}`);
    //dot is important because we have to choose the class from btns.
    gameSeq.push(randColor);
    btnFlash(randomBtn);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
let allbtns= document.querySelectorAll(".btn");
 
for(btn of allbtns){
    btn.addEventListener("click",function(){
        console.log(this);
        let btnn=this;
        btnFlash(btnn);

      userColor = btnn.getAttribute("id");
      userSeq.push(userColor);

      checkAns(userSeq.length-1);
    })
}
function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
     if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
     }     
    }else{
        h2.innerHTML=`Game over!! your score was <b>${level}</b><br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },100);
        reset();
    }
}
function reset(){
    gameSeq=[];
 userSeq=[];

 started= false;
 level= 0;
}