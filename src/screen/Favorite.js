import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonFavoriteApi } from '../api/favorite';

export default function Favorite() {


    const checkFavorites = async () => {
        const response = await getPokemonFavoriteApi()
        console.log(response);
    }

    return (
        <SafeAreaView>
            <Text>Favorite</Text>
            <Button title='Obtener favoritos' onPress={checkFavorites} />
        </SafeAreaView>
    )
}
