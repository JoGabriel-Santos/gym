import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    headerBackground: {
        height: 165,
        justifyContent: "flex-start",
        width: "100%",
    },
    profileImageView: {
        alignItems: "center",
        flex: 1,
        position: "relative",
    },
    profileImage: {
        borderRadius: 100,
        height: 110,
        position: "absolute",
        top: "64%",
        width: 110,
    },
    textContainer: {
        alignItems: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: "32%",
    },
    editText: {
        color: "#FFFFFF",
        fontFamily: "nunito-bold",
        fontSize: 22,
        textAlign: "center",
    },
    backButton: {
        left: 20,
        position: "absolute",
        top: "30%",
    },
    homeImage: {
        height: Dimensions.get("window").height / 2.5,
    },
    infoView: {
        alignItems: "center",
        gap: 10,
    },
    infoTitle: {
        color: "#333",
        fontFamily: "nunito-bold",
        fontSize: 24,
    },
    infoDescr: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
        maxWidth: "80%",
        textAlign: "center",
    },
    infoButtons: {
        gap: 10,
        marginTop: 40,
    },
    infoButton: {
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 16,
    },
    groupButton: {
        backgroundColor: "#f9c22a",
    },
    paymentButton: {
        borderColor: "#333",
        borderWidth: 1,
    },
    infoText: {
        fontFamily: "nunito-semiBold",
        fontSize: 22,
        textAlign: "center",
    },
    groupText: {
        color: "white",
    },
    paymentText: {
        color: "#333",
    },
});

export default styles;