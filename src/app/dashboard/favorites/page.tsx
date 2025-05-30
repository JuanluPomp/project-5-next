import PokemonCard from "@/features/pokemons/components/pokemon-card";
import { PokemonUnique } from "@/features/pokemons/types";
import Link from "next/link";

export const metadata = {
  title: "Favorite Pokemons",
  description: "here are all pokemons",
};

export default async function PokemonsPage() {
  const pokemonsRes: PokemonUnique[] = [];
  return (
    <div className=" flex flex-col items-center">
      <h1 className=" text-center text-3xl mt-10">Pokemons Page </h1>

      {!pokemonsRes || pokemonsRes.length === 0 ? (
        <p className=" text-xl text-center mt-20">
          There are not favorite pokemons
          <Link
          className=" ml-2 text-blue-500"
          href={'/dashboard/pokemons'}
          >Go to pokemon Page</Link>
        </p>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-md border border-gray-300 p-2 w-full bg-white mx-4 m-10">
          {pokemonsRes.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}{" "}
        </div>
      )}
    </div>
  );
}
