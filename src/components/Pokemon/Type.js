import React from "react";
import { map, capitalize } from "lodash";
import { StyleSheet, View, Text } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import styled from "styled-components";

export default function Type(props) {
  const { types } = props;
  return (
    <Container>
      {map(types, (item, index) => (
        <Pill
          key={index}
          style={{
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </Pill>
      ))}
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  margin-top: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const Pill = styled.View`
  margin: 0 10px;
  padding: 5px 30px;
  border-radius: 20px;
`;
