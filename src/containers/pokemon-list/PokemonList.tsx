import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { pokemonFetch } from '../../store/pokemon/actions'

const PokemonList = () => {
    const dispatch = useDispatch()    

    useEffect(() => {
        dispatch(pokemonFetch())       
    }, [])

    return (
        <div>
            Pokemones
        </div>
    )
}

export default PokemonList
