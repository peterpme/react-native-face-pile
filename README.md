# React Native Face Pile

A group of overlapping round avatars are called face piles.

![Facepile Image](/screenshots/facepiles.png)

## Installation

```
yarn add react-native-face-pile

// or

npm install --save react-native-face-pile
```

## Usage

```es6
import FacePile from 'react-native-face-pile'

const FACES = [
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
]

<FacePile faces={FACES} overflow={10} />
```
- If overflow is 0 then you won't see the circle with ( +4 )
- If you want to hide the ( +4 ) regardless, you can pass `hideOverflow`

## Prop types

```es6
faces: PropTypes.shape({
  imageUrl: PropTypes.string
}),
circleSize: PropTypes.number, // 20, 40, 60, etc.
overflow: PropTypes.number, // # of additional faces (+3, etc.)
hideOverflow: PropTypes.bool,
containerStyle: PropTypes.instanceOf(StyleSheet), // overall container style
circleStyle: PropTypes.instanceOf(StyleSheet), // override default circle styles
imageStyle: PropTypes.instanceOf(StyleSheet), // override default image styles
overflowStyle: PropTypes.instanceOf(StyleSheet), // override default overflow circle styles
overflowLabelStyle: PropTypes.instanceOf(StyleSheet) // override default overflow label (+8) styles
```
