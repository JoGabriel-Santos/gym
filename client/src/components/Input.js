import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Input = ({ placeHolder, onChangeText, value }) => {
    const [focused, setFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const isPassword = placeHolder === "Senha";

    const handleTextChange = (text) => {
        onChangeText(text);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.textInput, focused && styles.focused]}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                placeholder={placeHolder}
                placeholderTextColor={"#999"}
                onChangeText={handleTextChange}
                value={value}
                secureTextEntry={!passwordVisible && isPassword}
            />

            {
                isPassword && (
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={togglePasswordVisibility}
                    >
                        <Ionicons
                            name={passwordVisible ? 'eye-off' : 'eye'}
                            size={25}
                            color="#888"
                        />
                    </TouchableOpacity>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    textInput: {
        backgroundColor: "#fff",
        borderColor: "#888",
        borderRadius: 10,
        borderWidth: 1,
        fontFamily: "dosis-regular",
        fontSize: 24,
        padding: 18,
        marginVertical: 10,
    },
    focused: {
        borderColor: "#f9c22a",
        borderWidth: 1,
    },
    toggleButton: {
        position: "absolute",
        right: 15,
        top: "50%",
        transform: [{ translateY: -12 }],
    },
});

export default Input;