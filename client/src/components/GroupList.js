import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import * as API from "../api";

const GroupList = () => {
    const [groupList, setGroupList] = useState([]);

    const renderGroup = ({ item: group }) => (
        <TouchableOpacity style={styles.container}>
            <View style={styles.itemContainer}>
                <Image style={styles.image} source={{ uri: group.image }}/>

                <View style={styles.imageOverlay}/>
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
            style={styles.groupsContainer}
            data={groupList}
            renderItem={renderGroup}
            keyExtractor={groupInfo => groupInfo._id.toString()}
        />
    )
};

const styles = StyleSheet.create({
    groupsContainer: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    itemContainer: {
        backgroundColor: "#fff",
        borderColor: "#f9c22a",
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        marginBottom: 16,
        height: 160,
    },
    image: {
        borderRadius: 8,
        flex: 1,
        height: null,
        width: null,
        resizeMode: "cover",
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 8,
    },

    textContainer: {
        position: "absolute",
        bottom: 12,
        left: 12,
    },
    name: {
        fontSize: 25,
        fontFamily: "nunito-semiBold",
        color: "#f9c22a",
    },
    schedule: {
        fontSize: 18,
        color: "#fff",
        fontFamily: "nunito-regular",
    },
});


export default GroupList;