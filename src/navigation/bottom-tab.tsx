import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  RewardScreen,
  ShortsScreen,
} from '../screens';
import {HomeIcon, ShortsIcon, RewardIcon, ProfileIcon} from '../../assets/svg';

export type BottomTabParams = {
  HomeScreen: undefined;
  ShortScreen: {data: IMovie; duration: number} | undefined;
  RewardScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown: false,
        tabBarActiveTintColor: '#F30745',
        tabBarInactiveTintColor: '#999999',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <HomeIcon color={focused ? '#F30745' : '#999999'} />
          ),
        }}
      />
      <Tab.Screen
        name="ShortScreen"
        component={ShortsScreen}
        options={{
          tabBarLabel: 'Shorts',
          tabBarIcon: ({focused}) => (
            <ShortsIcon color={focused ? '#F30745' : '#999999'} />
          ),
        }}
      />
      <Tab.Screen
        name="RewardScreen"
        component={RewardScreen}
        options={{
          tabBarLabel: 'Reward',
          tabBarIcon: ({focused}) => (
            <RewardIcon color={focused ? '#F30745' : '#999999'} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <ProfileIcon color={focused ? '#F30745' : '#999999'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
