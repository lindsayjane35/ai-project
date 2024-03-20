function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "Story here...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let storyElement = document.querySelector("#generator-form");
storyElement.addEventListener("submit", generateStory);
