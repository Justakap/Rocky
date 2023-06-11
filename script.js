function goToMain() {
    window.location.href=("home.html");
}
  function resetButton(){
        window.location.href=("index.html");
    }
let userScore=0;
let compScore=0;
function Rock() {
        var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 3) + 1;
    var randomDiceImage1 = "images/cartoon/" + randomNumber1 + "c.png";
    var img1 = document.getElementById("img22");
    img1.setAttribute("src", randomDiceImage1);
    //
    var choiceRock1 = document.getElementById("img21");
    choiceRock1.setAttribute("src", "images/cartoon/1.png");
    // Game Rule : Rock
        if (randomNumber1 == '1') {
        document.querySelector("h1").innerHTML = "Its a Tie ";
    }
    if (randomNumber1 =='3') {
        document.querySelector("h1").innerHTML = username +" wins";
        ++userScore;        
        document.getElementById("userScore").innerHTML=username +"'s  Score : "+userScore;
    }
    if (randomNumber1 =='2') {
        document.querySelector("h1").innerHTML = "Comp wins";
        ++compScore;
        document.getElementById("compScore").innerHTML="Compscore : "+compScore;
    }





}
function Paper() {
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 3) + 1;
    var randomDiceImage1 = "images/cartoon/" + randomNumber1 + "c.png";
    var img1 = document.getElementById("img22");
    img1.setAttribute("src", randomDiceImage1);
    //
    var choicePaper2 = document.getElementById("img21");
    choicePaper2.setAttribute("src", "images/cartoon/2.png");
    //Game Rule : Paper
    if (randomNumber1 == '1') {
        document.querySelector("h1").innerHTML = username +" wins";
        ++userScore;        
        document.getElementById("userScore").innerHTML=username +"'s  Score : "+userScore;
    }
    if (randomNumber1 == '2') {
        document.querySelector("h1").innerHTML = "Its a Tie";
    }
    if (randomNumber1 == '3') {
        document.querySelector("h1").innerHTML = "Comp Win";
        ++compScore;
        document.getElementById("compScore").innerHTML="Compscore : "+compScore;
    }
}
function Scissors() {
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 3) + 1;
    var randomDiceImage1 = "images/cartoon/" + randomNumber1 + "c.png";
    var img1 = document.getElementById("img22");
    img1.setAttribute("src", randomDiceImage1);
    //
    var choiceScissors3 = document.getElementById("img21");
    choiceScissors3.setAttribute("src", "images/cartoon/3.png");
    //Game Rule : Scissors
    if (randomNumber1 == '1') {
        document.querySelector("h1").innerHTML = "Comp Win ";
        ++compScore;
        document.getElementById("compScore").innerHTML="Compscore : "+compScore;
    }
    if (randomNumber1 == '2') {
        document.querySelector("h1").innerHTML = username +" wins";
        ++userScore;        
        document.getElementById("userScore").innerHTML=username +"'s  Score : "+userScore;
    }
    if (randomNumber1 == '3') {
        document.querySelector("h1").innerHTML = "Its a Tie";
    }
}
