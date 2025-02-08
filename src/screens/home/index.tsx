import React, {useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {CategoryCard, MovieCard} from '../../components';
import {styles} from './styles';
import {useGetMoviesQuery} from '../../store/movie-api';
import {getCategoryColors, groupMoviesByCategory} from '../../utils';
import {VideoCard} from './video-card';

export const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {data, isLoading} = useGetMoviesQuery();
  const flatListRef = useRef<FlatList<any>>(null);
  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};

  const allMovies = useMemo(() => {
    if (data && !isLoading) return groupMoviesByCategory(data);
    return {};
  }, [data, isLoading]);

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    console.log('viewableItems', viewableItems);

    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const safeData = Array.isArray(data) ? data : [];

  console.log('isLoading',isLoading);
  console.log('data',data);
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoading ? (
        <ActivityIndicator size={40} color={'red'} />
      ) : (
        <View style={styles.container}>
          <View style={styles.heroSecrion}>
            <FlatList
              ref={flatListRef}
              data={safeData}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={onViewableItemsChanged.current}
              viewabilityConfig={viewabilityConfig}
              renderItem={({item, index}) =>
                item ? (
                  <VideoCard item={item} isPlaying={index === currentIndex} />
                ) : null
              }
              scrollEventThrottle={16}
            />
            <View style={styles.paginationContainer}>
              {data?.map((_, index) => (
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
          <View>
            <View style={styles.contentContainer}>
              <View style={styles.cardGrid}>
                <Text style={styles.title}>By Category</Text>
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
                    <Text style={styles.title}>{category}</Text>
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
        </View>
      )}
    </ScrollView>
  );
};
