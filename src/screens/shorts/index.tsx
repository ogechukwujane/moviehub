import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getMovies} from '../../store/movie-api';
import {VideoCard} from './video-card';
import {RouteProp, useFocusEffect} from '@react-navigation/native';
import {BottomTabParams} from '../../navigation/bottom-tab';

type ShortsScreenProp = {
  route: RouteProp<BottomTabParams, 'ShortScreen'>;
};

export const ShortsScreen: FC<ShortsScreenProp> = ({route}) => {
  const playedMovie = route.params?.data;
  const duration = route.params?.duration;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 80};
  const [movieArray, setMovieArray] = useState<IMovie[]>();
  const [isScreenFocused, setIsScreenFocused] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setIsScreenFocused(true);
      return () => setIsScreenFocused(false);
    }, []),
  );
  useEffect(() => {
    getMovies().then(res => setMovieArray(res as IMovie[]));
  }, []);
  
  useEffect(() => {
    if (playedMovie) {
      setMovieArray(prev => {
        const filteredMovies = prev?.filter(movie => movie.id !== playedMovie.id) || [];
        return [playedMovie, ...filteredMovies];
      });
    }
  }, [playedMovie]);

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  console.log('d,,,,', currentIndex);
  console.log('mmmm,,,,', movieArray);
  console.log('playedMovie,,,,', playedMovie);


  return (
    <View>
      <FlatList
        data={movieArray}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <VideoCard
            item={item}
            isPlaying={isScreenFocused && index === currentIndex}
            duration={duration ?? 0}
          />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};
