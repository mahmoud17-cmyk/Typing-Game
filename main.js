const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

const lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};

let defaultLevel = "Normal";
let defaultLevelSeconds = lvls[defaultLevel];

let startBtn = document.querySelector(".start");
let messageLvl = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upComingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGotSpan = document.querySelector(".score .got");
let scoreTotalSpan = document.querySelector(".score .total");
let finishMsg = document.querySelector(".finish");

// setting lvl name + seconds + score
messageLvl.innerHTML = defaultLevel;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotalSpan.innerHTML = words.length;

input.addEventListener("paste", (e) => {
  e.preventDefault();
});

startBtn.onclick = function () {
  this.remove();
  input.focus();
  genWord();
};

function genWord() {
  // get random word from the array
  let randomWord = words[Math.floor(Math.random() * words.length)];

  let wordIndex = words.indexOf(randomWord);

  words.splice(wordIndex, 1);

  theWord.innerHTML = randomWord;
  upComingWords.innerHTML = "";

  //Generate words
  for (let i = 0; i < words.length; i = i + 1) {
    let div = document.createElement("div");
    let divTxt = document.createTextNode(words[i]);
    div.appendChild(divTxt);
    upComingWords.appendChild(div);
  }
  //Invoke Playing function
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);

      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        input.value = "";
        scoreGotSpan.innerHTML++;
        if (words.length > 0) {
          genWord();
        } else {
          let span = document.createElement("span");
          span.classList.add("good");
          let spanTxt = document.createTextNode("30 Out Of 30 Well Done");
          span.appendChild(spanTxt);
          finishMsg.appendChild(span);
          upComingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.classList.add("bad");
        let spanTxt = document.createTextNode("Game Over");
        span.appendChild(spanTxt);
        finishMsg.appendChild(span);
      }
    }
  }, 1000);
}
