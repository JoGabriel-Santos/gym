import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    authView: {
        backgroundColor: "#fff8ee",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginTop: StatusBar.currentHeight
    },
    header: {
        alignItems: "center",
    },
    logoText: {
        color: "#333",
        fontFamily: "poppins-bold",
        fontSize: 30,
        marginVertical: 30,
    },
    sloganText: {
        fontFamily: "poppins-semiBold",
        fontSize: 20,
        textAlign: "center",
    },
    inputField: {
        marginVertical: 30,
    },
    forgotPasswordText: {
        alignSelf: "flex-end",
        color: "#333",
        fontFamily: "poppins-semiBold",
        fontSize: 14,
    },
    signinButton: {
        backgroundColor: "#f9c22a",
        borderRadius: 10,
        marginVertical: 30,
        padding: 20,
    },
    signinText: {
        color: "white",
        fontFamily: "poppins-bold",
        fontSize: 20,
        textAlign: "center",
    },
    signupButton: {
        padding: 10,
    },
    signupText: {
        color: "#333",
        fontFamily: "poppins-regular",
        fontSize: 18,
        marginBottom: StatusBar.currentHeight,
        textAlign: "center",
    },
});

export default styles;