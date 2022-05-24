import React, { Component } from "react";
import { View, Image, Text, Alert } from "react-native";

// usar navegação
import { useNavigation } from '@react-navigation/native'
import { HeaderNav } from "../../components/Headers";

// Componentes Estilizados
import styles from './style'

export default function News(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderNav
        title="News"
        placeholder='Search'
        onChangeText={text => setText(text)}
        NoSearchBar/>
    </View>
  );
}