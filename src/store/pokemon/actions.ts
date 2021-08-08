import { POKEMON_FETCH_FAILED, POKEMON_FETCH_STARTED, POKEMON_FETCH_SUCCEDED } from "../constants";

export const pokemonStartFetchAction = () => {
  return {
    type: POKEMON_FETCH_STARTED
  };
};



export const pokemonFetch = () => {
  return (dispatch:any)=>{
    dispatch(pokemonStartFetchAction())
    try{
       fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response=>{
        return response.json()
       }).then(data=>{
         debugger
         dispatch({
           type:POKEMON_FETCH_SUCCEDED,
           payload:data
         })
       })

    }catch{
      dispatch({
        type:POKEMON_FETCH_FAILED
      })
    }
  };
};

