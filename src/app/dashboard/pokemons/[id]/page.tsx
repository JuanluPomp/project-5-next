
import PokemonInfo from '@/features/pokemons/components/pokemon-info'
import { TPokemonInfo } from '@/types'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export const generateMetadata = async ({params}: {params: Promise<{id: string}>}): Promise<Metadata> => {
  try {
    const {id} = await params
    const pokemon = await getPokemonInfo(id)
    return{
      title: `#${pokemon.id}.- ${pokemon.name}`,
      description: `Pagina del pokemon: ${pokemon.name}`
    }
  } catch (error) {
    console.log(error)
    return{
      title: `# Pokemon`,
      description: `Pagina de pokemon`
    }
  }
}

const getPokemonInfo = async (id: string): Promise<TPokemonInfo> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {cache: 'force-cache'})
              .then(res => res.json())
              .then(data => data)
  const pokemonInfo = {
    id: res.id,
    name: res.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  }
  
  return pokemonInfo
  } catch (error) {
    console.log(error)
    return notFound()
  }
}
 
export default async function page({params}: {params: Promise<{id: string}>}) {

  const pokemonInfo = await getPokemonInfo(((await params).id))
  console.log(pokemonInfo)
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
