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

## Prop types

```es6
faces: PropTypes.shape({
  imageUrl: PropTypes.string
}),
overflow: PropTypes.number,
circleHeight: PropTypes.number,
circleWidth: PropTypes.number,
containerStyle: PropTypes.style,
circleStyle: PropTypes.style,
overflowStyle: PropTypes.styles
```
