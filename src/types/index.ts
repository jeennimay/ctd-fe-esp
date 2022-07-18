export type ActionType = {
    type: string;
    payload?: any;
};

export const initialState = {
    characters: [],
    isFetching: false,
    errorMessage: undefined,
    episodes: [],
    page: {} as PageInfo,
}

export type GlobalState = {
    charac: {
        characters: Character[];
        isFetching: boolean;
        errorMessage: string;
        page: PageInfo;
        episodes: Episode[];
    }
};

export interface Api {
    info: PageInfo,
    results: Character[],
};

export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string,
    },
    location: {
        name: string,
        url: string,
    },
    image: string,
    episode: string[],
    url: string,
    created: string,
    fav: boolean,
};

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
};

export interface PageInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
};