import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

export const ShortsScreen = () => {
  const videos = [
    { id: '1', uri: 'https://www.example.com/video1.mp4' },
    { id: '2', uri: 'https://www.example.com/video2.mp4' },
    { id: '3', uri: 'https://www.example.com/video3.mp4' },
  ];
  
  return (
    <View>
      <View style={styles.videoContainer}>
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
      </View>
    </View>
  );
};
