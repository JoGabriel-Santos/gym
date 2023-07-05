import React, { useState, useRef } from "react";
import { TextInput, View, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Input = ({ placeHolder, onChangeText, value }) => {
    const [focused, setFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const isPassword = placeHolder === "Senha";

    const animatedPlaceholder = useRef(new Animated.Value(value ? 1 : 0)).current;

    const handleTextChange = (text) => {
        onChangeText(text);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleInputFocus = () => {
        setFocused(true);
        Animated.timing(animatedPlaceholder, {
            toValue: 1,
            duration: 180,
            useNativeDriver: false,
        }).start();
    };

    const handleInputBlur = () => {
        if (!value) {
            setFocused(false);
            Animated.timing(animatedPlaceholder, {
                toValue: 0,
                duration: 180,
                useNativeDriver: false,
            }).start();
        }
    };

    const placeholderTranslateY = animatedPlaceholder.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -28],
    });

    const placeholderScale = animatedPlaceholder.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
    });

    const placeholderColor = animatedPlaceholder.interpolate({
        inputRange: [0, 1],
        outputRange: ["#999", "#f9c22a"],
    });

    return (
        <View style={styles.container}>
            <Animated.Text
                style={[
                    styles.placeholder,
                    {
                        transform: [{ translateY: placeholderTranslateY }],
                        fontSize: placeholderScale,
                        color: placeholderColor,
                    },
                ]}
            >
                {placeHolder}
            </Animated.Text>

            <TextInput
                style={styles.textInput}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleTextChange}
                secureTextEntry={!passwordVisible && isPassword}
                value={value}
            />

            {isPassword && (
                <Ionicons
                    name={passwordVisible ? "eye-off" : "eye"}
                    color="#888"
                    size={25}
                    style={styles.toggleButton}
                    onPress={togglePasswordVisibility}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        position: "relative",
    },
    textInput: {
        borderBottomColor: "#454242",
        borderBottomWidth: 1,
        color: "#fff",
        fontFamily: "dosis-regular",
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    placeholder: {
        fontFamily: "dosis-regular",
        left: 10,
        position: "absolute",
        top: 25,
    },
    toggleButton: {
        position: "absolute",
        right: 10,
        top: 24,
    },
});

export default Input;