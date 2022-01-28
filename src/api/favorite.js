import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";


export async function getPokemonFavoriteApi(){
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        console.log(response);
        return JSON.parse(response || "[]")
    } catch (error) {
        throw error
    }
}


export async function addPokemonFavoriteApi(id){
    try {
        const favorites = await getPokemonFavoriteApi();
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}

export async function isPokemonFavoriteApi(id){
    try {
        const response = await getPokemonFavoriteApi()
        return includes(response, id)
    } catch (error) {
        throw error
    }
}

export async function removePokemonFavoriteApi(id){
    try {
        const favorites = await getPokemonFavoriteApi()
        const newfavorites = pull(favorites, id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newfavorites))
    } catch (error) {
        throw error
    }
}