// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { View, Text, Image, StyleSheet } from 'react-native';

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
    borderRadius: 20
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
});

type Face = {
  imageUrl: string,
  id?: string
};

type FacePileType = {
  faces: Array<Face>,
  overflow: number,
  containerStyle?: StyleObj
};

class FacePile extends PureComponent {
  static propTypes = {
    faces: PropTypes.shape({
      imageUrl: PropTypes.string
    }),
    overflow: PropTypes.number,
    circleHeight: PropTypes.number,
    circleWidth: PropTypes.number,
    containerStyle: PropTypes.style,
    circleStyle: PropTypes.style,
    overflowStyle: PropTypes.styles
  };

  static defaultProps = {
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
  };

  _renderOverflowCircle = overflow => {
    const { overflowStyle } = this.props;
    return (
      <View style={styles.circle}>
        <View style={[styles.avatar, styles.extra, overflowStyle]}>
          <Text style={styles.extraLabel}>
            +{overflow}
          </Text>
        </View>
      </View>
    );
  };

  _renderFace = face => {
    const { circleStyle, circleHeight, circleWidth } = this.props
    if (!face.imageUrl) return null;
    return (
      <View key={face.id || index} style={styles.circle}>
        <View style={[styles.avatarContainer, circleStyle, { width: circleWidth, height: circleHeight }]}>
          <Image
            style={[styles.avatar, { width: circleWidth / 2, height: circleHeight / 2}]}
            source={{ uri: face.imageUrl }}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  render() {
    const { faces, overflow, containerStyle } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        {this._renderOverflowCircle(overflow)}
        {faces.map(this._renderFace)}
      </View>
    );
  }
}

export default FacePile;
