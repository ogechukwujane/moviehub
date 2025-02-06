import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {MovieCard} from '../../components';
import {styles} from './styles';

export const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
    </ScrollView>
  );
};
