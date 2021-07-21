import React, { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "🍏": "green apple",
  "🍎": "red apple",
  "🍐": "pear",
  "🍊": "tangerine",
  "🍋": "lemon",
  "🍌": "banana",
  "🍉": "watermelon",
  "🍇": "grapes",
  "🍓": "strawberry",
  "🍈": "melon",
  "🍒": "cherries",
  "🍑": "peach",
  "🍍": "pineapple",
  "🥥": "coconut",
  "🥝": "kiwi",
  "🍅": "tomato",
  "🍆": "eggplant",
  "🥑": "avocado",
  "🥦": "broccoli",
  "🥒": "cucumber",
  "🌶": "hot pepper",
  "🌽": "ear of corn",
  "🥕": "carrot",
};

var foodEmoji = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Output will be shown here...");

  function emojiInputHandler(e) {
    let userInput = e.target.value;
    if (userInput !== "") {
      let meaning = emojiDictionary[userInput];
      if (meaning === undefined) {
        meaning = "We don't have this in our database.";
      }
      setMeaning(meaning);
    } else {
      setMeaning("Output will be shown here...");
    }
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <header className="hero">
        <h1 className="hero-heading">Emoji Basket</h1>
      </header>
      <section className="section"></section>
      <div className="container container-center section-center">
        <input
          placeholder="Enter emoji or click on any emoji below"
          onChange={emojiInputHandler}
        />
        <div class="outputDiv">
          <p>Meaning of this Emoji</p>
          <div id="output-div">{meaning}</div>
        </div>
        <ul className="list-non-bullet">
          {foodEmoji.map((emoji) => {
            return (
              <li
                className="list-item-inline"
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}
              >
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
