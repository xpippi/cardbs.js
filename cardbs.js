const Card = require("card");

function form() {
  console.log("form");
}

form();

Card("card").Card({
  container: ".card-wrapper",
});
