import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={input => setEmail(input)}
                placeholder="Email"
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
            ></TextInput>

            <TextInput
                style={styles.input}
                onChangeText={input => setPassword(input)}
                placeholder="Password"
                value={password}
                secureTextEntry
            ></TextInput>

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonToggleView}>
                <Text style={styles.buttonToggle}>Don't have an account?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Auth;