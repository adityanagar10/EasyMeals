import React from 'react'
import {StyleSheet, Text,View} from 'react-native';
import styled from 'styled-components';

const FeedContainer = styled(View)`
    flex: 1;
    flexGrow:1;
    backgroundColor: #fff;
    padding: 2%;
    color: white;
`

export default function Feed() {
    return(
        <FeedContainer>
            <Text>Feed</Text>
        </FeedContainer>
    )
}
