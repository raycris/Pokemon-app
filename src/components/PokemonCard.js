import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();

  const getPokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: getPokemonColor };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <CardContainer>
        <SpacingContainer>
          <CardBackground style={bgStyles}>
            <NumberLabel>#{`${pokemon.order}`.padStart(3, 0)}</NumberLabel>
            <NameLabel>{capitalize(pokemon.name)}</NameLabel>
            <ImageContainer source={{ uri: pokemon.image }} />
          </CardBackground>
        </SpacingContainer>
      </CardContainer>
    </TouchableWithoutFeedback>
  );
}

const CardContainer = styled.View`
  flex: 1;
  height: 130px;
`;

const SpacingContainer = styled.View`
  flex: 1;
  padding: 5px;
`;
const CardBackground = styled.View`
  flex: 1;
  padding: 10px;
  border-radius: 16px;
`;

const NumberLabel = styled.Text`
  top: 10px;
  color: #fff;
  right: 10px;
  position: absolute;
  font-size: 12px;
`;
const NameLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
`;

const ImageContainer = styled.Image`
  right: 2px;
  width: 90px;
  height: 90px;
  bottom: 2px;
  position: absolute;
`;
