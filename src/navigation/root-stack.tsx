import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {BottomTabParams, BottomTabs} from './bottom-tab';

export type RootStackParams = {
  BottomStack: NavigatorScreenParams<BottomTabParams>;
};
const Stack = createNativeStackNavigator<RootStackParams>();

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomStack" component={BottomTabs} />
    </Stack.Navigator>
  );
}
