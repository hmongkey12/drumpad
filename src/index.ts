const pads: NodeListOf<HTMLDivElement> = document.body.querySelectorAll(".pad");
const audios: NodeListOf<HTMLAudioElement> = document.body.querySelectorAll(
  "audio"
);
const controls: NodeListOf<HTMLDivElement> = document.body.querySelectorAll(
  ".control-button"
);

pads.forEach((item: HTMLDivElement, index: number) => {
  item.onclick = () => {
    item.classList.add("tapped");
    audios[index].currentTime = 0;
    audios[index].play();
  };
});

controls.forEach((item: HTMLDivElement, index: number) => {
  item.onclick = () => {
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
