import PokemonInfo from '@/features/pokemons/components/pokemon-info'
import { PokemonUnique, TPokemonInfo } from '@/features/pokemons/types'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: Promise<{name: string}>
}

 export async function generateStaticParams(){
     const pokemonInfo: Promise<PokemonUnique[]> = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=${0}`)
                            .then(res => res.json())
                            .then((data) => data.results)
    const pokemons = (await pokemonInfo).map(pokemon => {
        return {
            name: pokemon.name
        }
    }) 
     const staticPages = Array.from({length: 20}).map((v,i) => {
         return {
             name: pokemons[i].name
         }
     })
     return staticPages
 }

export const generateMetadata = async  ({params}: Props): Promise<Metadata> => {
    const pokemonName = (await params).name
    return {
        title: `Pokmeon: ${pokemonName}`,
        description: `Pagina de pokemon: ${pokemonName}`
    }
}

const getPokemon = async  (name: string): Promise<TPokemonInfo> => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
        next: {
            revalidate: 60 * 60 * 30 * 6
        }
    })
    .then(res => res.json())
    .then((data) => data)
    const pokemonInfo = {
        id: res.id,
        name: res.name,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${res.id}.svg`
    }
    return pokemonInfo
    } catch (error) {
        console.log(error)
        return notFound()
    }
}

export default async function page({params}: Props) {
    const pokemonInfo = await getPokemon((await params).name)
  return (
    <div>
          <h1 className=' text-center text-4xl'>Pokemon Information</h1>
          <div  className='flex flex-col items-center mt-10'>
            <PokemonInfo
              pokemonInfo={pokemonInfo}
            />
          </div>
        </div>
  )
}
