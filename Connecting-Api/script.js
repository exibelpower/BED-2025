const container = document.querySelector("#pokemon-container");

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  console.log(data);

  data.results.forEach((pokemon) => {
    createPokemon(pokemon);
  });
  /*   data.results.forEach((pokemon) => {
    console.log(pokemon.name);
    container.innerHTML += "</p>" + pokemon.name + "</p>";
  }); */

  /*   for (const pokemon of data.results) {
    console.log(pokemon.name);
    const poke = document.createElement("p");
    poke.innerText = pokemon.name;
    console.log(poke);
    container.append(poke);
  } */
}

getData();

function createPokemon(pokemon) {
  const row = document.createElement("div");
  row.classList.add("row");
  const button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("btn", "btn-primary", "w-50", "m-4");

  button.addEventListener("click", () => {
    getPokemon(pokemon.url);
  });

  row.append(button);
  container.append(row);
}

async function getPokemon(url) {
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.name);
  const pokemonName = document.querySelector("#pokemon-name");
  pokemonName.innerText = data.name;

  const pokemonImage = document.querySelector("#pokemon-image");
  pokemonImage.src = data.sprites.front_default;
}
