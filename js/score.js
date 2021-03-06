console.log("Let's Play Qwixx!!")


//          [2,3,4,5,6,7,8,9,10,11,12,loc]
//          [0,1,2,3,4,5,6,7,8, 9, 10,11]
const red = [0,0,0,0,0,0,0,0,0,0,0,0];
const yellow = [0,0,0,0,0,0,0,0,0,0,0,0];
const green = [0,0,0,0,0,0,0,0,0,0,0,0];
const blue = [0,0,0,0,0,0,0,0,0,0,0,0];
const strikes = document.querySelectorAll(".strikebox");
const score_btn = document.querySelector("#score_btn");

score_btn.addEventListener("click", function(){
    const score = getTotalScore();
    console.log("Total: "+score);
    document.querySelector("#total_score").innerHTML = score;
});

function updateColorList(col, loc, symb){
    // col[loc] = symb;
    for(let i = loc-1; col[i] != "X" && i >= 0; i--){
        if(symb =="X"){
            col[i] = "-";
            // [i].classList.add("disabled");
        }else{
            col[loc] = 0;
            col[i] = 0;
        }
    }
    console.log(col);

}//end of updateColorList
// calculates the total score of the game
function getTotalScore(){
    return getScore(red) + getScore(yellow) + getScore(blue) + getScore(green) - getStrikes();
}//end of getTotalScore

// calculates the total point to subtract based on the number of strikes
function getStrikes(){
    let strike_score = 0;
    strikes.forEach((box)=> box.checked ? strike_score += 5 : strike_score);
    return strike_score;
} // end of getStrikes

// calculates the number of X's in the given color
// * pass in the color list name --> returns the total number of X's in the list
function getXcount(col){
    let col_score = 0;
    for(let i=0; i<col.length;i++){
        if(col[i]=="X"){
            col_score++;
        }
    }
    return col_score;
} //end of getXcount

// calculates the score of a given color
//* pass in the color list name --> returns the total points for that color
function getScore(col){
    const num = getXcount(col);
    let score = 0;
    for(let i=num; i>0; i--){
        score += i;
    }
    return score;
}

// check to see if the given color has an X to the right of the given location
// * pass in the color and the location --> returns true if there is an X, false if not
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
    const col = event.target.dataset.col;
    const loc = parseInt(event.target.dataset.loc) - 2;
    console.log("you clicked on loc "+ loc);
    let color;
    switch(col){
        case "red":
            color = red;
            break;
        case "green":
            color = green;
            break;
        case "yellow":
            color = yellow;
            break;
        case "blue":
            color = blue;
            break;
        default:
            color = strikes;
            
    }

    if(hasXtoRight(color,loc+1)){
        console.log("sorry");
        // display error message;
    }else{
        if(color[loc] === 0){
            color[loc] = "X";
            if(loc === color.length - 1){
                //need to check if able to lock the row
                event.target.innerHTML = '&#x1F510;';
            }else{
                event.target.innerHTML = 'X';
            }
            updateColorList(color, loc, "X");
        }else if(color[loc] === "X"){
            color[loc] = 0;
            if(loc === color.length - 1){
                event.target.innerHTML = '&#x1F513;';
            }else{
                if(col === "blue" || col === "green"){
                    event.target.innerHTML = -1 * loc + 12;
                } else{
                    event.target.innerHTML = loc - 2;
                }
            }
            updateColorList(color, loc, "-");
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
