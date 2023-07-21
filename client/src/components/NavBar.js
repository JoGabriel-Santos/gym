import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const NavButton = ({ iconName, screenName, currentScreen, onPress }) => (
    <TouchableOpacity
        style={styles.navbarItem}
        onPress={onPress}
    >
        <Ionicons
            name={iconName}
            color={currentScreen === screenName ? "#f9c22a" : "#BDBDBD"}
            size={25}
        />
    </TouchableOpacity>
);

const Navbar = () => {
    const navigation = useNavigation();

    const [currentScreen, setCurrentScreen] = useState("");

    useEffect(() => {
        return navigation.addListener("state", () => {
            const updatedScreen = navigation.getCurrentRoute()?.name;
            setCurrentScreen(updatedScreen);
        });
    }, [navigation]);

    return (
        <View style={[styles.navbar,
            currentScreen === "Welcome" || currentScreen === "Authentication" ? { display: "none" } : { display: "flex" }]}>
            <NavButton
                iconName="grid-outline"
                screenName="Home"
                currentScreen={currentScreen}
                onPress={() => navigation.navigate("Home")}
            />

            <NavButton
                iconName="barbell-outline"
                screenName="Groups"
                currentScreen={currentScreen}
                onPress={() => navigation.navigate("Groups")}
            />

            <NavButton
                iconName="card-outline"
                screenName="Payment"
                currentScreen={currentScreen}
                onPress={() => navigation.navigate("Payment")}
            />

            <NavButton
                iconName="person-outline"
                screenName="Profile"
                currentScreen={currentScreen}
                onPress={() => navigation.navigate("Profile")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        borderColor: "rgba(189,189,189,0.6)",
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "auto",
        padding: 10,
    },
    navbarItem: {
        padding: 10,
    },
});

export default Navbar;