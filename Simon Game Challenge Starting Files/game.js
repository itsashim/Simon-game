
// my code
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;



$(document).keypress(function(){
if(!gameStarted){
  $('h1').text('Level '+level);
nextSequence();
gameStarted = true;
}
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentlevel){


  if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
  console.log('sucess');
  
  
  if(userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
      nextSequence();
    },1000);
    
  }
} else{
console.log('wrong');
playSound('wrong')
$('body').addClass('game-over')
setTimeout(function(){
$('body').removeClass('game-over')
},200);
$('h1').text('Game Over, Press Any Key to Restart')
startOver();
}
  
  }
  

function nextSequence() {
  userClickedPattern=[];
  level++;
  var randomNumber = Math.trunc(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour); 
  $('h1').text('Level '+level);

  // for (let i = 0; i < buttonColors.length; i++) {

  //   animatePress(buttonColors[i]);
  
  //   if (buttonColors[i] === "green") {
  //     playSound(buttonColors[i]);
     
  //   } else if (buttonColors[i] === "red") {
  
  //     playSound(buttonColors[i]);
  
  //   } 
  //   else if (buttonColors[i] === "blue") {
  //     playSound(buttonColors[i]);
  
  //   } else  {
  //     playSound(buttonColors[i]);
  
  //   }
  // }
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);  
}



// for animation and audio

function playSound(name){

 new Audio("sounds/"+ name + ".mp3").play();

}

function animatePress(currentColor){

    $('#'+currentColor).addClass('pressed');
    setTimeout(function(){
    $('#'+currentColor).removeClass('pressed');
    },100);
  }



  function startOver(){
    level = 0;
     gamePattern = [];
 userClickedPattern = [];
 gameStarted=false;
  }




  

