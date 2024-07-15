// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RatingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>Welcome to your rating screen!</Text>
      {/* Add your UI components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RatingScreen;