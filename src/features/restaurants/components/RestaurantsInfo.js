import React from "react"
import { StyleSheet,Text, View,Image } from "react-native"
import {Card} from "react-native-paper"

export default function RestaurantsScreens({restaurant = {}}){
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2015%2F10%2FBeautiful-Food-Photos-25.jpg&f=1&nofb=1"
        ],
        address = "100 some random street",
       isOpenNow=true,
        rating= 4,
        isClosedTemporarily=false
    } = restaurant
   return(
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
        <Text>{name}</Text>
    </Card>
   )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
    },
    cover:{
        padding:20,backgroundColor:"white"
    }
})