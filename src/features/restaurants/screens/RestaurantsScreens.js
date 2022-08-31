import React from 'react'
import {StyleSheet, FlatList ,View} from 'react-native';
import RestaurantsInfo from "../components/RestaurantsInfo"
import { Spacer } from '../../../components/spacer.component';

export default function RestaurantsScreen() {
    return(
        <View style={styles.container}>
            <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantsInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow:1, 
        padding: "2%",
    }
})