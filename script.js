let targetNumber = Math.floor(Math.random() * 100) + 1;
let playerScore = 0;
let botScore = 0;

function showNum() {
    let randomNumber = Math.floor(Math.random() * 101)
    document.getElementById("myPopup").innerHTML=randomNumber;
}

async function getRecNo() {
  const data=await getData();
  document.getElementById("recblogs").innerHTML=data.record[0];
  document.getElementById("recarts").innerHTML=data.record[1];
  document.getElementById("recminigames").innerHTML=data.record[2];
  document.getElementById("recSp").innerHTML=data.record[3];
}
async function getData(){
  const res=await fetch('content.json');
  const data=res.json();
  return data;
}

function resetTGN(){
  showToast("Reset Successful!");

}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerHTML=msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

/*
Start of guess the number ----------------->
*/

//When play the game button is pressed it starts from here
function playGN(){
  val=document.getElementById("btn-playGN").innerText;
  if(val=="Reset"){
    resetTGN();
  }
  document.getElementById("btn-playGN").innerHTML="Reset";
  //Generate the form
  guess_number_form();
  document.getElementById("resultGN").innerHTML="Choose a number!\nGuess the number correctly and WIN!!";
  document.getElementById("close_btn").innerHTML="<button class=' btn btn-danger' onclick='close_GN()'>Close</button>";

}

//Close button function
function close_GN(){
  document.getElementById("btn-playGN").innerHTML="Play the game";
  document.getElementById("buttonContainerGN").innerHTML="";
  document.getElementById("resultGN").innerHTML="";
  document.getElementById("close_btn").innerHTML="";
}

//Game logic function when form button is pressed
function handleButtonClickGN(button,num,targetNumber){
let message = "";
if (num > targetNumber){
  message = "Too high! Try again.";
  button.classList.add('isred');
}
else if(num < targetNumber){
  message = "Too low! Try again.";
  button.classList.add('isblue');
}
else{
  message = "Congratulations! You guessed the right number! Which is: "+targetNumber;
  button.classList.add('isgreen');
}
document.getElementById("resultGN").innerText = message;
}

// Makes the number form as button and add function for each button
// Button class name is button-GN
// When button is pressed it goes to handle ButtonClickGN(parms) where it changes color
function guess_number_form(){
  const container = document.getElementById("buttonContainerGN");
  container.innerHTML="";
  const numbers = new Set();
// Generate unique random numbers until we have 25 random numbers
  while (numbers.size < 25) {
    const randNum = Math.floor(Math.random() * 101); // 0 to 100
    numbers.add(randNum);
    }
// Convert Set to Array and sort
const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
const randomIndex = Math.floor(Math.random() * sortedNumbers.length);
const randomNumber = sortedNumbers[randomIndex];

for (let i = 0; i < 25; i++) {
  const num = sortedNumbers[i];
  const button = document.createElement("button");
  button.textContent = num;
  button.className = "button-GN";
  button.onclick = () => {
    button.classList.toggle("clicked");
    handleButtonClickGN(button,num,randomNumber);
  };
  container.appendChild(button);
}
}
/*
End of guess the number <-------------------
*/

/*Start RSPG game*/
function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const botChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";
  if (playerChoice === botChoice) {
      result = "It's a tie!";
  } else if (
      (playerChoice === "rock" && botChoice === "scissors") ||
      (playerChoice === "paper" && botChoice === "rock") ||
      (playerChoice === "scissors" && botChoice === "paper")
  ) {
      result = "You win!";
      playerScore++;
  } else {
      result = "bot wins!";
      botScore++;
  }

  document.getElementById("result").innerText = `Bot: "${botChoice}"
  You: "${playerChoice}"
   ${result}`;
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("botScore").innerText = botScore;
}

function refreashRSPG(){
  document.getElementById("playerScore").innerText = 0;
  document.getElementById("botScore").innerText = 0;
}
/*End RSPG game*/
