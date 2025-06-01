import { PokemonUnique } from "@/features/pokemons/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
    favorites: PokemonUnique[],
    isReady: boolean
}

const getInitialState = (): FavoritesState['favorites'] => {
    if(typeof localStorage === 'undefined') return []
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites
}
export const initialState: FavoritesState = {favorites: getInitialState(), isReady: false}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<PokemonUnique>) => {
            const pokemon = action.payload
            const isPokemonExist = state.favorites.some(favorite => favorite.id === pokemon.id)
            if(isPokemonExist){
                console.log('el pokemon ya existe en faavoritos')
                return
            } 
            state.favorites = [...state.favorites, pokemon]
            console.log('pokemon agregado a favoritos')
        },
        removeFromFavorites: (state, action: PayloadAction<PokemonUnique>) => {
            const pokemon = action.payload
            const newState = state.favorites.filter(favorite => favorite.id !== pokemon.id)
            state.favorites = newState
            console.log('Pokemon eliminado')
        },
        toggleFavorites: (state, action: PayloadAction<PokemonUnique>) => {
            const pokemon = action.payload
            const isFavorite = state.favorites.some(favorite => favorite.id === pokemon.id)
            if(!isFavorite){
                state.favorites = [...state.favorites, pokemon]
                return
            }
            const newState = state.favorites.filter(favorite => favorite.id !== pokemon.id)
            state.favorites = newState
        },
        addLocalStorage: (state, action: PayloadAction<FavoritesState['favorites']>) => {
            const favorites = action.payload
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
    }
})

export const {addToFavorites, removeFromFavorites, toggleFavorites, addLocalStorage} = favoriteSlice.actions
export default favoriteSlice.reducer