import React from 'react'
import {StyleSheet, Text,View} from 'react-native';
import RestaurantsInfo from "../components/RestaurantsInfo"

export default function RestaurantsScreen() {
    return(
        <View style={styles.container}>
            <RestaurantsInfo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow:1, 
        backgroundColor: 'blue',
        padding: "2%",
    }
})