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
