import React, {useState} from 'react'
import {StyleSheet, Text,View,SafeAreaView} from 'react-native'
import { Searchbar } from 'react-native-paper';

export default function SearchBar() {
    return(
        <View style={styles.container}>
            <Searchbar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow:0.1,
        padding: "2%",
        justifyContent: 'center'
    }
})