import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";
import styled from "styled-components";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return <PokeballImage source={require("../assets/pokeball.png")} />;
}

const PokeballImage = styled.Image`
  top: -16px;
  width: 76px;
  height: 76px;
`;
