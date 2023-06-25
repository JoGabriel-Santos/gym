import React from "react";
import { Text, TouchableOpacity, SafeAreaView, View } from "react-native";

import Input from "../../components/Input";

import styles from "./styles";

const Auth = () => {

    return (
        <SafeAreaView>
            <View style={styles.authView}>
                <View style={styles.header}>
                    <Text style={styles.logoText}>Corpo em Movimento</Text>
                    <Text style={styles.sloganText}>Musculação e Ginástica</Text>
                </View>

                <View style={styles.inputField}>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signinButton}>
                    <Text style={styles.signinText}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupText}>
                        Criar nova conta
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Auth;