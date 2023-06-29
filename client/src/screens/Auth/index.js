import React, { useState } from "react";
import { Text, TouchableOpacity, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Input from "../../components/Input";

import * as API from "../../api/index";

import styles from "./styles";

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(true);

    const navigation = useNavigation();

    const handleAuthentication = async () => {
        const userInfo = { name, email: "jgabriel.personal@gmail.com", password: "pass" };

        if (isLoggingIn) {
            const { data } = await API.signin(userInfo);
            await AsyncStorage.setItem("userInfo", JSON.stringify(data.result));

        } else {
            const { data } = await API.signup(userInfo);
            await AsyncStorage.setItem("userInfo", JSON.stringify(data.result));
        }

        navigation.navigate("Home");
    }

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleToggleIsLoggingIn = () => {
        setIsLoggingIn(prevIsLoggingIn => !prevIsLoggingIn);
    }

    return (
        <SafeAreaView>
            <View style={styles.authView}>
                <View style={styles.header}>
                    <Text style={styles.logoText}>Corpo em Movimento</Text>
                    <Text style={styles.sloganText}>Musculação e Ginástica</Text>
                </View>

                <View style={styles.inputField}>
                    {!isLoggingIn &&
                        <Input placeHolder="Nome" onChangeText={handleNameChange} value={name}/>}
                    <Input placeHolder="Email" onChangeText={handleEmailChange} value={email}/>
                    <Input placeHolder="Senha" onChangeText={handlePasswordChange} value={password}/>
                </View>

                {
                    isLoggingIn &&
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>
                            Esqueceu sua senha?
                        </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity style={styles.signinButton} onPress={() => handleAuthentication()}>
                    <Text style={styles.signinText}>
                        {isLoggingIn ? "Entrar" : "Criar conta"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton} onPress={() => handleToggleIsLoggingIn()}>
                    <Text style={styles.signupText}>
                        {isLoggingIn ? "Criar nova conta" : "Entrar em uma conta existente"}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default Auth;