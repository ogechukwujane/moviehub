import { useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import Video, { VideoRef } from "react-native-video";
import { styles } from "./styles";

export const VideoCard = ({item, isPlaying}: {item: IMovie; isPlaying: boolean}) => {
    const videoRef = useRef<VideoRef>(null);
    const [pause, setPause] = useState(false);
    const [progress, setProgress] = useState(0);
  
    const handleProgress = (data: {
      currentTime: number;
      seekableDuration: number;
    }) => {
      if (data.seekableDuration > 0) {
        setProgress((data.currentTime / data.seekableDuration) * 100);
      }
    };
  
    return (
      <View style={styles.videoContainer}>
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
          onLoad={() => console.log('Video Loaded:', item.video)}
        />
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, {width: `${progress}%`}]} />
        </View>
        <View style={styles.absoluteWrap}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.paragraph} numberOfLines={2}>
            {item.description}
          </Text>
          <Pressable style={styles.playButton} onPress={() => setPause(!pause)}>
            <Text style={styles.buttonText}>Watch Now</Text>
          </Pressable>
        </View>
        <View style={styles.iconFlex}>
          <View style={styles.iconCard}>
            <Pressable style={styles.icon}></Pressable>
            <Text style={styles.iconText}>{item.likes}</Text>
          </View>
          <View style={styles.iconCard}>
            <Pressable style={styles.icon}></Pressable>
            <Text style={styles.iconText}>{item.favorite}</Text>
          </View>
          <View style={styles.iconCard}>
            <Pressable style={styles.icon}></Pressable>
            <Text style={styles.iconText}>{item.share}</Text>
          </View>
        </View>
      </View>
    );
  };