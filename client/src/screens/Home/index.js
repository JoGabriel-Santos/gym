import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import NavBar from "../../components/NavBar";
import ProfileImage from "../../components/ProfileImage";

import styles from "./styles";

const Home = () => {
    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const user = await AsyncStorage.getItem("userInfo");
                if (user) {
                    const userInfoJSON = JSON.parse(user);
                    setUserInfo(userInfoJSON);
                }

            } catch (error) {
                console.log("An error occurred: ", error);
            }
        };

        fetchUserInfo();
    }, []);

    const [activeButton, setActiveButton] = useState("Home");

    const handleButtonPress = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <View style={styles.homeView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userInformation}>
                        <Text style={styles.userName}>Welcome, {userInfo.name}</Text>
                    </View>

                    <ProfileImage imageUrl={userInfo.photo}/>
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