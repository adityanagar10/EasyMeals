import React, {useState} from 'react'
import {StyleSheet, Text,View,SafeAreaView} from 'react-native'
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";


const SearchContainer = styled(View)`
        flex: 1;
        flexGrow:0.1;
        padding: 2%;
        justifyContent: center;
`;


export default function SearchBar() {
    return(
        <SearchContainer >
            <Searchbar placeholder='Find Restaurants near you'/>
        </SearchContainer>
    )
}

