import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Container>
      <Label>{props.title}</Label>
    </Container>
  );
};

export default Button;

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f82ed;
`;

const Label = styled.Text`
  color: white;
  text-align: center;
`;
