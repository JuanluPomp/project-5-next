
import { TPokemonInfo } from '@/types'
import Image from 'next/image'
import React from 'react'

interface PokemonInfoProps {
    pokemonInfo: TPokemonInfo
}

export default function PokemonInfo({pokemonInfo}:  PokemonInfoProps ) {
  return (
    <div className=' container mx-auto flex flex-col items-center space-y-2 border bg-white w-1/2 p-2 rounded-md'>
        <h1 className=' text-3xl text-center'>{pokemonInfo.id}.- {pokemonInfo.name}</h1>
        <Image
            className=' max-w-32 max-h-32'
            width={100} height={100}
            src={pokemonInfo.image}
            alt='Pokemon Image Information'
        />
        <h2 className=' text-center font-semibold text-xl'>Habilities</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus asperiores laudantium vero rerum eaque eligendi tempore repudiandae corrupti a molestiae, esse id, quaerat error, optio autem laborum. Corrupti, ipsa?</p>
    </div>
  )
}
