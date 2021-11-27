import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default function SwipeableImage({ user, willLike, willPass }){
    return (
        <View>
            <Image source={{ uri: user.picture.large }} style={styles.photo}/>
            {willLike && (
                <View style={styles.likeBox}><Text style={{...styles.textPrimary, color:'#64edcc'}}>Liked!</Text></View>
            )}
             {willPass && (
                <View style={styles.passBox}><Text style={{...styles.textPrimary, color:'#f06795'}}>NOPE!</Text></View>
            )}
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{user.name.first}</Text>
                    <Text style={[styles.textSeconday, styles.textShadow]}>{user.dob.age}</Text>
                </View>
                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
                    <Text style={[styles.textSeconday, styles.textShadow]}>{user.location.city}</Text>
                </View>
            </View>
        </View>
    )
}


const boxStyle = {
    position: 'absolute',
    top: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderRadius: 10,
}

const styles = StyleSheet.create({
    likeBox: {
        ...boxStyle,
        left: 40,
        borderColor: '#64edcc'
    },
    passBox: {
        ...boxStyle,
        right: 40,
        borderColor: '#f06795'
    },
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