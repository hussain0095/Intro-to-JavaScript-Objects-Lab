const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1
console.dir(pokemon, { maxArrayLength: null });
const pokemon59 = pokemon[58];
console.log(pokemon59.name);

// Exercise 2
console.log(game);

// Exercise 3
game.difficulty = "Med";

// Exercise 4
const starterPokemon = pokemon.find((p) => p.number === 1);
game.party.push(starterPokemon);

// Exercise 5
const extra1 = pokemon.find((p) => p.number === 4);
const extra2 = pokemon.find((p) => p.number === 7);
const extra3 = pokemon.find((p) => p.number === 25);

[extra1, extra2, extra3].forEach((p) => {
  if (p) game.party.push(p);
});

// Exercise 6
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

// Exercise 7
const evolutionMap = {
  1: 2,
  4: 5,
  7: 8,
  25: 26,
};

const starterIndex = game.party.findIndex(
  (mon) => mon.number === starterPokemon.number
);

if (starterIndex !== -1) {
  const evolvedNumber = evolutionMap[starterPokemon.number];
  const evolvedPokemon = pokemon.find((mon) => mon.number === evolvedNumber);
  if (evolvedPokemon) {
    game.party.splice(starterIndex, 1, evolvedPokemon);
  }
}

// Exercise 8
game.party.forEach((mon) => {
  console.log(mon.name);
});

// Exercise 9
pokemon.forEach((mon) => {
  if (mon.starter === true) {
    console.log(mon.name);
  }
});

// Exercise 10 + 11 (clean: one method only)
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);

  const pokeballItem = this.items.find((item) => item.name === "pokeball");
  if (pokeballItem) {
    pokeballItem.quantity -= 1;
  }
};

const caught1 = pokemon.find((mon) => mon.number === 10);
if (caught1) game.catchPokemon(caught1);

const caught2 = pokemon.find((mon) => mon.number === 11);
if (caught2) game.catchPokemon(caught2);

console.log(game.items);

// Exercise 12
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

// Exercise 13
game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  };

  this.gyms.forEach((gym) => {
    if (gym.completed) gymTally.completed += 1;
    else gymTally.incomplete += 1;
  });

  console.log(gymTally);
};

game.gymStatus();

// Exercise 14
game.partyCount = function () {
  return this.party.length;
};

console.log(game.partyCount());

// Exercise 15
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

// Exercise 16
console.log(game);
