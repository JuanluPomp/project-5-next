import PokemonCard from "@/features/pokemons/components/pokemon-card";
import { PokemonUnique, ResPokemon } from "@/features/pokemons/types";

export const metadata = {
    title: 'Pokemons Page',
    description: 'here are all pokemons' 
}

const MAX_ITEMS = 20;
const OFFSET = 0;
const getPokemons = async (): Promise<PokemonUnique[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${MAX_ITEMS}&offset=${OFFSET}`
  )
    .then((res) => res.json())
    .then((data) => data.results);
  const pokemons = response.map((pokemon: ResPokemon) => {
    return {
      id: pokemon.url.split("/").at(-2),
      name: pokemon.name,
    };
  });
  return pokemons;
};
export default async function PokemonsPage() {
  const pokemonsRes = await getPokemons();
  return (
    <div className=" flex flex-col items-center">
      <h1 className=" text-center text-3xl mt-10">Pokemons Page </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-md border border-gray-300 p-2 w-full bg-white mx-4 m-10">
        {pokemonsRes.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
