var pads = document.body.querySelectorAll(".pad");
var audios = document.body.querySelectorAll("audio");
var controls = document.body.querySelectorAll(".control-button");
var lights = document.body.querySelectorAll(".indicator-light");
var currentControlBank = 1;
var currentPadBank = 1;
lights.forEach(function (light, index) {
    if (index % 2 === 0) {
        // light.classList.toggle("indicator-light-active");
    }
});
pads.forEach(function (item, index) {
    item.onclick = function () {
        item.classList.add("tapped");
        audios[index].currentTime = 0;
        audios[index].play();
    };
});
controls.forEach(function (item, index) {
    item.onclick = function () {
        if (index === 0) {
            currentControlBank += 1;
            if (currentControlBank > 3) {
                currentControlBank = 1;
            }
            if (currentControlBank == 3) {
                lights[0].classList.add("indicator-light-active");
                lights[1].classList.add("indicator-light-active");
            }
            else if (currentControlBank == 1) {
                lights[0].classList.remove("indicator-light-active");
                lights[1].classList.add("indicator-light-active");
            }
            else if (currentControlBank == 2) {
                lights[0].classList.add("indicator-light-active");
                lights[1].classList.remove("indicator-light-active");
            }
        }
        else if (index === 2) {
            currentPadBank += 1;
            if (currentPadBank > 3) {
                currentPadBank = 1;
            }
            if (currentPadBank == 3) {
                lights[2].classList.add("indicator-light-active");
                lights[3].classList.add("indicator-light-active");
            }
            else if (currentPadBank == 1) {
                lights[2].classList.remove("indicator-light-active");
                lights[3].classList.add("indicator-light-active");
            }
            else if (currentPadBank == 2) {
                lights[2].classList.add("indicator-light-active");
                lights[3].classList.remove("indicator-light-active");
            }
        }
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
