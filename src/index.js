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
    "User Instructions: You are an expert on scary stories. Your mission is to generate a scary story in basic HTML in as few words as possible.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayStory);
}

let storyElement = document.querySelector("#generator-form");
storyElement.addEventListener("submit", generateStory);
