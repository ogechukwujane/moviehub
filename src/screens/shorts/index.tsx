import React, {useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useGetMoviesQuery} from '../../store/movie-api';
import {VideoCard} from './video-card';

export const ShortsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 80};
  const {data, isLoading} = useGetMoviesQuery();

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <VideoCard item={item} isPlaying={index === currentIndex} />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};
