import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';


export default function Swipes({ user }){
    return (
        <View>
            <Image source={{ uri: user.picture.large }} style={styles.photo}/>
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{user.name.first}</Text>
                    <Text style={[styles.textSeconday, styles.textShadow]}>{user.dob.age}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={[styles.textSeconday, styles.textShadow]}>{user.location.city}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    textContainer: {
        position: "absolute",
        bottom: 20,
        left: 20
    },
    textRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    textPrimary: {
        color: 'white',
        fontSize: 25,
       fontWeight: 'bold'
    },
    textSeconday: {
        color: 'white',
        fontSize: 25,
        marginLeft: 10
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1},
        textShadowRadius: 10,
    }
})