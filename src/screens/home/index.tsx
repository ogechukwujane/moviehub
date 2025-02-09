import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {CategoryCard, MovieCard} from '../../components';
import {styles} from './styles';
import {getMovies} from '../../store/movie-api';
import {getCategoryColors, groupMoviesByCategory} from '../../utils';
import {VideoCard} from './video-card';
import {ChevronRightcon} from '../../../assets/svg';
import {useFocusEffect} from '@react-navigation/native';

export const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};
  const [movieArray, setMovieArray] = useState<any[]>();
  const [isScreenFocused, setIsScreenFocused] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setIsScreenFocused(true);
      return () => setIsScreenFocused(false);
    }, []),
  );
  useEffect(() => {
    getMovies().then(res => setMovieArray(res));
  }, []);

  useEffect(() => {
    getMovies().then(res => setMovieArray(res));
  }, []);

  const allMovies = useMemo(() => {
    if (movieArray && movieArray?.length > 0)
      return groupMoviesByCategory(movieArray);
    return {};
  }, [movieArray]);

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });
  const viewabilityConfigCallbackPairs = useRef([
    {onViewableItemsChanged: onViewableItemsChanged.current, viewabilityConfig},
  ]);

  return (
    <>
      {!movieArray ? (
        <ActivityIndicator size={40} color={'red'} style={styles.loader} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.heroSecrion}>
              <FlatList
                ref={flatListRef}
                data={movieArray.slice(0, 3)}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                viewabilityConfig={viewabilityConfig}
                viewabilityConfigCallbackPairs={
                  viewabilityConfigCallbackPairs.current
                }
                renderItem={({item, index}) =>
                  item ? (
                    <VideoCard
                      item={item}
                      isPlaying={isScreenFocused && index === currentIndex}
                    />
                  ) : null
                }
                scrollEventThrottle={16}
              />
              <View style={styles.paginationContainer}>
                {movieArray.slice(0, 3)?.map((_, index) => (
                  <View
                    key={index}
                    style={
                      index === currentIndex
                        ? styles.paginationDot
                        : styles.inactiveDot
                    }
                  />
                ))}
              </View>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.cardGrid}>
                <View style={styles.flexbox}>
                  <Text style={styles.title}>Most Trending</Text>
                  <ChevronRightcon />
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                  <View style={styles.Grid}>
                    {movieArray.slice(0, 5)?.map((item, index) => (
                      <MovieCard key={index} item={item} />
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View style={styles.cardGrid}>
                <View style={styles.flexbox}>
                  <Text style={styles.title}>By Category</Text>
                  <ChevronRightcon />
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                  <View style={styles.Grid}>
                    {Object.entries(allMovies ?? {}).map(
                      ([category], index) => (
                        <CategoryCard
                          category={category}
                          key={index}
                          color={getCategoryColors(category)}
                        />
                      ),
                    )}
                  </View>
                </ScrollView>
              </View>
              {Object.entries(allMovies ?? {}).map(
                ([category, items], index) => (
                  <View style={styles.cardGrid} key={index}>
                    <View style={styles.flexbox}>
                      <Text style={styles.title}>{category}</Text>
                      <ChevronRightcon />
                    </View>
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      horizontal>
                      <View style={styles.Grid}>
                        {items.map((item, index) => (
                          <MovieCard key={index} item={item} />
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                ),
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};
