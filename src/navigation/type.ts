import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from './root-stack';
import {BottomTabParams} from './bottom-tab';

export type INavSetting = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams>,
  NativeStackNavigationProp<RootStackParams>
>;
