console.log("Let's Play Qwixx!!")


//          [2,3,4,5,6,7,8,9,10,11,12,loc]
//          [0,1,2,3,4,5,6,7,8, 9, 10,11]
const red = [0,0,0,0,0,0,0,0,0,0,0,0];
const yellow = [0,0,0,0,0,0,0,0,0,0,0,0];
const green = [0,0,0,0,0,0,0,0,0,0,0,0];
const blue = [0,0,0,0,0,0,0,0,0,0,0,0];
const strikes = [];

function updateColorList(col, loc, symb){
    col[loc] = symb;
    for(let i = loc-1; col[i] != "X" && i >= 0; i--){
        if(symb =="X"){
            col[i] = "-";
        }else{
            col[loc] = 0;
            col[i] = 0;
        }
    }
    console.log(col);

}//end of updateColorList

function getXcount(col){
    let col_score = 0;
    for(let i=0; i<col.length;i++){
        if(col[i]=="X"){
            col_score++;
        }
    }
    return col_score;
} //end of getXcount

function getScore(col){
    const num = getXcount(col);
    let score = 0;
    for(let i=num; i>0; i--){
        score += i;
    }
    return score;
}

function hasXtoRight(col, loc){
    for(let i = loc; i < col.length; i++){
        if(col[i] === "X"){
            console.log(col[i]);
            return true
        }
    }
    return false;
}//end of checkXtoRight

function handelClick(event){
    const color = event.target.dataset.col;
    const loc = parseInt(event.target.dataset.loc) - 2;
    console.log('you clicked ' + color + ' ' + loc);
    console.log(event.target.innerHTML);
    if(hasXtoRight(red,loc+1)){
        console.log("sorry");
    }else{
        if(event.target.innerHTML != "X"){
            event.target.innerHTML = 'X';
            if(color === "red"){
                updateColorList(red, loc, "X");
            } else if(color === "green"){
                updateColorList(green, loc, "X");
            } else if (color === "blue"){
                updateColorList(blue, loc, "X");
            }else{
                updateColorList(yellow, loc, "X");
            }
        }else{
            event.target.innerHTML = loc + 2;
            if(color === 'red'){
                updateColorList(red, loc, "-");
            }
        }
    }
    // function to updateList based on color and location, and symbol
    // console.log('clicked '+ event.target.dataset.col+ " - " + event.target.dataset.loc);
    // if(color == 'red' && red[loc] == 0){
    //     red[loc] = "X";
    // }
    // for(let i = loc-1; i>=0; i--){
    //     if(red[i] == 0){
    //         red[i] = '-';
    //     }
    // }
    // console.log(red);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((box)=>  box.addEventListener('click',handelClick));
