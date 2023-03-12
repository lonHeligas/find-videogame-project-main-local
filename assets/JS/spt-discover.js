console.log("connection test");

const submitButton = document.getElementById("submit-button");
const searchBarInput = document.getElementById("search-bar-input");
const apiTestSection = document.getElementById("API-response-test-section");
const checkboxShooter = document.getElementById("shooter");
const checkboxFantasy = document.getElementById("fantasy");
const gameDisplayInformation = document.querySelectorAll(
  ".game-display-information"
);

const checkboxSection = document.querySelector(".checkbox-section");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5353e51751msha2b28d9e3384746p1a9b44jsne8dbb6955924",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const apiurl =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date";

async function getapi() {
  const response = await fetch(apiurl, options);

  var data = await response.json();
  // console.log(data);
  console.log(data[0]);

  document.getElementById(
    "carousel-item-1"
  ).innerHTML = `<div class="row"><div class="col-9 mr-0 pr-0"> <p> <img class="d-block image " src="${data[0].thumbnail}" alt="First slide"/></p> </div>
  <div class="mx-0 my-0 words col-3"> 
  <h1 id="gametitle1"></h1>
  <h2 id="description1" ></h2>
  <p> developer: ${data[0].developer} </p>
  <p> genre: ${data[0].genre} </p>
  <p> platform: ${data[0].platform} </p>
  <div id="gameurl1">
  <a class="game-site" href="${data[0].game_url}">Game Website</a>
  </div>
  </div>
  </div>`;

  document.getElementById(
    "carousel-item-2"
  ).innerHTML = `<div class="row"><div class="col-9 mr-0 pr-0"> <p> <img class="d-block image " src="${data[1].thumbnail}" alt="First slide"/></p> </div>
  <div class="mx-0 my-0 words col-3"> 
  <h1 id="gametitle2"></h1>
  <h2 id="description2" ></h2>
  <p> developer: ${data[1].developer} </p>
  <p> genre: ${data[1].genre} </p>
  <p> platform: ${data[1].platform} </p>
  <div id="gameurl2">
  <a class="game-site" href="${data[1].game_url}">Game Website</a>
  </div>
  </div>
  </div>`;

  document.getElementById(
    "carousel-item-3"
  ).innerHTML = `<div class="row"><div class="col-9 mr-0 pr-0"> <p> <img class="d-block image " src="${data[2].thumbnail}" alt="First slide"/></p> </div>
  <div class="mx-0 my-0 words col-3"> 
  <h1 id="gametitle3"></h1>
  <h2 id="description3" ></h2>
  <p> developer: ${data[2].developer} </p>
  <p> genre: ${data[2].genre} </p>
  <p> platform: ${data[2].platform} </p>
  <div id="gameurl3">
  <a class="game-site" href="${data[2].game_url}">Game Website</a>
  </div>
  </div>
  </div>`;

  var paragraph = document.getElementById("gametitle1");
  paragraph.textContent += data[0].title;

  var paragraph = document.getElementById("gametitle2");
  paragraph.textContent += data[1].title;

  var paragraph = document.getElementById("gametitle3");
  paragraph.textContent += data[2].title;

  var paragraph = document.getElementById("description1");
  paragraph.textContent += data[0].short_description;

  var paragraph = document.getElementById("description2");
  paragraph.textContent += data[1].short_description;

  var paragraph = document.getElementById("description3");
  paragraph.textContent += data[2].short_description;
}

getapi(apiurl);
