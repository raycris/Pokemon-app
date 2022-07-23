import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Button from "./Button";

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <Container>
      <Label>Necesitas iniciar sesión para ver esta pantalla</Label>
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("Account")}
      />
    </Container>
  );
}

const Container = styled.View`
  margin: 50px 0;
  padding: 0 20px;
`;
const Label = styled.Text`
  text-align: center;
  margin-bottom: 10px;
`;
