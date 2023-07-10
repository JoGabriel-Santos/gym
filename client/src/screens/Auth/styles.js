import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    authView: {
        backgroundColor: "#1C1C1E",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    header: {
        alignItems: "center",
    },
    logoText: {
        color: "#fff",
        fontFamily: "dosis-bold",
        fontSize: 35,
        marginVertical: 30,
    },
    sloganText: {
        color: "#fff",
        fontFamily: "dosis-semiBold",
        fontSize: 25,
        textAlign: "center",
    },
    inputField: {
        marginVertical: 30,
    },
    forgotPasswordText: {
        alignSelf: "flex-end",
        color: "#f9c22a",
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
        color: "#f9c22a",
        fontFamily: "dosis-regular",
        fontSize: 20,
        textAlign: "center",
    },
});

export default styles;