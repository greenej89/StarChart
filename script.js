function editText(text) {
    console.log("Editing text from..." + document.querySelector(text).innerText);
    var newText = changeInfo(text);
    console.log("newText is " + newText)
    if (newText != null && newText != "") {
        document.querySelector(text).innerText = newText;
    }
    
}

function changeInfo(text) {
    console.log("prompting user for..." + text)
    var userInput;
        if (text == '#name'){
            userInput = prompt("Please enter the new name.");
        }
        if (text == '#star-goal'){
            userInput = prompt("Please enter the new star goal.");
        }
        if (text == '#reward-text'){
            var userInput = prompt("Please enter the new reward.");
        }
    return userInput;
}

function awardStar(starImage) {
    if (starImage.src.match("gray-star")) {
        starImage.src = "./assets/gold-star.png";
    } else {
        starImage.src = "./assets/gray-star.png";
    }
}