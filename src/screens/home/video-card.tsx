import {useEffect, useRef, useState} from 'react';
import {Pressable, View, Text, Image} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import {styles} from './styles';

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
  const [playDuration, setPlayDuration] = useState(0);

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
          videoRef.current?.seek(0); // Reset video position
        }, 30000);
      }, 3000);
    } else {
      setShowImage(true);
      setPaused(true);
      videoRef.current?.seek(0); // Reset video when scrolled away
    }

    return () => {
      if (imageTimer) clearTimeout(imageTimer);
      if (videoTimer) clearTimeout(videoTimer);
    };
  }, [isPlaying]);

  // Handle progress for progress bar
  const handleProgress = (data: {
    currentTime: number;
    seekableDuration: number;
  }) => {
    if (data.seekableDuration > 0) {
      setProgress((data.currentTime / data.seekableDuration) * 100);
    }
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
          source={{uri: item?.video}}
          style={styles.backgroundVideo}
          resizeMode="cover"
          muted={false}
          repeat
          paused={!isPlaying || paused}
          ignoreSilentSwitch="ignore"
          onProgress={handleProgress}
          onLoad={() => videoRef.current?.seek(0)}
        />
      )}
      <View style={styles.absoluteWrap}>
        <View style={styles.flex}>
          <View style={styles.categoryCard}>
            <Text style={styles.categoryText}>New</Text>
          </View>
          <View style={styles.categoryCard}>
            <Text style={styles.categoryText}>Detective</Text>
          </View>
          <View style={styles.categoryCard}>
            <Text style={styles.categoryText}>Crime</Text>
          </View>
        </View>
        <Pressable style={styles.playButton} onPress={() => setPaused(!paused)}>
          <Text style={styles.buttonText}>Play</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
