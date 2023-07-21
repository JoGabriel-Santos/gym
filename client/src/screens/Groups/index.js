import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Groups = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.groupsHeader}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Ionicons
                            name={"arrow-back-outline"}
                            color={"#333"}
                            size={30}
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Groups</Text>
                </View>
            </View>

            <Groups/>
        </SafeAreaView>
    )
};

export default Groups;