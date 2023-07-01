import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import ProfileImage from "../../components/ProfileImage";
import Groups from "../../components/Groups";

import * as API from "../../api/index";

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

    return (
        <View style={styles.homeView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userInformation}>
                        <Text style={styles.userName}>Olá {userInfo.name},</Text>
                        <Text style={styles.greeting}>Bom dia.</Text>
                    </View>
                </View>
            </View>

            <View style={styles.headerGroups}>
                <Text style={styles.headerGroupsText}>Turmas disponíveis</Text>

                <TouchableOpacity>
                    <Text style={styles.headerGroupsLink}>Ver todas</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerList}>
                <Groups/>
            </View>
        </View>
    );
};

export default Home;