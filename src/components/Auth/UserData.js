import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { getPokemonFavoriteApi } from "../../api/favorite";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <Container>
      <TitleContainer>
        <Title>Bienvenido</Title>
        <Title>{`${auth.firstName} ${auth.lastName}`}</Title>
      </TitleContainer>

      <DataContainer>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Todal favorite" text={`${total} Pokemons`} />
      </DataContainer>

      <ButtonContainer title="Salir" onPress={logout} />
    </Container>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <ItemMenuContainer>
      <ItemMenuTitle>{title}:</ItemMenuTitle>
      <Text>{text}</Text>
    </ItemMenuContainer>
  );
}

const styles = StyleSheet.create({

  buttonContent: {
    paddingTop: 50,
  },
});

const Container = styled.View`
  margin: 20px 20px 0 20px;
`;
const TitleContainer = styled.View`
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const DataContainer = styled.View`
  margin-bottom: 20px;
`;
const ItemMenuContainer = styled.View`
  display: flex;
  padding: 20px 0;
  border-color: #cfcfcf;
  flex-direction: row;
  border-bottom-width: 1px;
`;

const ItemMenuTitle = styled.Text`
  width: 120px;
  font-weight: bold;
  padding-right: 10px;
`;

// const ButtonContainer = styled.TouchableOpacity`
// `
const ButtonContainer = styled.View`
  padding-top: 50px;
`;
