import React, {useRef, useState} from 'react';
import {Dimensions, Pressable, ScrollView, Text, View} from 'react-native';
import {MovieCard} from '../../components';
import {styles} from './styles';
import Carousel, {
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';

interface VideoItem {
  id: string;
  uri: string;
}

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

export const HomeScreen = () => {
  const carouselRef = useRef<Carousel<any>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {width: screenWidth} = Dimensions.get('window');

  const renderItem = (
    item: {
      item: (typeof ENTRIES1)[0];
      index: number;
    },
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return <View style={styles.videoContainer}></View>;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.heroSecrion}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth}
            data={ENTRIES1}
            renderItem={renderItem}
            hasParallaxImages={true}
            onSnapToItem={index => setCurrentIndex(index)}
          />
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
            <Pressable style={styles.playButton}>
              <Text style={styles.buttonText}>Play</Text>
            </Pressable>
            <Pagination
              dotsLength={ENTRIES1.length}
              activeDotIndex={currentIndex}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.paginationDot}
              inactiveDotStyle={styles.inactiveDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </View>
        <View>
          <View style={styles.contentContainer}>
            <View style={styles.cardGrid}>
              <Text style={styles.title}>Home</Text>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View style={styles.Grid}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                    <MovieCard key={item} />
                  ))}
                </View>
              </ScrollView>
            </View>
            <View style={styles.cardGrid}>
              <Text style={styles.title}>Home</Text>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View style={styles.Grid}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                    <MovieCard key={item} />
                  ))}
                </View>
              </ScrollView>
            </View>
            <View style={styles.cardGrid}>
              <Text style={styles.title}>Home</Text>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View style={styles.Grid}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                    <MovieCard key={item} />
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
