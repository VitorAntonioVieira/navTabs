import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Home</Text>
            <Image style={styles.logo} source={require('../assets/img/sesi-senai.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#222222'
    },
    logo: {
        flex: 0.1,
        width: '60%',
        height: 'auto',
        resizeMode: 'contain'
    }
});