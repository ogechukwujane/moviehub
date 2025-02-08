import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export const MovieCard = ({item}: {item: IMovie}) => {
  return (
    <View style={styles.cardWrap}>
      <View style={styles.imageWrap}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <Text numberOfLines={1} style={styles.paragraph}>
        {item.description}
      </Text>
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
    </View>
  );
};
