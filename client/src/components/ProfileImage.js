import React from "react";
import { Image, StyleSheet } from "react-native";

const ProfileImage = ({ imageUrl }) => {

    return (
        <Image style={styles.image} source={{ uri: imageUrl }}/>
    );
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 25,
        height: 50,
        marginRight: 10,
        width: 50,
    },
});

export default ProfileImage;