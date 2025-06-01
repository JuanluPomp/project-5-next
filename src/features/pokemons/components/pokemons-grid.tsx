"use client"
import { useAppSelector } from '@/store'
import React from 'react'
import PokemonCard from './pokemon-card'
import Link from 'next/link'

export default function PokemonsGrid() {
    const pokemons = useAppSelector(state => state.favorites.favorites)
    console.log(pokemons)
  return (
    <div className=" flex flex-col items-center">
      <h1 className=" text-center text-3xl mt-10">Pokemons Page </h1>

      {!pokemons || pokemons.length === 0 ? (
        <p className=" text-xl text-center mt-20">
          There are not favorite pokemons
          <Link
          className=" ml-2 text-blue-500"
          href={'/dashboard/pokemons'}
          >Go to pokemon Page</Link>
        </p>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-md border border-gray-300 p-2 w-full bg-white mx-4 m-10">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}{" "}
        </div>
      )}
    </div>
  )
}
