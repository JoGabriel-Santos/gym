import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: "#f9c22a",
        borderRadius: 8,
        paddingVertical: 15,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonToggleView: {
        alignItems: "flex-end",
    },
    buttonToggle: {
        color: "#333",
        fontSize: 16,
        paddingVertical: 15,
    },
    input: {
        borderColor: "#333",
        borderRadius: 8,
        borderWidth: 1,
        height: 50,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default styles;