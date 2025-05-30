
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PokemonUnique } from "../types";
import { Heart } from "lucide-react";

export default function PokemonCard({ pokemon }: { pokemon: PokemonUnique }) {
  return (
    <div className=" flex flex-col items-center border border-slate-400 m-2 rounded-md shadow-md shadow-blue-500 max-h-50 p-2 bg-slate-100">
        <h1 className=" text-xl font-semibold">{`${pokemon.id}.- ${pokemon.name}`}</h1>
        <Image
          height={100}
          width={100}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt="Pokemon Image"
          className=" max-w-24 max-h-24"
        />
        <Link
        className=" bg-sky-500 rounded-md p-1 text-white font-bold max-h-full mt-1"
        href={`/dashboard/pokemon/${pokemon.name}`}>Ver Informacion</Link>
        <button
          className=" flex items-center text-sm mt-2"
        ><Heart  
        className=" cursor-pointer"
        size={15}/>Add to favorites</button>
      </div>
  );
}
