const pads: NodeListOf<HTMLDivElement> = document.body.querySelectorAll(".pad");
const audios: NodeListOf<HTMLAudioElement> = document.body.querySelectorAll(
  "audio"
);
const controls: NodeListOf<HTMLDivElement> = document.body.querySelectorAll(
  ".control-button"
);
const lights: NodeListOf<HTMLDivElement> = document.body.querySelectorAll(
  ".indicator-light"
);

let currentControlBank = 1;
let currentPadBank = 1;

lights.forEach((light: HTMLDivElement, index: number) => {
  if (index % 2 === 0) {
    // light.classList.toggle("indicator-light-active");
  }
});

pads.forEach((item: HTMLDivElement, index: number) => {
  item.onclick = () => {
    item.classList.add("tapped");
    audios[index].currentTime = 0;
    audios[index].play();
  };
});

controls.forEach((item: HTMLDivElement, index: number) => {
  item.onclick = () => {
    if (index === 0) {
      currentControlBank += 1;
      if (currentControlBank > 3) {
        currentControlBank = 1;
      }
      if (currentControlBank == 3) {
        lights[0].classList.add("indicator-light-active");
        lights[1].classList.add("indicator-light-active");
      } else if (currentControlBank == 1) {
        lights[0].classList.remove("indicator-light-active");
        lights[1].classList.add("indicator-light-active");
      } else if (currentControlBank == 2) {
        lights[0].classList.add("indicator-light-active");
        lights[1].classList.remove("indicator-light-active");
      }
    } else if (index === 2) {
      currentPadBank += 1;
      if (currentPadBank > 3) {
        currentPadBank = 1;
      }
      if (currentPadBank == 3) {
        lights[2].classList.add("indicator-light-active");
        lights[3].classList.add("indicator-light-active");
      } else if (currentPadBank == 1) {
        lights[2].classList.remove("indicator-light-active");
        lights[3].classList.add("indicator-light-active");
      } else if (currentPadBank == 2) {
        lights[2].classList.add("indicator-light-active");
        lights[3].classList.remove("indicator-light-active");
      }
    }
    item.classList.add("control-tapped");
  };
});

document.addEventListener("transitionend", (e: TransitionEvent) => {
  const item = e.target as HTMLDivElement;
  if (item) {
    item.classList.remove("tapped");
  }
  if (item) {
    item.classList.remove("control-tapped");
  }
});

const updateSounds = (): void => {
  const numOfSounds = 16;
  const sounds: NodeListOf<HTMLInputElement> = document.body.querySelectorAll(
    "input"
  );
  for (let i = 0; i < numOfSounds; i++) {
    if (sounds[i].value === "") {
      audios[i].src = "../sounds/audio" + `${i + 1}` + ".wav";
    } else {
      audios[i].src = "../sounds/" + sounds[i].value;
    }
  }
};

updateSounds();
