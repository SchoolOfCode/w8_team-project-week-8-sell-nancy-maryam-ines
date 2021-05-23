// create template in HTML & CSS
// follow wireframe design
// ~ 3-4 pages, homepage, about us, contact us, potential separate translation page
// buttons & input build first for testing
// Testing and choosing APIs
// Api-1 = translation
// Api-2 = text-to-speech
// Api-3 = ??
//

//Skakespeare API

let inputElement = document.querySelector("#inputTxt");
let translateBtnElement = document.querySelector("#translateButton");
let outputElement = document.querySelector("#outputTxt");
let url = "https://api.funtranslations.com/translate/shakespeare.json";

translateBtnElement.addEventListener("click", translateFunction);
function translatedURL(inputValue) {
  return `${url} ?text= ${inputValue}`;
}

function translatedURL(inputValue) {
  return `${url}?text=${inputValue}`;
}

function translateFunction(event) {
  let inputValue = inputElement.value;
  let finalURL = translatedURL(inputValue);
  fetch(finalURL)
    .then((response) => response.json())
    .then((json) => {
      outputElement.innerText = json.contents.translated;
    })
    .catch(() => alert("Shakespeare(Server) is busy! Try after sometime"));
}
function HandleTranslation() {
  let wordToTranslate = outputElement.innerText;
  console.log(wordToTranslate);

  speak(wordToTranslate);
}

function speak(word) {
  let hear = new SpeechSynthesisUtterance();
  hear.text = word;
  console.log(hear.text);
  hear.volume = 1;
  hear.lang = "en-US";
  console.log({ hear });
  speechSynthesis.speak(hear);
}
