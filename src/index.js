import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet, Animated } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  circle: {
    marginBottom: 20
  },
  circleImage: {
    borderWidth: 2,
    borderColor: 'white'
  },
  overflow: {
    backgroundColor: '#b6c0ca',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  overflowLabel: {
    color: '#fff',
    fontSize: 14,
    letterSpacing: -1,
    marginLeft: 3,
    fontWeight: 'bold'
  }
})

class Circle extends PureComponent {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount () {
    const { delay } = this.props
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay
    }).start()
  }

  render () {
    const { fadeAnim } = this.state
    const { circleStyle, imageStyle, circleSize, face } = this.props

    const borderRadius = circleSize / 2
    const innerCircleSize = circleSize * 2
    return (
      <Animated.View
        style={[
          styles.circle,
          {
            width: circleSize,
            height: circleSize,
            borderRadius: borderRadius,
            opacity: fadeAnim
          },
          circleStyle
        ]}
      >
        <Image
          style={[
            styles.circleImage,
            {
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: circleSize
            },
            imageStyle
          ]}
          source={{ uri: face.imageUrl }}
          resizeMode='contain'
        />
      </Animated.View>
    )
  }
}

export default class FacePile extends PureComponent {
  static propTypes = {
    faces: PropTypes.shape({
      imageUrl: PropTypes.string
    }),
    circleSize: PropTypes.number,
    overflow: PropTypes.number,
    hideOverflow: PropTpyes.bool,
    containerStyle: PropTypes.instanceOf(StyleSheet),
    circleStyle: PropTypes.instanceOf(StyleSheet),
    imageStyle: PropTypes.instanceOf(StyleSheet),
    overflowStyle: PropTypes.instanceOf(StyleSheet),
    overflowLabelStyle: PropTypes.instanceOf(StyleSheet)
  }

  static defaultProps = {
    circleSize: 20,
    hideOverflow: false,
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

  _renderOverflowCircle = overflow => {
    const {
      circleStyle,
      overflowStyle,
      overflowLabelStyle,
      circleSize
    } = this.props
    const innerCircleSize = circleSize * 2

    return (
      <View
        style={[
          styles.circle,
          { width: circleSize, height: circleSize },
          circleStyle
        ]}
      >
        <View
          style={[
            styles.overflow,
            {
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: circleSize
            },
            overflowStyle
          ]}
        >
          <Text
            style={[
              styles.overflowLabel,
              {
                fontSize: circleSize * 0.7
              },
              overflowLabelStyle
            ]}
          >
            +{overflow}
          </Text>
        </View>
      </View>
    )
  }

  _renderFace = (face, index, arr) => {
    const { circleStyle, imageStyle, circleSize } = this.props
    if (!face.imageUrl) return null

    return (
      <Circle
        key={face.id || index}
        delay={(arr.length - index) * 2}
        face={face}
        circleStyle={circleStyle}
        imageStyle={imageStyle}
        circleSize={circleSize}
      />
    )
  }

  render () {
    const { faces, overflow, hideOverflow, containerStyle } = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        {(overflow > 0 && !hideOverflow) && this._renderOverflowCircle(overflow)}
        {faces.map(this._renderFace)}
      </View>
    )
  }
}
