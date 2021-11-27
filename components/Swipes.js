import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Swipeable  from "react-native-gesture-handler/Swipeable";
import SwipeableImage from './SwipeImage';
import { RectButton } from 'react-native-gesture-handler'


export default function Swipes({users, currentIndex, handleLike}){

    const renderLeftActions = () => {
        return(
        <RectButton style={styles.container}>
            <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
        </RectButton> )
    }
    const renderRighttActions = () => {
        return (
<RectButton style={styles.container}>
            <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
        </RectButton>
        )
        
    }

    return(
      <Swipeable
      friction={2}
      leftThreshold={40}
    rightThreshold={40}
    renderLeftActions={renderLeftActions}
    renderRighttActions={renderRighttActions}
    onSwipeableLeftOpen={handleLike}
      >
          <SwipeableImage user={users[currentIndex]} />
      </Swipeable>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})