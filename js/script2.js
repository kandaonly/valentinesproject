  /**
 * Prize data will space out evenly on the deal wheel based on the amount of items available.
 * @param text [string] name of the prize
 * @param color [string] background color of the prize
 * @param reaction ['resting' | 'dancing' | 'laughing' | 'shocked'] Sets the reaper's animated reaction
 */



  const prizes = 
  [
      { "text": "1", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "1. I love your voice" },
      { "text": "2", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "2. I love your pretty smile" },
      { "text": "3", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "3. I love your brunette hair" },
      { "text": "4", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "4. I love you Audrey M. A. Valdez" },
      { "text": "5", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "5. I love how your favorite holiday is Halloween" },
      { "text": "6", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "6. I love how you love Coco and Niko" },
      { "text": "7", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "7. I love how you like grilled cheese sandwiches" },
      { "text": "8", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "8. I love how you love scary movies" },
      { "text": "9", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "9. I love how you play monopoly go" },
      { "text": "10", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "10. I love how you spin the wheel with me" },
      { "text": "11", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "11. I love how you like your sour green apples" },
      { "text": "12", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "12. I love how you like Stargazing" },
      { "text": "13", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "13. I love that you like to admire the stars" },
      { "text": "14", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "14. I love that you like to take pictures of the sky when it reminds you of me" },
      { "text": "15", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "15. I love how you like canned tuna" },
      { "text": "16", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "16. I love how you wore your boots" },
      { "text": "17", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "17. I love how you call me yours" },
      { "text": "18", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "18. I love your ADHD and OCD" },
      { "text": "19", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "19. I love the way you talk about your great grandparents" },
      { "text": "20", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "20. I love the warmth of your hands" },
      { "text": "21", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "21. I love playing Roblox with you" },
      { "text": "22", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "22. I love how funny you are" },
      { "text": "23", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "23. I love how you like to get cozied with me" },
      { "text": "24", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "24. I love your hazel eyes" },
      { "text": "25", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "25. I love your tattoos" },
      { "text": "26", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "26. I love how you were called Diya's Helper" },
      { "text": "27", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "27. I love how you like Red roses" },
      { "text": "28", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "28. I love how you like Poker xD" },
      { "text": "29", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "29. I love how you like Country ehm Morgan Wallen" },
      { "text": "30", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "30. I love how curious you are" },
      { "text": "31", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "31. I love how your grandpa Carl called you Squeaky " },
      { "text": "32", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "32. I love how you like to wear shorts and sweats" },
      { "text": "33", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "33. I love your baby pictures" },
      { "text": "34", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "34. I love how you show me your favorite movies" },
      { "text": "35", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "35. I love how sweet you are" },
      { "text": "36", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "36. I love how caring you are" },
      { "text": "37", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "37. I love how you talk about your love for things" },
      { "text": "38", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "38. I love how your favorite animal is a Polar bear" },
      { "text": "39", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "39. I love how you like Chubby's so much " },
      { "text": "40", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "40. I love how you say 'your killing me smalls'" },
      { "text": "41", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "41. I love how like your Jordans" },
      { "text": "42", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "42. I love your piercings " },
      { "text": "43", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "43. I love how you like Courage the Cowardly Dog" },
      { "text": "44", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "44. I love how you like Hot Cheetos and Cream Cheese" },
      { "text": "45", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "45. I love how you like Nuggies and Honey xD" },
      { "text": "46", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "46. I love how you like Autumn " },
      { "text": "47", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "47. I love how you like Ariel the Mermaid" },
      { "text": "48", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "48. I love how we had a connection over Winnie the Pooh xD" },
      { "text": "49", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "49. I love how you crack your knees " },
      { "text": "50", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "50. I love how you like rainy days " },
      { "text": "51", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "51. I love how you like your Samoan cookies" },
      { "text": "52", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "52. I love how joyful your are when your with me" },
      { "text": "53", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "53. I love how you say you miss me" },
      { "text": "54", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "54. I love how you like your Dos Equis" },
      { "text": "55", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "55. I love how we played Little Nightmares together" },
      { "text": "56", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "56. I love how you like Card Games" },
      { "text": "57", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "57. I love how you say 'spit it out' whenever im not telling you something xD" },
      { "text": "58", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "58. I love looking into your eyes" },
      { "text": "59", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "59. I love (being with) you " },
      { "text": "60", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "60. I love (spending Audrey time) you" },
      { "text": "61", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "61. I love how squeaky your voice becomes when your buzzed " },
      { "text": "62", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "62. I love hearing how you want to do your Christmas in the future " },
      { "text": "63", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "63. I love how you showed me Mötley Crüe" },
      { "text": "64", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "64. I love you have favorite colors for certain things" },
      { "text": "65", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "65. I love how you like your Nirvana Shirt" },
      { "text": "66", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "66. I love how you like puzzles" },
      { "text": "67", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "67. I love how you get jealous of Naps " },
      { "text": "68", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "68. I love how many songs you've shown me" },
      { "text": "69", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "69. I loved hearing Star Gazing with you at the bar" },
      { "text": "70", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "70. I loved walking in Colorado Springs with you " },
      { "text": "71", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "71. I love how you keep our snap streak going :)" },
      { "text": "72", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "72. I love how you like Spongebob" },
      { "text": "73", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "73. I love how you like the name Marilyn " },
      { "text": "74", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "74. I love how you have SpongeBob shot glasses " },
      { "text": "75", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "75. I love how patient you can be with me" },
      { "text": "76", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "76. I love how you snap me your food" },
      { "text": "77", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "77. I love how you snap me Coco and Niko" },
      { "text": "78", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "78. I love how deep and sentimental you truly are" },
      { "text": "79", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "79. I love how you'd like to have a first dance with A Thousand Years playing" },
      { "text": "80", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "80. I love how hard working you are" },
      { "text": "81", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "81. I love how you like to collect lip sticks" },
      { "text": "82", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "82. I love how you introduced me to old-school rap " },
      { "text": "83", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "83. I love how you edited and added to our movie list" },
      { "text": "84", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "84. I love how you talked about where you saw yourself in 10 years" },
      { "text": "85", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "85. I love your morning hair" },
      { "text": "86", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "86. I love how much you care about me " },
      { "text": "87", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "87. I love how you wear Grandpa and Grandma as necklaces" },
      { "text": "88", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "88. I love how multicultural your genes are xD " },
      { "text": "89", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "89. I love the cute voice you have while talking to your dogs xD" },
      { "text": "90", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "90. I love hearing you talk about your dreams " },
      { "text": "91", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "91. I love how you'd watch my favorite K-Dramas with me" },
      { "text": "92", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "92. I loved how you shared grandpa Carl's voicemails with me " },
      { "text": "93", "color": "hsl(43 74% 66%)", "reaction": "shocked", "textinfo": "93. I love your seven jeans and flannel collection" },
      { "text": "94", "color": "hsl(27 87% 67%)", "reaction": "shocked", "textinfo": "94. I love your Trinidad cowboy girl look :)" },
      { "text": "95", "color": "hsl(12 76% 61%)", "reaction": "dancing", "textinfo": "95. I love how you feel towards Trinidad" },
      { "text": "96", "color": "hsl(350 60% 52%)", "reaction": "laughing", "textinfo": "96. I love the way you laugh" },
      { "text": "97", "color": "hsl(91 43% 54%)", "reaction": "laughing", "textinfo": "97. I love the way you ask for my initials in the contract xD" },
      { "text": "98", "color": "hsl(140 36% 74%)", "reaction": "dancing", "textinfo": "98. I love the way we have a reel-altionship" },
      { "text": "99", "color": "hsl(197 30% 43%)", "reaction": "dancing", "textinfo": "99. I love how you make time for us and stay up for me at times" },
      { "text": "100", "color": "hsl(173 58% 39%)", "reaction": "shocked", "textinfo": "100. Hope your dreams come true my love. I'll be proud of you no matter what. I love you. "},
  ];
  
  
  const wheel = document.querySelector(".deal-wheel");
  const spinner = wheel.querySelector(".spinner");
  const trigger = wheel.querySelector(".btn-spin");
  const ticker = wheel.querySelector(".ticker");
  const reaper = wheel.querySelector(".grim-reaper");
  const prizeSlice = 360 / prizes.length;
  const prizeOffset = Math.floor(180 / prizes.length);
  const spinClass = "is-spinning";
  const selectedClass = "selected";
  const spinnerStyles = window.getComputedStyle(spinner);
  let tickerAnim;
  let rotation = 0;
  let currentSlice = 0;
  let prizeNodes;
  
  const createPrizeNodes = () => {
    prizes.forEach(({ text, color, reaction }, i) => {
      const rotation = ((prizeSlice * i) * -1) - prizeOffset;
      
      spinner.insertAdjacentHTML(
        "beforeend",
        `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
          <span class="text">${text}</span>
        </li>`
      );
    });
  };
  
  const createConicGradient = () => {
    spinner.setAttribute(
      "style",
      `background: conic-gradient(
        from -90deg,
        ${prizes
          .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
          .reverse()
        }
      );`
    );
  };
  
  
  const setupWheel = () => {
    createConicGradient();
    createPrizeNodes();
    prizeNodes = wheel.querySelectorAll(".prize");
  };
  
  const spinertia = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const runTickerAnimation = () => {
    // https://css-tricks.com/get-value-of-css-rotation-through-javascript/
    const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
    const a = values[0];
    const b = values[1];  
    let rad = Math.atan2(b, a);
    
    if (rad < 0) rad += (2 * Math.PI);
    
    const angle = Math.round(rad * (180 / Math.PI));
    const slice = Math.floor(angle / prizeSlice);
  
    if (currentSlice !== slice) {
      ticker.style.animation = "none";
      setTimeout(() => ticker.style.animation = null, 10);
      currentSlice = slice;
    }
  
    tickerAnim = requestAnimationFrame(runTickerAnimation);
  };
  
  const selectPrize = () => {
    const selected = Math.floor(rotation / prizeSlice);
    prizeNodes[selected].classList.add(selectedClass);
    reaper.dataset.reaction = prizeNodes[selected].dataset.reaction;
    let check = prizes.find(prize => prize.text === (selected + 1).toString());
        // Example of how you can change the text dynamically
    let newText = check.textinfo.toString(); // You can change this to any text

    // Get the element with the id "textContent" and update the inner HTML
    // The variable you want to simulate the typing effect for
    let message = newText;
    let currentIndex = 0;
    let typingSpeed = 100; // Speed of typing in milliseconds
    let typingElement = document.getElementById('textContent');

    // Function to type out the message one character at a time
    document.getElementById("textContent").textContent = "";

    function typeMessage() {
        if (currentIndex < message.length) {
            typingElement.textContent += message.charAt(currentIndex); // Add the next character
            currentIndex++; // Increment the index
            setTimeout(typeMessage, typingSpeed); // Continue typing after the delay
        }
    }

    // To trigger the typing effect when the message variable changes
    function changeMessage(newMessage) {
        message = newMessage; // Update the message
        currentIndex = 0; // Reset the typing effect
        typingElement.textContent = ""; // Clear the current text
        typeMessage(); // Start typing the new message
    }


    // Start typing the initial message
    typeMessage();
  };
  
  trigger.addEventListener("click", () => {
    if (reaper.dataset.reaction !== "resting") {
      reaper.dataset.reaction = "resting";
    }
  
    trigger.disabled = true;
    rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
    prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
    wheel.classList.add(spinClass);
    spinner.style.setProperty("--rotate", rotation);
    ticker.style.animation = "none";
    runTickerAnimation();
  });
  
  spinner.addEventListener("transitionend", () => {
    cancelAnimationFrame(tickerAnim);
    trigger.disabled = false;
    trigger.focus();
    rotation %= 360;
    selectPrize();
    wheel.classList.remove(spinClass);
    spinner.style.setProperty("--rotate", rotation);
  });
  
  setupWheel();



// Importing the 'fs' module
