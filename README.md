# React Native Face Pile

A group of overlapping round avatars are called face piles. [Try it on Snack](https://snack.expo.io/@peterpme/react-native-face-pile-example)

[![npm version](https://badge.fury.io/js/react-native-face-pile.svg)](https://badge.fury.io/js/react-native-face-pile)


![Facepile Image](/screenshots/facepile.png)

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
    id: 0,
    imageUrl: 'https://lorempixel.com/200/200/people'
  },
  {
    id: 1,
    imageUrl: 'https://lorempixel.com/200/203/people'
  },
  {
    id: 2,
    imageUrl: 'https://lorempixel.com/200/201/people'
  },
  {
    id: 3,
    imageUrl: 'https://lorempixel.com/200/202/people'
  }
]

<FacePile numFaces={3} faces={FACES} />
```
- Pass in your array of faces, then the number you want to render.
- Any faces exceeding `numFaces`, or faces without images, will show up under the overflow (a circle with, for example, `+3` after the faces)
- If you want to hide the overflow, pass in `hideOverflow` (boolean)
- If you don't want FacePile to figure out what to render, you can pass in your own `render` method:
  `render=({ numFaces, faces }) => { do whatever you want here }`

## Prop types

```es6
render: PropTypes.func, // optional render method, otherwise we take control
numFaces: PropTypes.number, // number of faces you want to render. The rest is subtracted
hideOverflow: PropTypes.bool, // whether or not to show the +2 extra faces
overlap: PropTypes.number, // optional amount of overlap of faces (between 0 and 1), defaults to 0.5
faces: PropTypes.shape({
  id: PropTypes.string,
  imageUrl: PropTypes.string
}),
circleSize: PropTypes.number, // 20, 40, 60, etc.
containerStyle: PropTypes.instanceOf(StyleSheet), // overall container style
circleStyle: PropTypes.instanceOf(StyleSheet), // override default circle styles
imageStyle: PropTypes.instanceOf(StyleSheet), // override default image styles
overflowStyle: PropTypes.instanceOf(StyleSheet), // override default overflow circle styles
overflowLabelStyle: PropTypes.instanceOf(StyleSheet) // override default overflow label (+8) styles
```

## Contributors
- @peterpme
- @dhruska
- @angelk90
