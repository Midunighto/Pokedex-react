import PokemonCard from "./components/PokemonCard";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App(){
  const selectedPokemon = pokemonList[1]
return (
<div>
 <PokemonCard pokemon={selectedPokemon}/>
</div>

);
}


export default App; 