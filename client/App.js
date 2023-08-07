import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Authentication from "./src/screens/Authentication";
import Home from "./src/screens/Home";
import Groups from "./src/screens/Groups";
import Payment from "./src/screens/Payment";
import Profile from "./src/screens/Profile";
import Navbar from "./src/components/NavBar";
import configFonts from "./src/utils/configFonts";

const Stack = createStackNavigator();

function App() {
    const [fontsLoader] = useFonts(configFonts);

    return !fontsLoader ? null : (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}><Stack.Screen name="Authentication" component={Authentication}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Groups" component={Groups}/>
                <Stack.Screen name="Payment" component={Payment}/>
                <Stack.Screen name="Profile" component={Profile}/>

            </Stack.Navigator>

            <Navbar/>
        </NavigationContainer>
    )
}

export default App;