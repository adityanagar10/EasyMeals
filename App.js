import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import {StatusBar, StyleSheet,View, Text, SafeAreaView,Platform } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Feed from './src/components/Feed';

export default function App() {
  return (
    <>
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
     <View style={styles.container}>
     <SearchBar />
      <Feed />
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
