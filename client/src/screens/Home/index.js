import React, { useCallback, useState } from "react";
import { Image, ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as API from "../../api/index";
import styles from "./styles";

const Home = () => {
    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = useCallback(() => {
        const getUserInfo = async () => {
            try {
                const user = await AsyncStorage.getItem("userInfo");
                if (user) {
                    const userInfoJSON = JSON.parse(user);
                    setUserInfo(userInfoJSON);

                } else {
                    navigation.navigate("Welcome");
                }

            } catch (error) {
                console.log("An error occurred: ", error);
            }
        };

        getUserInfo();
    }, [navigation]);

    // useFocusEffect(fetchUserInfo);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>

            <ImageBackground
                source={require("../../utils/images/header-bg.png")}
                style={styles.headerBackground}
                resizeMode="cover"
            >
                <View style={styles.profileImageView}>
                    <Image
                        source={!userInfo?.photo && require("../../utils/images/profile.jpg")}
                        style={styles.profileImage}
                    />
                </View>

                <View style={styles.textContainer}>
                    {userInfo && (<Text style={styles.editText}>Hello, {userInfo.name}!</Text>)}
                </View>
            </ImageBackground>

            <ImageBackground
                source={require("../../utils/images/welcome-logo.png")}
                style={styles.homeImage}
                resizeMode="contain"
            />

            <View style={styles.infoView}>
                <Text style={styles.infoTitle}>Pronto para começar a malhar?</Text>
                <Text style={styles.infoDescr}>Verifique as turmas disponíveis ou consulte suas mensalidades</Text>
            </View>

            <View style={styles.infoButtons}>
                <TouchableOpacity
                    style={[styles.infoButton, styles.groupButton]}
                    onPress={() => navigation.navigate("Groups")}
                >
                    <Text style={[styles.infoText, styles.groupText]}>
                        Turmas disponíveis
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.infoButton, styles.paymentButton]}
                    onPress={() => navigation.navigate("Payment")}
                >
                    <Text style={[styles.infoText, styles.paymentText]}>
                        Consultar mensalidades
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default Home;