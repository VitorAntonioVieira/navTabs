import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Info1({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Info 1</Text>
            <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <Text style={styles.label}>Ir para o Blog</Text>
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
    btn: {
        height: 50,
        width: 300,
        backgroundColor: 'tomato',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    label:{
        color: 'white',
        fontSize: 20
    }
});