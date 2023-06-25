import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    authView: {
        backgroundColor: "#fff8ee",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginTop: StatusBar.currentHeight,
    },
    header: {
        alignItems: "center",
    },
    logoText: {
        color: "#333",
        fontFamily: "dosis-bold",
        fontSize: 35,
        marginVertical: 30,
    },
    sloganText: {
        fontFamily: "dosis-semiBold",
        fontSize: 25,
        textAlign: "center",
    },
    inputField: {
        marginVertical: 30,
    },
    forgotPasswordText: {
        alignSelf: "flex-end",
        color: "#333",
        fontFamily: "dosis-semiBold",
        fontSize: 16,
    },
    signinButton: {
        backgroundColor: "#f9c22a",
        borderRadius: 10,
        marginVertical: 30,
        padding: 20,
    },
    signinText: {
        color: "white",
        fontFamily: "dosis-bold",
        fontSize: 20,
        textAlign: "center",
    },
    signupButton: {
        padding: 10,
    },
    signupText: {
        color: "#333",
        fontFamily: "dosis-regular",
        fontSize: 20,
        textAlign: "center",
        marginBottom: StatusBar.currentHeight
    },
});

export default styles;