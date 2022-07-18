import { ActionType, Api, Character, Episode } from "../../types";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR";
export const FAV_CHARACTERS = 'FAV_CHARACTERS';
export const FETCH_CHARACTER_ID = 'FETCH_CHARACTER_ID';
export const FETCH_EPISODES = 'FETCH_EPISODES';

/**
 * @function fetchCharactersStart
 * @returns { ActionType } payload = { pageInfo, Characters[]}
 */
export const fetchCharactersStart = (): ActionType => {
    return {
        type: 'FETCH_CHARACTERS_START',
    }
};

/**
 * @function fetchCharactersSuccess
 * @param { Api } data
 * @returns { ActionType } payload = { pageInfo, Characters[]}
 */
export const fetchCharactersSuccess = (data: Api): ActionType => {
    return {
        type: 'FETCH_CHARACTERS_SUCCESS',
        payload: { data },
    }
};

/**
 * @function fetchCharactersError
 * @param { string } errorMessage
 * @returns { ActionType } payload = error Message
 */
export const fetchCharactersError = (errorMessage: string): ActionType => {
    return {
        type: 'FETCH_CHARACTERS_ERROR',
        payload: { errorMessage },
    }
};

/**
 * @function favCharacter
 * @param { number } id 
 * @returns { ActionType } id from fav character
 */
export const favCharacter = (id: number): ActionType => {
    return {
        type: 'FAV_CHARACTERS',
        payload: id,
    }
}

/**
 * @function fetchCharacterId search a character by id
 * @param { Characters } character 
 * @returns payload = Character data
 */
export const fetchCharacterId = (character: Character): ActionType => {
    return {
        type: 'FETCH_CHARACTER_ID',
        payload: { character },
    }
};

/**
 * @function fetchEpisodes
 * @param { Episode } episodes 
 * @returns all epsisodes of a character
 */
export const fetchEpisodes = (episodes: Episode[]): ActionType => {
    return {
        type: 'FETCH_EPISODES',
        payload: { episodes },
    }
}



/**
 * @function fetchCharactersThunk
 * @async
 * @returns results: top 20 characters, info: page
 */
export const fetchCharactersThunk = () => async (dispatch: any) => {
    dispatch(fetchCharactersStart());
    await new Promise(resolve => setTimeout(resolve, 30));
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const dataJson = await response.json();
        const dataFilter = dataJson.results.map((result: Character) => ({
            ...result,
            fav: false,
        }))
        dispatch(fetchCharactersSuccess({ 
            info: dataJson.info,
            results: dataFilter
        }))
    } catch (error: any) {
        dispatch(fetchCharactersError(error.message));
    }
};


/**
 * @function filterCharcatersThunk
 * @async
 * @param { string } text 
 * @returns filtering character by name
 */
export const filterCharcatersThunk = (text: string) => async (dispatch: any) => {
    dispatch(fetchCharactersStart());
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${text}`);
        const dataJson = await response.json();
        const dataFilter = dataJson.results.map((result: Character) => ({
            ...result,
            fav: false,
        }))
        dispatch(fetchCharactersSuccess({
            info: dataJson.info,
            results: dataFilter,
        }))
    } catch (error: any) {
        dispatch(fetchCharactersError(error.message));
    }
}

/**
 * @function fetchNextPageThunk
 * @param { string } url 
 * @returns new list of next 20 characters
 */
export const fetchNextPageThunk = (url: string) => async (dispatch: any) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    try {
        const response = await fetch(url);
        const dataJson = await response.json();
        const dataFilter = dataJson.results.map((result: Character) => ({ ...result, favorite: false }))
        dispatch(fetchCharactersSuccess({
            info: dataJson.info,
            results: dataFilter,
        }))
    } catch (error: any) {
        dispatch(fetchCharactersError(error.message));
    }
}

/**
 * @function fetchCharacterIdThunk
 * @param { number } id 
 * @returns the character id data only
 */
export const fetchCharacterIdThunk = (id: number) => async (dispatch: any) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const dataJson = await response.json();
        dispatch(fetchCharacterId(dataJson))
    } catch (error: any) {
        dispatch(fetchCharactersError(error.message));
    }
}

/**
 * @function fetchEpisodesThunk
 * @param { Episode } episodes 
 * @returns all epsisodes of a character 
 */
export const fetchEpisodesThunk = (episodes: string[]) => async (dispatch: any) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodes}`);
        const dataJson = await response.json();
        dispatch(fetchEpisodes(dataJson))
    } catch (error: any) {
        dispatch(fetchCharactersError(error.message));
    }
}