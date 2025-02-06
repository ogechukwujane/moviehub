import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardWrap: {
    width: 146,
    gap: 6,
    backgroundColor: 'red',
  },
  imageWrap: {
    width: 146,
    height: 220,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'green',
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
  paragraph: {
    fontSize: 11,
    fontWeight: 400,
    color: '#ffffff60',
  },
});
