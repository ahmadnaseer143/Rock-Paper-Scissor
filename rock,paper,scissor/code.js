let userScore=0;
let compScore=0;
const userboard=document.getElementById("user-score");
const compboard=document.getElementById("comp-score");
const scoreboard=document.querySelector(".board");
const result=document.querySelector(".result p");
const paper=document.getElementById("p");
const rock=document.getElementById("r");
const scissor=document.getElementById("s");

function getCompChoice(){
    const choices=["r","p","s"];
    const randomchoice=Math.floor(Math.random()*3);
    return choices[randomchoice];
}
function convert(word){
    if(word=="r") return "Rock";
    else if(word=="p") return "Paper";
    else return "Scissor";
}
function win(userchoice,compchoice){
    userScore++;
    userboard.innerHTML=userScore;
    result.innerHTML="You win!"+convert(userchoice)+" beats "+convert(compchoice);
}
function lose(userchoice,compchoice){
    compScore++;
    compboard.innerHTML=compScore;
    result.innerHTML="You lose!"+convert(userchoice)+" beats "+convert(compchoice);
}
function draw(userchoice,compchoice){
    result.innerHTML="Draw as "+convert(userchoice)+" cannot beat "+convert(compchoice);
}
function game(userchoice){
    const compchoice=getCompChoice();
    switch(userchoice+compchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,compchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,compchoice);
            break;

    }
}
function main(){
    rock.addEventListener("click",function(){
        game("r");
    });
    paper.addEventListener("click",function(){
        game("p");
    });
    scissor.addEventListener("click",function(){
        game("s");
    });
}
main();