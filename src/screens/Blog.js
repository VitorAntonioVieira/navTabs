import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Info 1")}
            >
                <Text style={styles.label}>Info 1</Text>
            </Pressable><Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Info 2")}
            >
                <Text style={styles.label}>Info 2</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: 'tomato',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'white',
        fontSize: 20
    }
});