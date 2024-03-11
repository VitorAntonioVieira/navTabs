import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Feed() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Home</Text>
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
    }
});