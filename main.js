var newDiv = document.createElement('section');
newDiv.innerHTML = "Yo!"
var canvas = document.getElementById('canvas');
canvas.appendChild(newDiv);


// window.addEventListener('click', function() {
//   alert("Yo mama's got a glass eye with a fish in it!")
// });
//
var colorChange = function() {
  // console.log("Yo mama's glass eye");
  canvas.style.backgroundColor ='red';
}
document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.querySelector('#canvas');
canvas.addEventListener('click', colorChange);
});
//  var colorChange = document.getElementById('canvas');
// var eventHandler = function() {
//  console.log("Yo mama fish eye");
//  }
//  colorChange.addEventListener('click', eventHandler);
  //  colorChange.addEventListener('click', function() {
  //    console.log("yo mama");
  //  }
  //  for (var i=0; i< colorChange.length; i++){}

  //  colorChange.style.backgroundColor ='red';
