import { map, capitalize } from "lodash";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

export default function Stats(props) {
  const { stats } = props;

  const barStyles = (num) => {
    const color = num > 49 ? "#00AC17" : "#FF3E3E";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <Content>
      <Title>Stats</Title>
      {map(stats, (item, index) => (
        <Container key={index}>
          <TextContainer>
            <StatsLabel>{capitalize(item.stat.name)}</StatsLabel>
          </TextContainer>
          <InfoContainer>
            <NumberLabel>{item.base_stat}</NumberLabel>
            <BarContainer>
              <Bar style={barStyles(item.base_stat)} />
            </BarContainer>
          </InfoContainer>
        </Container>
      ))}
    </Content>
  );
}

const Content = styled.View`
  padding: 0 20px;
  margin-top: 40px;
  margin-bottom: 80px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Container = styled.View`
  padding: 5px 0;
  flex-direction: row;
`;

const TextContainer = styled.View`
  width: 30%;
`;

const StatsLabel = styled.Text`
  color: #6b6b6b;
  font-size: 12px;
`;

const InfoContainer = styled.View`
  width: 70%;
  align-items: center;
  flex-direction: row;
`;

const NumberLabel = styled.Text`
  width: 12%;
  font-size: 12px;
`;

const BarContainer = styled.View`
  width: 88%;
  height: 5px;
  overflow: hidden;
  border-radius: 20px;
  background-color: #dedede;
`;
const Bar = styled.View`
  height: 5px;
  border-radius: 20px;
`;
