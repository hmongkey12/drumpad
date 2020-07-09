var pads = document.body.querySelectorAll(".pad");
pads.forEach(function (item) {
  item.onclick = function () {
    item.classList.add("tapped");
  };
});
document.addEventListener("transitionend", function (e) {
  var item = e.target;
  if (item) {
    item.classList.remove("tapped");
  }
});
