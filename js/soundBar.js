// Sound Bar

var rabbit = new Audio("audio/rabbit.m4a");
var dolphin = new Audio("audio/dolphin.m4a");
var pig = new Audio("audio/pig.m4a");
var goose = new Audio("audio/goose.m4a");
var deer = new Audio("audio/deer.m4a");
var mice = new Audio("audio/mice.m4a");
var isPlaying = false;

$('#rabbitSound').click(function(){
  if (rabbit.paused) {
    rabbit.play();
  } else {
    rabbit.pause();
  }
})

$('#dolphinSound').click(function(){
  if (dolphin.paused) {
    dolphin.play();
  } else {
    dolphin.pause();
  }
})

$('#pigSound').click(function(){
  if (pig.paused) {
    pig.play();
  } else {
    pig.pause();
  }
})

$('#gooseSound').click(function(){
  if (goose.paused) {
    goose.play();
  } else {
    goose.pause();
  }
})

$('#deerSound').click(function(){
  if (deer.paused) {
    deer.play();
  } else {
    deer.pause();
  }
})

$('#miceSound').click(function(){
  if (mice.paused) {
    mice.play();
  } else {
    mice.pause();
  }
})
