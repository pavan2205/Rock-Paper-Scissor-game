console.log("welcome to game")

function playgame(){
// const clickedBtn=document.querySelectorAll("img")
const rockbtn=document.getElementById("rock");
const paperbtn=document.getElementById("paper");
const scissorbtn=document.getElementById("scissor");
const results=document.getElementById("result")
//array of possible choices
const choice=[rockbtn,paperbtn,scissorbtn];
let count=0;

//randomChoice
const randomValue=Math.floor(Math.random() *3)+1;
console.log(randomValue);
let randomChoice;
function randomSelection(){
    if(randomValue===1){
        randomChoice="rock";
    }
    else if(randomValue===2){
        randomChoice="paper";
    }
    else if(randomValue===3){
        randomChoice="scissor";
    }
}
randomSelection();

//player choice
function btn(){ 
    choice.forEach(options=>{
        options.addEventListener('click',(e)=>{
            count=count+1;
            var value=e.target.id;
            comparison(value)
            result();
            reload();
        })
    })
}
btn()

 //comparison between player choice and random choice
 let res;
 function comparison(PlayerChoice){
if(PlayerChoice===randomChoice){
    res=0;
}
else if(PlayerChoice=='rock'){
    if(randomChoice=='paper'){
        res=-1;
    }
    else{
        res=1;
    }
}
else if(PlayerChoice=='scissor'){
    if(randomChoice=='rock'){
        res=-1;
    }
    else{
        res=1;
    }
}
else if(PlayerChoice=='paper'){
    if(randomChoice=='scissor'){
        res=-1;
    }
    else{
        res=1;
    }
}
}

//update result function
function result(){
    if(res===-1){
        results.textContent="You Lose ";
    }
    else if(res===1){
        results.textContent="You Win";
    }
    else{
        results.textContent="Draw";
    }
}
// function to reload 
function reload(){
    if(count===1 ){
        playgame();
    }
} 
}
playgame();

