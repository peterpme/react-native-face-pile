// @flow
import React from 'react'
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1.5,
    borderStyle: 'solid'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  extra: {
    backgroundColor: '#b6c0ca',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9
  },
  extraLabel: {
    color: '#333',
    fontSize: 12
  }
})

function renderFace (face, index) {
  return (
    <View key={face.id || index} style={styles.circle}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: face.imageUrl }}
          resizeMode='contain'
        />
      </View>
    </View>
  )
}

function renderoverflow (overflow) {
  return (
    <View style={styles.circle}>
      <View style={[styles.avatar, styles.extra]}>
        <Text style={styles.extraLabel}>
          +{overflow}
        </Text>
      </View>
    </View>
  )
}

type Face = {
  imageUrl: string,
  id?: string
}

type FacePileType = {
  faces: Array<Face>,
  overflow: number,
  containerStyle?: StyleObj
}

const FacePile = ({ faces, overflow, containerStyle }: FacePileType) =>
  <View style={[styles.container, containerStyle]}>
    {renderoverflow(overflow)}
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
  overflow: 8
}

export default FacePile
