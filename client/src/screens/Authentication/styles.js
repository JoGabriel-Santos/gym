import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    authView: {
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    header: {
        alignItems: "center",
    },
    authText: {
        color: "#333",
        fontFamily: "nunito-extraBold",
        fontSize: 35,
        marginVertical: 30,
    },
    sloganText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 20,
        maxWidth: "80%",
        textAlign: "center",
    },
    inputField: {
        gap: 20,
        marginVertical: 30,
    },
    forgotPasswordText: {
        alignSelf: "flex-end",
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 16,
    },
    signinButton: {
        backgroundColor: "#f9c22a",
        borderRadius: 100,
        marginVertical: 30,
        padding: 18,
    },
    signinText: {
        color: "white",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    signupButton: {
        padding: 10,
    },
    signupText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
        textAlign: "center",
    },
    loginAlternatives: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 40,
    },
    continueWithText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
        paddingBottom: 10,
        textAlign: "center",
    },
    loginButtons: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: "#ECECEC",
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

export default styles;