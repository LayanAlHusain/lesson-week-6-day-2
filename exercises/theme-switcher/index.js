// click event for gray button
$("#grayButton").on("click",switchGray);
// click event for white button
$("#whiteButton").on("click",switchWhite);
function switchGray() {
  // change background to gray
  // change font to white
let body =$("body");
body.css({
"background":"gray",
"color":"white"
})

}

function switchWhite() {

   // change background to white
   // change font to black
let body = $("body");
body.css("background","white");
body.css("color","black");
}
