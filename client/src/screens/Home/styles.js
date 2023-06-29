import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeView: {
        flex: 1
    },
    container: {
        alignItems: "center",
        backgroundColor: "#fff8ee",
        paddingTop: StatusBar.currentHeight + 15,
        paddingVertical: 15,
    },
    containerList: {
        backgroundColor: "#fff8ee",
        flex: 1,
        padding: 16,
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    userInformation: {
        flex: 1,
    },
    userName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    groupList: {
        backgroundColor: "#f9f9f9",
        flex: 1
    }
});

export default styles;