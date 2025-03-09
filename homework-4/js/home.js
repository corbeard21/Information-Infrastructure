console.log("adventure");
function startAdventure() {
  const adventureRef = document.querySelector("#adventure");

  adventureRef.innerHTML =
    "<p>You find yourself at a crossroads in a dark forest. Which path will you take?</p>";

  const paths = [
    {
      name: "Left",
      img: "https://i.pinimg.com/564x/67/88/bb/6788bbf5cf1cbf91cebc337dc0ec50fb.jpg",
    },
    {
      name: "Right",
      img: "https://images.unsplash.com/photo-1712777691122-8a10db0a78a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];

    const newSection = document.createElement("section");
    console.log(path);

    newSection.innerHTML +=
      "<img height='200' src='" + path.img + "'alt='" + path.name + "'/>";

    newSection.innerHTML += "<h4>" + path.name + "</h4>";

    newSection.dataset.pathName = path.name;
    newSection.dataset.pathImage = path.img;
    newSection.onclick = choosePath;

    newSection.onclick - choosePath;

    adventureRef.appendChild(newSection);
    console.log(paths);
  }
}

function choosePath(e) {
  const adventureRef = document.querySelector("#adventure");
  console.log(e.currentTarget);
  const pathName = e.currentTarget.dataset.pathName;
  const pathImage = e.currentTarget.dataset.pathImage;

  const confirmChoice = confirm("You chose to go " + pathName);

  if (confirmChoice) {
    adventureRef.innerHTML += "";
    myChoice = { name: pathName, img: pathImage };

    nextStep(pathName);
  }
}

function nextStep(path) {
  const adventureRef = document.querySelector("#adventure");

  if (path === "Left") {
    adventureRef.innerHTML +=
      "<p>You walk down the left path and find a mysterious cave. Do you enter?</p>";
    adventureRef.innerHTML +=
      "<button onclick='enterCave()'>Enter the Cave</button>";
    adventureRef.innerHTML +=
      "<button onclick= 'keepWalking()'>Keep Walking</button>";
  } else if (path === "Right") {
    adventureRef.innerHTML +=
      "<p>You walk down the right path and encounter a wild animal. Do you fight or run?</p>";
    adventureRef.innerHTML +=
      "<button onclick='fightAnimal()'>Fight Animal</button>";
    adventureRef.innerHTML += "<button onclick='runAway()'>Run Away</button>";
  }
}

function enterCave() {
  const adventureRef = document.querySelector("#adventure");
  adventureRef.innerHTML +=
    "<p>You enter the cave and discover a treasure! Congratulations, you win!</p>";
  gameOver();
}

function keepWalking() {
  const adventureRef = document.querySelector("#adventure");
  adventureRef.innerHTML +=
    "<p>You keep walking and get lost in the forest. Game Over.</p>";
  gameOver();
}

function fightAnimal() {
  const adventureRef = document.querySelector("#adventure");
  adventureRef.innerHTML +=
    "<p>You fight bravely, but the animal overpowers you. Game Over.</p>";
  gameOver();
}

function runAway() {
  const adventureRef = document.querySelector("#adventure");
  adventureRef.innerHTML +=
    "<p>You run away and find safety in a village. Congratulations, you survive!</p>";
  gameOver();
}

function gameOver() {
  const adventureRef = document.querySelector("#adventure");
  const replay = confirm("Do you want to play again?");
  if (replay) {
    location.reload();
  }
}
