import {Dimensions, StyleSheet} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: '#000',
  },
  videoContainer: {
    width: screenWidth,
    height: screenHeight - 50,
    position: 'relative',
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: '#fff',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 500,
    color: '#ffffff',
  },
  playButton: {
    width: screenWidth / 2,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F30745',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
  },
  absoluteWrap: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    left: 15,
    gap: 10,
    flexDirection: 'column',
    width: screenWidth / 1.5,
  },
  iconFlex: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    gap: 8,
  },
  iconCard: {
    gap: 2,
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#fff',
    textAlign: 'center',
  },
  backgroundVideo: {
    width: screenWidth,
    height: screenHeight,
  },
  loader: {
    position: 'absolute',
    bottom: '50%',
    left: 0,
    right: 0,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
