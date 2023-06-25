import React, { useState } from "react";
import { Text, TouchableOpacity, SafeAreaView, View } from "react-native";

import Input from "../../components/Input";

import styles from "./styles";

const Auth = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(true);

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
                    {
                        !isLoggingIn &&
                        <Input placeholder="Nome"/>
                    }
                    <Input placeholder="Email"/>
                    <Input placeholder="Senha"/>
                </View>

                {
                    isLoggingIn &&
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>
                            Esqueceu sua senha?
                        </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity style={styles.signinButton}>
                    <Text style={styles.signinText}>
                        {
                            isLoggingIn ? "Entrar" : "Criar conta"
                        }
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton} onPress={() => handleToggleIsLoggingIn()}>
                    <Text style={styles.signupText}>
                        {
                            isLoggingIn ? "Criar nova conta" : "Entrar em uma conta existente"
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default Auth;