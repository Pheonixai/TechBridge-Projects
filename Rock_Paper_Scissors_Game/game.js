const rockButton = document.getElementById("rock");

const yourPick = document.getElementById("YourPick");
const computerPick = document.getElementById("ComputerPick");

const yourScoreE = document.getElementById("yourScore");
const compScoreE = document.getElementById("compScore");

// computers pick 
const options = ["Rock", "Scissors", "Paper"];


rockButton.addEventListener('click', () =>{
    console.log("clicked");
    // redButton.style.display = "none";
    yourPick.innerHTML = "Your pick : " + rockButton.value;
    yourPick.className = "h5";
    const random = Math.floor(Math.random() * options.length);
    const pick = options[random];
    console.log(pick);
    rockResult();
})

const paperButton = document.getElementById("paper");
paperButton.addEventListener('click', () =>{
    console.log("clicked");
    console.log(paperButton.value);
    // redButton.style.display = "none";
    yourPick.innerHTML = "Your pick : " + paperButton.value ;
    yourPick.className = "h5";
    console.log(yourPick);

    const random = Math.floor(Math.random() * options.length);
    const pick = options[random];
    console.log(pick);
    PapResult();
    
})

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener('click', () =>{
    console.log("clicked");
    console.log(scissorsButton.value);
    // redButton.style.display = "none";
    yourPick.innerHTML = "Your pick : " + scissorsButton.value ;
    console.log(yourPick);
    yourPick.className = "h5";
    Scresult();
})

const Compscore = [];
const yourScore = [];

// ScResult
function Scresult(){

    const random = Math.floor(Math.random() * options.length);
    const pick = options[random];
    console.log(pick);


    const div = document.getElementById("result");
    const p = document.createElement("p");
    div.appendChild(p);

    // computer's pick
    setTimeout(() => {
        computerPick.innerHTML = "Computer's pick: " + pick;
        computerPick.className = "h5";
    }, 500);

    setTimeout(() => {
        if(pick === scissorsButton.value) {
            console.log("draw");
            p.innerHTML = "Draw!";
        }
        else if(pick === "Rock"){
            console.log("Computer wins!")
            p.innerHTML = "Computer wins!";
    
            // score
            Compscore.push("computer");
            console.log(Compscore);
            const cScore = Compscore.length;
            console.log("Computer Score: " + cScore);
            compScoreE.innerHTML = "Computer Score: " + cScore + " points";
    
        }
        else{
            console.log("You win!")
            p.innerHTML = "You win!";
    
            // score
            yourScore.push("you");
            console.log(yourScore);
            const yScore = yourScore.length;
            console.log("Your score :" + yScore);
            yourScoreE.innerHTML = "Your score : " + yScore + " points";
    
        }
    }, 1000);

}

// PapResult
function PapResult(){

    const random = Math.floor(Math.random() * options.length);
    const pick = options[random];
    console.log(pick);

    // computer's pick
    setTimeout(() => {
        computerPick.innerHTML = "Computer's pick: " + pick;
        computerPick.className = "h5";
    }, 500);

    const div = document.getElementById("result");
    const p = document.createElement("p");
    div.appendChild(p);

    setTimeout(() => {
        if(pick === paperButton.value) {
            console.log("draw");
            p.innerHTML = "Draw!";
            console.log(p);
        }
        else if(pick === "Rock"){
            console.log("You win!")
            p.innerHTML = "You win!";
            console.log(p);
        
            // score
            yourScore.push("you");
            console.log(yourScore);
            const yScore = yourScore.length;
            console.log("Your score :" + yScore);
            yourScoreE.innerHTML = "Your score : " + yScore + " points";
    
        }
        else{
            console.log("Computer wins!")
            p.innerHTML = "Computer wins!";
            console.log(p);
            
            // score
            Compscore.push("computer");
            console.log(Compscore);
            const cScore = Compscore.length;
            console.log("Computer Score: " + cScore);
            compScoreE.innerHTML = "Computer Score: " + cScore + " points";
        }
    }, 1000);
}

// rockResult
function rockResult(){

    const random = Math.floor(Math.random() * options.length);
    const pick = options[random];
    console.log(pick);

    // computer's pick
    setTimeout(() => {
        computerPick.innerHTML = "Computer's pick: " + pick;
        computerPick.className = "h5";
    }, 500);

        // display result
        const div = document.getElementById("result");
        const p = document.createElement("p");
        div.appendChild(p);
    

    setTimeout(() =>{
    
        if(pick === rockButton.value) {
            console.log("draw");
            p.innerHTML = "Draw!";
            console.log(p);
        }
        else if(pick === "Paper"){
            console.log("Computer wins!")
            p.innerHTML = "Computer wins!";
            console.log(p);
    
            // score
            Compscore.push("computer");
            console.log(Compscore);
            const cScore = Compscore.length;
            console.log("Computer Score: " + cScore);
            compScoreE.innerHTML = "Computer Score: " + cScore + " points";
    
        }
        else{
            console.log("You win!")
            p.innerHTML = "You win!";
            console.log(p);
    
            // score
            yourScore.push("you");
            console.log(yourScore);
            const yScore = yourScore.length;
            console.log("Your score :" + yScore);
            yourScoreE.innerHTML = "Your score : " + yScore + " points";
    
        }
    }, 1000);
}

// Overall Result
const Overall = document.getElementById("overall");
// Overall.onclick = computeOresult();

function computeOresult() {
    console.log('clicked');
    console.log(yourScore.length);
    if(yourScore.length > Compscore.length){
        alert('You win!');
    }
    else if(Compscore.length > yourScore.length){
        alert('You lose!');
    }
}

