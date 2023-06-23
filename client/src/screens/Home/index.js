import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import NavBar from "../../components/NavBar";
import ProfileImage from "../../components/ProfileImage";

const Home = () => {
    const [activeButton, setActiveButton] = useState("Home");

    const handleButtonPress = (buttonName) => {
        setActiveButton(buttonName);
    };

    const user = {
        name: "João Gabriel",
        imageUrl: "https://avatars.githubusercontent.com/u/99566656?v=4",
    };

    return (
        <View style={styles.homeView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userInformation}>
                        <Text style={styles.userName}>Welcome, {user.name}</Text>
                    </View>

                    <ProfileImage imageUrl={user.imageUrl}/>
                </View>
            </View>

            <View style={styles.groupList}>
                <Text>Group List</Text>
            </View>

            <NavBar activeButton={activeButton} onButtonPress={handleButtonPress}/>
        </View>
    );
};

export default Home;