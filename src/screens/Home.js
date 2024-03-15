import { useEffect, useRef, useState } from "react";
import { Animated, View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";

export default function Home({ navigation }) {
    const [progress] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.spring(progress, { toValue: 1, useNativeDriver: true, duration: 2000 }),
                // Animated.spring(scale, { toValue: 1, useNativeDriver: true })
            ]).start()
        );
    }, []);

    return (
        <ScrollView style={styles.h_container} >
            <Pressable style={styles.logOutBtn}>
                <Text style={styles.logLabel}>Log Out</Text>
            </Pressable>
            <Image source={require('../assets/img/components/app-wave.png')} />
            <View style={styles.homePanel}>
                <Text style={styles.homeTitle}>Bem-vindo ao FIRST APP</Text>
                <Text style={styles.homeSubtitle}>Inspirando jovens pelo mundo todo!</Text>
            </View>
            <Animated.Image
                style={[styles.animatedLogo,
                {
                    transform: [
                        {
                            rotate: progress.interpolate({
                                inputRange: [0.5, 1],
                                outputRange: ['180deg', '360deg']
                            })
                        }
                    ]
                }]}
                source={require('../assets/img/first-logos/first-brand-separate-elements-artwork-files/SeparateElements/Icon/TM/RGB/FIRSTicon_RGB_withTM.png')}
                resizeMode="contain"
            />
            <View style={styles.section}>
                <View style={styles.sectionDiv}>
                    <Text style={styles.txtTitle}>
                        O que é a FIRST?
                    </Text>
                    <Text style={styles.txtContent}>
                        Fundada em 1989 pelo inventor Dean Kamen, a FIRST® é uma organização global sem fins lucrativos que prepara os jovens para o futuro através de um conjunto de programas de robótica para jovens que mudam a sua vida e que desenvolvem competências, confiança e resiliência.
                    </Text>
                    <Pressable style={styles.link} onPress={() => { navigation.navigate('About') }}>
                        <Text style={styles.linkLabel}>
                            Conheça Missão, Visão e Valores
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.sectionDiv}>
                    <Text style={styles.txtTitle}>
                        Impacto
                    </Text>
                    <View style={styles.grid}>
                        <View style={styles.gridComp}>
                            <Text style={styles.gridTitle}>
                                Impacto
                            </Text>
                            <Image style={styles.gridIcon} />
                            <Text style={styles.gridCompTitle}>Lorem</Text>
                            <Text style={styles.gridCompText}>

                            </Text>
                        </View>
                        <View style={styles.gridComp}>
                            <Image style={styles.gridIcon} />
                            <Text style={styles.gridCompTitle}>Lorem</Text>
                            <Text style={styles.gridCompText}>

                            </Text>
                        </View>
                        <View style={styles.gridComp}>
                            <Image style={styles.gridIcon} />
                            <Text style={styles.gridCompTitle}>Lorem</Text>
                            <Text style={styles.gridCompText}>

                            </Text>
                        </View>
                        <Pressable style={styles.link} onPress={() => { navigation.navigate('Feed') }}>
                            <Text style={styles.linkLabel}>
                                Veja alguns relatos
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    h_container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 0
    },
    logOutBtn: {
        position: 'absolute',
        height: 45,
        width: 80,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        top: 50, left: 300
    },
    homePanel: {
        flex: 1,
        position: 'absolute',
        top: 50,
        left: 20,
        justifyContent: 'space-between',
        paddingTop: 100
    },
    homeTitle: {
        fontSize: 50,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 20
    },
    homeSubtitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '300'
    },
    animatedLogo: {
        position: 'relative',
        width: 400,
        left: 150,
        top: -250,
    },
    section: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        top: -260,
    },
    sectionDiv: {
        width: 350,
        marginBottom: 50
    },
    txtTitle: {
        color: '#0166b3',
        fontSize: 25,
        fontWeight: 'bold',
    },
    txtContent: {
        textAlign: 'justify',
        fontSize: 17,
        marginTop: 20
    },
    link: {
        marginTop: 15
    },
    linkLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0166b3'
    },
    grid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    gridComp: {

    },
    gridCompIcon: {
        width: 100,
    },
    gridCompTitle: {
        fontSize: 18,
        color: '#0166b3'
    },
    gridCompText: {
        fontSize: 16,
    }
});