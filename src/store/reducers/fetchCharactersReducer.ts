import { ActionType, Character, initialState } from "../../types";

export const fetchCharactersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS_START':
            return {
                ...state,
                isFetching: true,
            };
        case 'FETCH_CHARACTERS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                page: action.payload.data.info,
                characters: action.payload.data.results,
                errorMessage: initialState.errorMessage,
            }
        case 'FETCH_CHARACTER_ID':
            return {
                ...state,
                isFetching: false,
                characters: action.payload,
            }
        case 'FETCH_EPISODES':
            return {
                ...state,
                episodes: action.payload,
            }
        case 'FAV_CHARACTERS':
            return {
                ...state,
                characters: state.characters.map((character: Character) => {
                    if (character.id !== action.payload) {
                        return character;
                    }
                    return {
                        ...character,
                        fav: !character.fav
                    }
                })
            }
        case 'FETCH_CHARACTERS_ERROR':
            return {
                ...state,
                isFetching: false,
                characters: initialState.characters,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
}