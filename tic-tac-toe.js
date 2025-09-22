let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winPatterns=   [[0,1,2],
                     [0,3,6],
                     [0,4,8],
                     [1,4,7],
                     [2,5,8],
                     [2,4,6],
                     [3,4,5],
                     [6,7,8]];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box )=>{
    box.addEventListener("click",()=>{
        if(turn0){
            // player 0
            box.innerText="O";
            turn0=false;
        }
        else{
            // player X
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        cheakWinners();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const cheakWinners=()=>{
    for(let pattern of winPatterns){

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
newgameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);