var colorEl = document.querySelector("input[name=color]");
var widthEl = document.querySelector("input[name=width]");
var heightEl = document.querySelector("input[name=height]");

colorEl.value = "#" + randomByte() + randomByte() + randomByte();

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var color = colorEl.value;
  var width = widthEl.value;
  var height = heightEl.value;
  if (color[0] === "#") {
    color = color.substr(1);
  }
  window.location.href = "/get/" + color + "/" + width + "x" + height;
});

function randomByte() {
  const result = Math.floor(Math.random() * 255).toString(16);
  if (result.length < 2) {
    return "0" + result;
  } else {
    return result;
  }
}