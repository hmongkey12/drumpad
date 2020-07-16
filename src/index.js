var pads = document.body.querySelectorAll(".pad");
var audios = document.body.querySelectorAll("audio");
var controls = document.body.querySelectorAll(".control-button");
pads.forEach(function (item, index) {
    item.onclick = function () {
        item.classList.add("tapped");
        audios[index].currentTime = 0;
        audios[index].play();
    };
});
controls.forEach(function (item, index) {
    item.onclick = function () {
        item.classList.add("control-tapped");
    };
});
document.addEventListener("transitionend", function (e) {
    var item = e.target;
    if (item) {
        item.classList.remove("tapped");
    }
    if (item) {
        item.classList.remove("control-tapped");
    }
});
var updateSounds = function () {
    var numOfSounds = 16;
    var sounds = document.body.querySelectorAll("input");
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
