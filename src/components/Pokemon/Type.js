import React from 'react'
import { map, capitalize } from 'lodash'
import { StyleSheet, View, Text } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemonType'



export default function Type(props) {
  const { types } = props
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name)
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pill: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
})
