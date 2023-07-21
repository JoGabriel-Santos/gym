import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../../components/Input";
import styles from "./styles";

const Profile = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("");

    const handleNameChange = (text) => {
        setName(text);
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("userInfo");
            navigation.navigate("Welcome")

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor="rgba(0,0,0,0.50)" barStyle="light-content" translucent={true}/>

                <ImageBackground
                    source={require("../../utils/images/header-bg.png")}
                    style={styles.headerBackground}
                    resizeMode="cover"
                >
                    <View style={styles.profileImageView}>
                        <Image
                            source={require("../../utils/images/profile.jpg")}
                            style={styles.profileImage}
                        />


                    </View>

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Ionicons
                            name={"arrow-back-outline"}
                            color={"white"}
                            size={30}
                        />
                    </TouchableOpacity>

                    <View style={styles.textContainer}>
                        <Text style={styles.editText}>Editar perfil</Text>
                    </View>

                    <View style={styles.viewSaveButton}>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveText}>
                                Salvar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={styles.containerEdit}>
                    <View style={styles.inputField}>
                        <Input placeHolder="Name" onChangeText={handleNameChange} value={name}/>
                    </View>
                </View>

                <View style={styles.viewButtons}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonLogout]}
                        onPress={logout}
                    >
                        <Text style={[styles.buttonTextLogout, styles.buttonText]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;