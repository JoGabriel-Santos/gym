import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const NavBar = ({ activeButton, onButtonPress }) => {
    const buttons = [{ name: 'Home' }, { name: 'Groups' }, { name: 'Payment' }, { name: 'Profile' },];

    return (
        <View style={styles.container}>
            {
                buttons.map((button) => (
                    <TouchableOpacity
                        key={button.name}
                        style={[styles.button, activeButton === button.name && styles.activeButton]}
                        onPress={() => onButtonPress(button.name)}
                    >
                        <Text style={[styles.buttonText, activeButton === button.name && styles.activeButtonText]}>
                            {button.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        flexDirection: "row",
        height: 60,
        justifyContent: "space-around",
    },
    activeButton: {
        backgroundColor: "#f9c22a",
    },
    activeButtonText: {
        color: "#fff",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        flex: 1,
        height: "100%",
        justifyContent: "center",
    },
    buttonText: {
        color: "#333",
        fontSize: 16,
    }
});

export default NavBar;