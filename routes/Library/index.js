import React, { Component } from "react";
import { View, Image, Text, Alert, StyleSheet } from "react-native";


// Criação do Tab
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

// Paginação
import Watching from '../../pages/Library/Watching/index'
import Waiting from '../../pages/Library/Waiting/index'
import Droped from '../../pages/Library/Droped/index'
import Watched from '../../pages/Library/Watched/index'

// Icons
import Icon from "react-native-vector-icons/FontAwesome";
let icons = {
    Watching: "eye",
    Waiting: "bookmark",
    Droped: "lock",
    Watched: "check",
}

import { AuthContext } from '../../context/context'

// Fazer uso de props, pegando um FUCKING JSON pesado e repassando em cada biblioteca
export default function Library() {
    const { lang } = React.useContext(AuthContext);
    const translate = lang('singUp')
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName = icons[route.name] || "home";
                  return <Icon name={iconName} color={color} size={size} style={styles.iconStyle}></Icon>;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBackgroundColor: '#2F067C',
                tabBarStyle: {
                    backgroundColor: 'rgba(19,27,40,1)'
                },
                tabBarIndicatorStyle: { // Barra dbaixo
                    backgroundColor: 'white'
                },
                tabBarShowLabel: false,
                tabBarLabelStyle: {
                    fontSize: 13,
                },
                tabBarItemStyle: {
                    fontSize: 10,
                },

            })}>
            <Tab.Screen name="Watching" component={Watching} />
            <Tab.Screen name="Waiting" component={Waiting} />
            <Tab.Screen name="Droped" component={Droped} />
            <Tab.Screen name="Watched" component={Watched} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 23,
        justifyContent: 'center',
        height: '100%',
    },
});