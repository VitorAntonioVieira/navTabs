import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import styled, { keyframes } from "styled-components";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import About from "../screens/About";
import Blog from "../screens/Blog";
import Info1 from "../screens/Info1";
import Info2 from "../screens/Info2";

// const OpenContainer = styled.div`
//     width: 100vw;
//     height: 100vh;
//     background-color: '#1c1c1a';
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     div.logo-separated{
//         width: 30vw;
//     }
// `;

// const OpenFunction = () => {
//     return (
//         <OpenContainer>
//             <img src="" />
//         </OpenContainer>
//     )
// }

// const Open = OpenFunction();

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator
            initialRouteName="Início"
            screenOptions={{
                tabBarActiveTintColor: "#1e62a9",
                tabBarInactiveTintColor: "#ccc",
                headerTransparent: true,
                headerTitle: '',
            }}
        >
            <Drawer.Screen
                name="Início"
                component={TabBottomRoutes}
                options={{
                    drawerLabel: "Início",
                    drawerIcon: ({ size, color }) => {
                        return <Ionicons
                            size={size}
                            color={color}
                            name="home" />
                    }
                }}
            />
            <Drawer.Screen
                name="Blog"
                component={NativeStackRoutes}
                options={{
                    drawerLabel: "Blog",
                    drawerIcon: ({ size, color }) => {
                        return <Ionicons
                            size={size}
                            color={color}
                            name="at" />
                    }
                }}
            />
        </Drawer.Navigator >
    )
};

const TabBottom = createBottomTabNavigator();

const TabBottomRoutes = () => {
    return (
        <TabBottom.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#1e62a9',
                tabBarInactiveTintColor: '#ccc',
                headerShown: false
            }}>
            <TabBottom.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) { return (<Ionicons name='home' color={color} size={size} />) }
                        else { return (<Ionicons name='home-outline' color={color} size={size} />) }
                    }
                }} />
            <TabBottom.Screen
                name='Feed'
                component={Feed}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) { return (<Ionicons name='browsers' color={color} size={size} />) }
                        else { return (<Ionicons name='browsers-outline' color={color} size={size} />) }
                    },
                }}
            />
            <TabBottom.Screen
                name='About'
                component={About}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) { return (<Ionicons name='information-circle' color={color} size={size} />) }
                        else { return (<Ionicons name='information-circle-outline' color={color} size={size} />) }
                    },
                }}
            />
        </TabBottom.Navigator>
    )
};

const Stack = createNativeStackNavigator();

const NativeStackRoutes = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Blog"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="Blog"
                component={Blog}
            />
            <Stack.Screen
                name="Info 1"
                component={Info1}
            />
            <Stack.Screen
                name="Info 2"
                component={Info2}
            />
        </Stack.Navigator>
    )
};
