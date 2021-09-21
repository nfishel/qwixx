console.log("Let's Play Qwixx!!")


//          [2,3,4,5,6,7,8,9,10,11,12,loc]
//          [0,1,2,3,4,5,6,7,8, 9, 10,11]
const red = [0,0,0,0,0,0,0,0,0,0,0,0];
const yellow = [0,0,0,0,0,0,0,0,0,0,0,0];
const green = [0,0,0,0,0,0,0,0,0,0,0,0];
const blue = [0,0,0,0,0,0,0,0,0,0,0,0];
const strikes = [];


function handelClick(event){
    color = event.target.dataset.col;
    loc = parseInt(event.target.dataset.loc) - 2;
    // console.log('clicked '+ event.target.dataset.col+ " - " + event.target.dataset.loc);
    event.target.innerHTML = 'X';
    if(color == 'red' && red[loc] == 0){
        red[loc] = "X";
    }
    for(let i = loc-1; i>=0; i--){
        if(red[i] == 0){
            red[i] = '-';
        }
    }
    console.log(red);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((box)=>  box.addEventListener('click',handelClick));
