import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Feed from './src/components/Feed';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <Feed />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
