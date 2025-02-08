import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

export const CategoryCard = ({
  category,
  color,
}: {
  category: string;
  color: string[];
}) => {
  return (
    <LinearGradient
      colors={color}
      useAngle={true}
      angle={-45}
      angleCenter={{x: 0.5, y: 0.5}}
      style={styles.cardWrap}>
      <Text numberOfLines={1} style={styles.title}>
        {category}
      </Text>
    </LinearGradient>
  );
};
