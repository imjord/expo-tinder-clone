import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';


export default function Swipes({ user }){
    return (
        <View>
            <Image source={{ uri: user.picture.large }} style={styles.photo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    }
})