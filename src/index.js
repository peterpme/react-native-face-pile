// @flow
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1.5,
    borderStyle: 'solid'
  },
  extra: {
    backgroundColor: '#b6c0ca',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7
  },
  extraLabel: {
    color: '#333',
    fontSize: 14
  }
})

function renderFace (face, index) {
  return (
    <View key={index} style={styles.circle}>
      <Image
        style={styles.avatar}
        source={{ uri: face.imageUrl }}
        resizeMode='contain'
      />
    </View>
  )
}

function renderAdditionalFaces (additionalFaces) {
  return (
    <View style={styles.circle}>
      <View style={[styles.avatar, styles.extra]}>
        <Text style={styles.extraLabel}>
          +{additionalFaces}
        </Text>
      </View>
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

const FacePile = ({ faces, additionalFaces }: FacePileType) =>
  <View style={styles.container}>
    {renderAdditionalFaces(additionalFaces)}
    {faces.map(renderFace)}
  </View>

FacePile.defaultProps = {
  faces: [
    {
      imageUrl: 'https://lorempixel.com/200/200/people'
    },
    {
      imageUrl: 'https://lorempixel.com/200/203/people'
    },
    {
      imageUrl: 'https://lorempixel.com/200/201/people'
    },
    {
      imageUrl: 'https://lorempixel.com/200/202/people'
    }
  ],
  additionalFaces: 8
}

export default FacePile
