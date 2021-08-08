import { POKEMON_FETCH_STARTED, POKEMON_FETCH_SUCCEDED } from "../constants";

const initialState = {
  data: {},
  isLoading: false,
  fetchSuccessfull: false,
  fetchFailed: false,
};

const pokemonReducer = (
  prevState = initialState,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    case POKEMON_FETCH_STARTED:
      return {
        ...prevState,
        isLoading: true,
      };
    case POKEMON_FETCH_SUCCEDED:
      return {
        ...prevState,
        isLoading: false,
        fetchSuccessfull:true,
        fetchFailed:false,
        data:action.payload
      };

    default:
      return prevState;
  }
};
export default pokemonReducer;
