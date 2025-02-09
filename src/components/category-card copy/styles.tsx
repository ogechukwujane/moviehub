import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardWrap: {
    width: 146,
    gap: 6,
  },
  imageWrap: {
    width: 116,
    height: 155,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff60',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
  },
});
