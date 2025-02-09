import {useEffect, useRef, useState} from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import {styles} from './styles';
import {FavoriteIcon, LoveIcon, PlayIcon, ShareIcon} from '../../../assets/svg';
import React from 'react';

export const VideoCard = ({
  item,
  isPlaying,
  duration,
}: {
  item: IMovie;
  isPlaying: boolean;
  duration: number;
}) => {
  const videoRef = useRef<VideoRef>(null);
  const [pause, setPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isPlaying && duration && videoRef.current) {
      videoRef.current.seek(duration);
    }
  }, [isPlaying, duration]);

  const handleProgress = (data: {
    currentTime: number;
    seekableDuration: number;
  }) => {
    if (data.seekableDuration > 0) {
      setProgress((data.currentTime / data.seekableDuration) * 100);
    }
  };

  return (
    <Pressable style={styles.videoContainer} onPress={() => setPause(!pause)}>
      <Video
        source={{uri: item.video}}
        style={styles.backgroundVideo}
        ref={videoRef}
        muted={false}
        ignoreSilentSwitch="ignore"
        resizeMode="cover"
        repeat
        paused={!isPlaying || pause}
        onProgress={handleProgress}
        onError={e => console.log('Video Error:', e)}
        onLoad={() => {
          if (isPlaying && duration) {
            videoRef.current?.seek(duration);
          }
        }}
        onBuffer={({isBuffering}) =>
          isBuffering ? setLoading(true) : setLoading(false)
        }
      />
      {loading && (
        <ActivityIndicator
          style={styles.loader}
          size={'large'}
          color={'#fff'}
        />
      )}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, {width: `${progress}%`}]} />
      </View>
      <View style={styles.absoluteWrap}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.paragraph} numberOfLines={2}>
          {item.description}
        </Text>
        <Pressable style={styles.playButton} onPress={() => setPause(!pause)}>
          {pause ? (
            <>
              <PlayIcon color="#fff" />
              <Text style={styles.buttonText}>Watch Now</Text>
            </>
          ) : (
            <>
              <Text style={styles.buttonText}>|| Pause</Text>
            </>
          )}
        </Pressable>
      </View>
      <View style={styles.iconFlex}>
        <View style={styles.iconCard}>
          <Pressable style={styles.icon}>
            <LoveIcon />
          </Pressable>
          <Text style={styles.iconText}>{item.likes}</Text>
        </View>
        <View style={styles.iconCard}>
          <Pressable style={styles.icon}>
            <FavoriteIcon />
          </Pressable>
          <Text style={styles.iconText}>{item.favorite}</Text>
        </View>
        <View style={styles.iconCard}>
          <Pressable style={styles.icon}>
            <ShareIcon />
          </Pressable>
          <Text style={styles.iconText}>{item.share}</Text>
        </View>
      </View>
    </Pressable>
  );
};
