import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: '#000',
  },
  videoContainer: {
    width: screenWidth,
    height: '100%',
    backgroundColor: 'blue',
    position: 'relative',
  },
  backgroundVideo: {
    backgroundColor: 'pink',
    width: screenWidth,
    height: screenHeight - 60,
  },
  heroSecrion: {
    width: screenWidth,
    height: screenHeight - 60,
    backgroundColor: 'green',
  },
  contentContainer: {flexDirection: 'column', gap: 20},
  cardGrid: {
    flexDirection: 'column',
    gap: 20,
  },
  Grid: {
    flexDirection: 'row',
    gap: 12,
    overflow: 'scroll',
  },
  title: {
    fontSize: 21,
    fontWeight: 600,
    color: '#fff',
    textTransform: 'capitalize',
  },
  paragraph: {
    fontSize: 11,
    fontWeight: 400,
    color: '#ffffff60',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  absoluteWrap: {
    position: 'absolute',
    bottom: 30,
    right: 0,
    left: 0,
    gap: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 1,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    bottom: 0,
  },
  categoryCard: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff60',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#ffffff60',
  },
  playButton: {
    width: 149,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 0,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 700,
    color: '#000',
    textAlign: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    gap: 8,
    width: '100%',
  },
  paginationDot: {
    width: 16,
    height: 7,
    borderRadius: 100,
    backgroundColor: '#F30745',
  },
  inactiveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
});
