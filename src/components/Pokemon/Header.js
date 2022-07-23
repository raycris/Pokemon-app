import React from "react";
import { capitalize } from "lodash";
import { SafeAreaView } from "react-native-safe-area-context";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import styled from "styled-components";

export default function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type);

  const bgStyle = [{ backgroundColor: color }];

  return (
    <>
      <PageBackground style={bgStyle} />
      <Container>
        <TitleContainer>
          <NameLabel>{capitalize(name)}</NameLabel>
          <OrderLabel>#{`${order}`.padStart(3, 0)}</OrderLabel>
        </TitleContainer>
        <ImageContainer>
          <Imagen source={{ uri: image }} style={{ resizeMode: "contain" }} />
        </ImageContainer>
      </Container>
    </>
  );
}

const Container = styled.SafeAreaView`
  margin: 30px 20px;
`;

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  padding-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

const NameLabel = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
`;

const OrderLabel = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const ImageContainer = styled.View`
  top: 30px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Imagen = styled.Image`
  width: 250px;
  height: 300px;
`;

const PageBackground = styled.View`
  width: 100%;
  height: 400px;
  position: absolute;
  transform: scaleX(2);
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;
