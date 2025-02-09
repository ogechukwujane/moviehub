import {useEffect, useRef, useState} from 'react';
import {Pressable, View, Text, Image, ActivityIndicator} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import {styles} from './styles';
import {PlayIcon} from '../../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {INavSetting} from '../../navigation/type';

export const VideoCard = ({
  item,
  isPlaying,
}: {
  item: IMovie;
  isPlaying: boolean;
}) => {
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const navigation = useNavigation<INavSetting>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let imageTimer: NodeJS.Timeout | null = null;
    let videoTimer: NodeJS.Timeout | null = null;

    if (isPlaying) {
      imageTimer = setTimeout(() => {
        setShowImage(false);
        setPaused(false);

        videoTimer = setTimeout(() => {
          setShowImage(true);
          setPaused(true);
          videoRef.current?.seek(0);
        }, 30000);
      }, 3000);
    } else {
      setShowImage(true);
      setPaused(true);
      videoRef.current?.seek(0);
    }

    return () => {
      if (imageTimer) clearTimeout(imageTimer);
      if (videoTimer) clearTimeout(videoTimer);
    };
  }, [isPlaying]);

  const handleProgress = (data: {
    currentTime: number;
    seekableDuration: number;
  }) => {
    if (data.seekableDuration > 0) {
      setProgress((data.currentTime / data.seekableDuration) * 100);
    }
  };

  const onClickPlay = () => {
    navigation.navigate('BottomStack', {
      screen: 'ShortScreen',
      params: {data: item, duration: progress},
    });
  };

  return (
    <Pressable style={styles.videoContainer}>
      {showImage ? (
        <Image
          style={styles.backgroundVideo}
          source={{uri: item?.image}}
          alt=""
        />
      ) : (
        <Video
          ref={videoRef}
          source={{
            uri: item?.video,
          }}
          style={styles.backgroundVideo}
          resizeMode="cover"
          muted={true}
          paused={!isPlaying || paused || showImage}
          onProgress={handleProgress}
          onLoad={() => videoRef.current?.seek(0)}
          onBuffer={({isBuffering}) =>
            isBuffering ? setLoading(true) : setLoading(false)
          }
        />
      )}
      {loading && (
        <ActivityIndicator
          style={styles.loader}
          size={'large'}
          color={'#fff'}
        />
      )}
      <View style={styles.absoluteWrap}>
        <View style={styles.flex}>
          {item.tags?.map((tag, index) => (
            <View style={styles.categoryCard}>
              <Text style={styles.categoryText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.playButton} onPress={onClickPlay}>
          <PlayIcon />
          <Text style={styles.buttonText}>Play</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
