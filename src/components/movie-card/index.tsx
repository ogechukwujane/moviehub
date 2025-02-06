import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export const MovieCard = () => {
  return (
    <View style={styles.cardWrap}>
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/man.png')}
        />
      </View>
      <Text style={styles.paragraph}>Detective Drama</Text>
      <Text style={styles.title}>Black Doves</Text>
    </View>
  );
};
