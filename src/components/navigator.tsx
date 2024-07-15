import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType } from 'react-native';
import HomeScreen from '../screens/homeScreen';
import AimScreen from '../screens/aimScreen';
import RatingScreen from '../screens/ratingScreen';
import SavingScreen from '../screens/savingScreen';
import Settings from '../screens/settingsScreen';

type TabBarIconProps = {
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

function BottomNavBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"

      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          backgroundColor: '#0e1339',
          paddingBottom: 10,
          minHeight: 60
        }
      }}

    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}

        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <Image
              source={require('../assets/home.png') as ImageSourcePropType}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Aim"
        component={AimScreen}
        options={{
          tabBarLabel: 'Goal',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <Image
              source={require('../assets/aim.png') as ImageSourcePropType}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Rating"
        component={RatingScreen}
        options={{
          tabBarLabel: 'Rating',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <Image
              source={require('../assets/increase.png') as ImageSourcePropType}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saving"
        component={SavingScreen}
        options={{
          tabBarLabel: 'Saving',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <Image
              source={require('../assets/saving.png') as ImageSourcePropType}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <Image
              source={require('../assets/settings.png') as ImageSourcePropType}
              style={{ width: size, height: size, tintColor: color }}
            />

          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavBar;


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/homeScreen';
// import Settings from '../screens/settingsScreen';

// const Tab = createBottomTabNavigator();

// export default function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={Settings} />
//     </Tab.Navigator>
//   );
// }