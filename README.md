# react-native-card-element

![npm version](https://img.shields.io/npm/v/react-native-card-media.svg)
![license](https://img.shields.io/npm/l/react-native-card-media.svg)

A simple React Native component for displaying list-item in your projects.

## Installation

```bash
npm install react-native-list-item
```

## Usage

Import the Card component into the part where you want to use it.

Example :

```jsx
import React from 'react';
import { View } from 'react-native';
import ListItem from 'react-native-list-item';

const App = () => {
  return (
    <View>
      <ListItem
        image={'https://placehold.co/500x500/png'}
        title={"First Item"}
        icon={require('./src/ListItem/icons/menu.png')}
       />
    </View>
  );
};
export default App;
```
## Customization

If you want to pass an image or icon with the url, don't specify the uri, use it as in the example above

## An overview
![Texte alternatif](https://github.com/Mohamed-78/react-native-item-list/blob/main/contenu.jpg)
