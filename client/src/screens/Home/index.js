import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Home;