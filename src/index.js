// @flow
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
  },
  circle: {
  },
  avatar: {
    width: 30,
    height: 30,
  },
  extra: {
  }
})

function renderFace(face) {
  return (
    <View style={styles.circle}>
      <Image style={styles.avatar} source={{ uri: face.imageUrl }} resizeMode='contain' />
    </View>
  )
}

function renderAdditionalFaces(additionalFaces) {
  return (
    <View style={styles.circle}>
      <Text style={styles.extra}>+ {additionalFaces}</Text>
    </View>
  )
}

type Face = {
  imageUrl: string
}

type FacePileType = {
  faces: Array<Face>,
  additionalFaces: number
}

const FacePile = ({ faces, additionalFaces }: FacePileType) => (
  <View style={styles.container}>
    {faces.map(renderFace)}
    {renderAdditionalFaces(additionalFaces)}
  </View>
)

FacePile.prop

export default FacePile
