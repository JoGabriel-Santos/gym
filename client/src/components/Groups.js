import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import * as API from "../api";

const Groups = () => {
    const [groupList, setGroupList] = useState([]);

    console.log(groupList)

    const renderGroup = ({ item: group }) => (
        <TouchableOpacity>
            <View style={styles.itemContainer}>
                <Image style={styles.image} source={{ uri: group.image }} />

                <View style={styles.imageOverlay} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{group.name}</Text>
                    <Text style={styles.schedule}>{group.schedule}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );



    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const { data } = await API.fetchGroups();
                setGroupList(data);

            } catch (error) {
                console.log("An error occurred: ", error);
            }
        }

        fetchGroups();
    }, []);

    if (groupList.length === 0) {
        return <ActivityIndicator/>;
    }

    return (
        <FlatList
            data={groupList}
            renderItem={renderGroup}
            keyExtractor={groupInfo => groupInfo._id.toString()}
        />
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#fff",
        borderColor: "#f9c22a",
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        marginBottom: 16,
        height: 160, // Definindo a altura do cartão para 160 pixels
    },
    image: {
        borderRadius: 8,
        flex: 1,
        height: null,
        width: null,
        resizeMode: "cover", // Redimensionar a imagem para preencher o espaço
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject, // Preencher todo o espaço disponível na camada
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Cor escura com 30% de opacidade
        borderRadius: 8,
    },

    textContainer: {
        position: "absolute",
        bottom: 12,
        left: 12,
    },
    name: {
        fontSize: 25,
        fontFamily: "dosis-semiBold",
        color: "#f9c22a",
    },
    schedule: {
        fontSize: 18,
        color: "#fff",
        fontFamily: "dosis-regular",
    },
});


export default Groups;