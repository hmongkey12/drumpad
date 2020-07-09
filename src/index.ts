const pads: NodeListOf<HTMLDivElement> = document.body.querySelectorAll(".pad");

pads.forEach((item: HTMLDivElement) => {
  item.onclick = () => {
    item.classList.add("tapped");
  };
});

document.addEventListener("transitionend", (e: TransitionEvent) => {
  const item = e.target as HTMLDivElement;
  if (item) {
    item.classList.remove("tapped");
  }
});

const updateSounds = (): void => {
  const numOfSounds = 16;
  const sounds: NodeListOf<HTMLInputElement> = document.body.querySelectorAll(
    "input"
  );
  const audios: NodeListOf<HTMLAudioElement> = document.body.querySelectorAll(
    "audio"
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
