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

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
