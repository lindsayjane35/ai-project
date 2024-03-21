function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a83afd1b400db4a3f9fc3t5a4a5c272o";
  let prompt = `Generate a story about ${instructionsInput.value}`;
  let context =
    "User Instructions: You are an expert on scary stories. Your mission is to generate a scary story in basic HTML (do not include <h1>) in as few words as possible. Please do not get too graphic.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `generating a scary story about ${instructionsInput.value} for you 👻`;

  axios.get(apiUrl).then(displayStory);
}

let storyElement = document.querySelector("#generator-form");
storyElement.addEventListener("submit", generateStory);
