import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import {StatusBar, StyleSheet,View, Text, SafeAreaView,Platform } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {theme} from './src/theme'
import SearchBar from './src/components/SearchBar';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreens';

// Importing Fonts

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';


export default function App() {

  // Defining fonts

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
     <View style={styles.container}>
     <SearchBar />
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
     </View>
    </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
