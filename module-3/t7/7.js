var trigger = document.getElementById("trigger");
var target = document.getElementById("target");

trigger.addEventListener("mouseover", function() {
  target.src = "img/picB.jpg";
});

trigger.addEventListener("mouseout", function() {
  target.src = "img/picA.jpg";
});
