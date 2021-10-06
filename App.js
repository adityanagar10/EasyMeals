import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import {StatusBar, StyleSheet,View, Text, SafeAreaView,Platform } from 'react-native';
import SearchBar from './src/components/SearchBar';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreens';
export default function App() {
  return (
    <>
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
     <View style={styles.container}>
     <SearchBar />
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
     </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
