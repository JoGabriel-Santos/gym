import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ ...placeHolder }) => {
    const [focused, setFocused] = useState(false);

    return (
        <TextInput
            style={[styles.textInput, focused && styles.focused]}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            placeholderTextColor={"#333"}

            {...placeHolder}
        />
    )
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#fff",
        borderColor: "#888",
        borderRadius: 10,
        borderWidth: 1,
        fontFamily: "dosis-regular",
        fontSize: 20,
        padding: 15,
        marginVertical: 10,
    },
    focused: {
        borderColor: "#f9c22a",
        borderWidth: 2,
    }
});

export default Input;