import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {flexDirection: 'column', gap: 20},
  cardGrid: {
    flexDirection: 'column',
    gap: 20,
    backgroundColor: 'green',
  },
  Grid: {
    flexDirection: 'row',
    gap: 6,
    backgroundColor: 'pink',
    overflow: 'scroll',
  },
  title: {
    fontSize: 21,
    fontWeight: 600,
    color: '#fff',
  },
  paragraph: {
    fontSize: 11,
    fontWeight: 400,
    color: '#ffffff60',
  },
});
