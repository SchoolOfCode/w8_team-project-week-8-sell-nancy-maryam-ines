function speak() {
  let hear = new SpeechSynthesisUtterance();
  hear.text = "hey girl";
  hear.volume = 1;
  hear.lang = "en-US";
  console.log({ SpeechSynthesisUtterance });
  speechSynthesis.speak(hear);
}

let button = document.getElementById("button", speak);
