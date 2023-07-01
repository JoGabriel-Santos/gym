import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeView: {
        flex: 1
    },
    container: {
        alignItems: "center",
        backgroundColor: "#1C1C1E",
        paddingTop: StatusBar.currentHeight + 15,
        paddingVertical: 15,
    },
    containerList: {
        backgroundColor: "#1C1C1E",
        flex: 1,
        padding: 16,
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    userInformation: {
        flex: 1,
    },
    userName: {
        fontSize: 28,
        fontFamily: "dosis-bold",
        color: "#fff",
    },
    greeting: {
        fontSize: 22,
        fontFamily: "dosis-regular",
        color: "#fff",
    },
    groupList: {
        backgroundColor: "#f9f9f9",
        flex: 1
    },
    headerGroups: {
        alignItems: "baseline",
        backgroundColor: "#1C1C1E",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerGroupsText: {
        color: "#fff",
        fontSize: 24,
        fontFamily: "dosis-semiBold",
    },
    headerGroupsLink: {
        color: "#f9c22a",
        fontSize: 18,
        fontFamily: "dosis-semiBold",
    },
});

export default styles;