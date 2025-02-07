import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Video, {VideoRef} from 'react-native-video';

const {height, width} = Dimensions.get('window');
const videos = [
  {
    id: '1',
    uri: 'https://youtu.be/dpqtVNc6vOM?si=mWjLjTkbZHwm0Kma',
  },
  {
    id: '2',
    uri: 'https://youtu.be/dpqtVNc6vOM?si=mWjLjTkbZHwm0Kma',
  },
  // {
  //   id: '3',
  //   uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  // },
];
const VideoItem = ({item, isPlaying}: {item: any; isPlaying: boolean}) => {
  console.log('item', item.uri);
  const videoRef = useRef<VideoRef>(null);

  return (
    <Video
      source={{uri: item.uri}}
      style={styles.backgroundVideo}
      ref={videoRef}
      resizeMode="cover"
      repeat
      paused={false} // Only play when visible
      controls={true}
      onError={e => console.log('Video Error:', e)}
      onLoad={() => console.log('Video Loaded:', item.uri)}
    />
  );
};
export const ShortsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 80};

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  console.log('currentIndex', currentIndex);

  return (
    <View>
      <FlatList
        data={videos}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          // <View style={styles.videoContainer}>
          <VideoItem item={item} isPlaying={index === currentIndex} />
          // </View>
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      {/* <View style={styles.videoContainer}>
        <View style={styles.absoluteWrap}>
          <Text style={styles.title}>Secrete Billioniare</Text>
          <Text style={styles.paragraph} numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit
            repudiandae
          </Text>
          <Pressable style={styles.playButton}>
            <Text style={styles.buttonText}>Watch Now</Text>
          </Pressable>
        </View>
        <View style={styles.iconFlex}>
          <View style={styles.iconCard}>
            <Pressable style={styles.icon}></Pressable>
            <Text>12.5k</Text>
          </View>
          <View style={styles.iconCard}>
            <Pressable style={styles.icon}></Pressable>
            <Text>124</Text>
          </View>
          <View style={styles.iconCard}>
            <Pressable style={styles.icon}></Pressable>
            <Text>20</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};
