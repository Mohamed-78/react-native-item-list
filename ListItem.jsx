import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './listitem.style';

const ListItem = ({ title, image, icon }) => {
  const imageSource = typeof image === 'string' ? { uri: image } : image;
  const iconSource = typeof icon === 'string' ? { uri: icon } : icon;

  return (
    <View>
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <Image source={imageSource} style={styles.image} resizeMode="cover" />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity>
                <Image source={iconSource} style={styles.icon} resizeMode="cover" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.horizontalLine}></View>
    </View>
  );
};

export default ListItem;
