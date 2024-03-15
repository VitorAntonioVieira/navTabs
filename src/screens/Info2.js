import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Info2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Info 2</Text>
            <Pressable styles={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.btnLabel}>Ir para o Blog</Text>
            </Pressable>
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
    button: {
        height: 50,
        width: 300,
        backgroundColor: 'tomato',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});