import React from 'react'
import {StyleSheet, Text,View} from 'react-native';

export default function SearchBar() {
    return(
        <View style={styles.container}>
            <Text>hungry?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow:0.1,
        backgroundColor: 'green',
        padding: "2%",
        justifyContent: 'center'
    }
})