import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import * as API from "../api";

const data = [
    {
        id: 1,
        image: require('../utils/images/gym-img.jpg'),
        name: 'Grupo 1',
        schedule: 'Segunda e Quarta, 18:00 - 19:00',
        instructor: 'João Silva',
        description: 'Treinamento funcional para fortalecimento e condicionamento',
        max_capacity: 15
    },
    {
        id: 2,
        image: require('../utils/images/gym-img.jpg'),
        name: 'Grupo 2',
        schedule: 'Terça e Quinta, 19:00 - 20:00',
        instructor: 'Maria Souza',
        description: 'Aulas de dança para todos os níveis',
        max_capacity: 20
    },
    // Adicione mais grupos aqui
];

const Groups = () => {
    const [groupList, setGroupList] = useState([]);

    const renderGroup = ({ item: group }) => (
        <TouchableOpacity>
            <View style={styles.itemContainer}>
                <Image style={styles.image} source={require('../utils/images/gym-img.jpg')}/>

                <View style={styles.textContainer}>
                    <Text style={styles.name}>{group.name}</Text>
                    <Text style={styles.schedule}>{group.schedule}</Text>
                    <Text style={styles.instructor}>Instrutor: {group.instructor}</Text>
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
        return <ActivityIndicator/>; // Mostrar um indicador de carregamento enquanto aguarda a conclusão da chamada assíncrona
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
        borderColor: "#ccc",
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        marginBottom: 16,
        padding: 12,
    },
    image: {
        borderRadius: 8,
        height: 80,
        marginRight: 12,
        marginVertical: "auto",
        width: 80,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    schedule: {
        color: "#888",
        fontSize: 14,
        marginBottom: 4,
    },
    instructor: {
        fontSize: 14,
        marginBottom: 4,
    },
});

export default Groups;