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
var updateSounds = function () {
    var numOfSounds = 16;
    var sounds = document.body.querySelectorAll("input");
    var audios = document.body.querySelectorAll("audio");
    for (var i = 0; i < numOfSounds; i++) {
        if (sounds[i].value === "") {
            audios[i].src = "../sounds/audio" + ("" + (i + 1)) + ".wav";
        }
        else {
            audios[i].src = "../sounds/" + sounds[i].value;
        }
    }
};
updateSounds();
