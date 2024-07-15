import React from 'react';
// import BottomNavBar from './src/components/navigator';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/homeScreen';
// import MyTabs from './src/components/navigator';
import BottomNavBar from './src/components/navigator';

const App = () => {
  return (
    // <HomeScreen/>
    <NavigationContainer>
      {/* cutom bottom navigation bar */}
      <BottomNavBar/>
    </NavigationContainer>
  );
};


export default App;
