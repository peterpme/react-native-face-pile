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
      duration: 600,
      delay
    }).start()
  }

  render () {
    const { fadeAnim } = this.state
    const { circleStyle, imageStyle, circleSize, face, overlap } = this.props

    const borderRadius = circleSize / 2
    const innerCircleSize = circleSize * 2

    let marginRight = 0
    if (overlap >= 0 && overlap <= 1) {
      marginRight = circleSize - (circleSize * 2 * overlap)
    }

    return (
      <Animated.View
        style={[
          styles.circle,
          {
            width: circleSize,
            height: circleSize,
            borderRadius: borderRadius,
            opacity: fadeAnim,
            marginRight
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

export function renderFacePile (faces = [], numFaces) {
  const entities = [...faces]
  if (!entities.length) return null

  const facesWithImageUrls = entities.filter(e => e.imageUrl)
  if (!facesWithImageUrls.length) return null

  const facesToRender = facesWithImageUrls.slice(0, numFaces)
  const overflow = facesWithImageUrls.length - facesToRender.length

  return {
    facesToRender,
    overflow
  }
}

export default class FacePile extends PureComponent {
  static propTypes = {
    faces: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string
      })
    ),
    circleSize: PropTypes.number,
    hideOverflow: PropTypes.bool,
    containerStyle: PropTypes.instanceOf(StyleSheet),
    circleStyle: PropTypes.instanceOf(StyleSheet),
    imageStyle: PropTypes.instanceOf(StyleSheet),
    overflowStyle: PropTypes.instanceOf(StyleSheet),
    overflowLabelStyle: PropTypes.instanceOf(StyleSheet),
    render: PropTypes.func,
    numFaces: PropTypes.number,
    overlap: PropTypes.number
  }

  static defaultProps = {
    circleSize: 20,
    hideOverflow: false,
    overlap: 0.5
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
    const { circleStyle, imageStyle, circleSize, overlap } = this.props
    if (!face.imageUrl) return null

    return (
      <Circle
        key={face.id || index}
        delay={(arr.length - index) * 2}
        face={face}
        circleStyle={circleStyle}
        imageStyle={imageStyle}
        circleSize={circleSize}
        overlap={overlap}
      />
    )
  }

  render () {
    const { render, faces, numFaces, hideOverflow, containerStyle, overlap } = this.props
    if (render) return render({ faces, numFaces })

    const { facesToRender, overflow } = renderFacePile(faces, numFaces)

    return (
      <View style={[styles.container, containerStyle]}>
        {overflow > 0 && !hideOverflow && this._renderOverflowCircle(overflow)}
        {facesToRender.map(this._renderFace)}
      </View>
    )
  }
}
