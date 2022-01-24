import { AsyncStorage } from "react-native";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";


export async function getPokemonFavoriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(response || [])
    } catch (error) {
        throw error
    }
}


export async function addPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonFavoriteApi();
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}

export async function isPokemonFavoriteApi(id) {
    try {
        const response = await getPokemonFavoriteApi()
        return includes(response, id)
    } catch (error) {
        throw error
    }
}