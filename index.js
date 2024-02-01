// document.addEventListener("mousemove", function (e) {
//   var xPos = e.pageX;
//   var yPos = e.pageY;
//   // console.log(xPos, yPos);
//   document.querySelector(".circle-out").style.top = yPos - 69 + "px";
//   document.querySelector(".circle-out").style.left = xPos - 15 + "px";
// });
document.addEventListener("mousemove", function (e) {
  var circleOut = document.querySelector(".circle-out");
  var xPos = e.pageX;
  var yPos = e.pageY;

  // Subtract half the height and width of the circle to center it around the mouse pointer
  var circleOffsetX = 40 / 2;
  var circleOffsetY = 40 / 2;

  // Adjust yPos to account for the nav bar height
  var adjustedYPos = yPos - circleOffsetY - 70; // 75px is the height of the nav bar
  var adjustedXPos = xPos - circleOffsetX;

  circleOut.style.top = adjustedYPos + "px";
  circleOut.style.left = adjustedXPos + "px";
});
