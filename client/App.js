import React, { useEffect } from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "./src/screens/Home";
import Auth from "./src/screens/Auth";

const Stack = createStackNavigator();

const getUserInfo = async () => {
    const navigation = useNavigation();

    try {
        const userInfo = await AsyncStorage.getItem("userInfo");

        if (userInfo) {
            navigation.navigate("Home");

        } else {
            navigation.navigate("Auth");
        }

    } catch (error) {
        console.log("Error getting user information: ", error);
    }
};

function App() {
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                await getUserInfo();

            } catch (error) {
                console.log("Error in fetchUserInfo: ", error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={Auth}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;