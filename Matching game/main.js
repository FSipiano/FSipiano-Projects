var cardsArray = [{
        name: "horses-2",
        img: "horses-2.webp",
    },
    {
        name: "white-horse",
        img: "white-horse.webp",
    },
    {
        name: "coffee-beans",
        img: "coffee-beans.webp",
    },
    {
        name: "orange-coffee",
        img: "orange-coffee.webp",
    },
    { //doesn't work
        name: "blue-coffee",
        img: "blue-coffee.jpg",
    },
    {
        name: "black-horse",
        img: "black-horse.webp",
    },
    {
        'name': 'JS',
        'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',
    },
    {
        name: "grey-cat",
        img: "grey-cat.webp",
    }, {
        //doesn't work
        name: "ginger-cat",
        img: "ginger-cat.jpg",
    }, {
        name: "rug-cat",
        img: "rug-cat.webp",
    }, {
        name: "maldives",
        img: "maldives.webp",
    }, {
        name: "travel",
        img: "travel.webp",
    },
];
var gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(function () {
    return 0.5 - Math.random();
});
var game = document.getElementById("game-board");
var grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

for (i = 0; i < gameGrid.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = gameGrid[i].name;

    var front = document.createElement("div");
    front.classList.add("front");

    var back = document.createElement("div")
    back.classList.add("back");
    back.style.backgroundImage = `url(${gameGrid[i].img})`;

    grid.appendChild(card);
    card.appendChild(back);
    card.appendChild(front);
}
var firstGuess = "";
var secondGuess = "";
var count = 0;
var previousTarget = null;
var delay = 1200;

var match = function () {
    var selected = document.querySelectorAll(".selected");
    for (var i; i < selected.length; i++) {
        selected[i].classList.add("match");
    }
};

var resetGuesses = function () {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected')
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove("selected");

    }
}

grid.addEventListener("click", function (event) {
    var clicked = event.target;
    if (
        clicked.nodeName === "SECTION" ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains("match") ||
        clicked.parentNode.classList.contains("selected")
    ) {
        return;
    };

    //matched cards
    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add("selected");
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add("selected");
        };

        if (firstGuess !== "" && secondGuess !== "") {

            if (firstGuess === secondGuess) {
                clicked.classList.add("match");
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
                resetGuesses();
            } else {
                setTimeout(resetGuesses, delay);
            }
        }
        previousTarget = clicked;
    };

});