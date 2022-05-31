import React, { Component, useEffect, useState } from "react";
import { View, Image, Text, Alert, FlatList, Button } from "react-native";

// Componentes Estilizados
import styles from './style'
import {db} from "../../../data/config/firebase";
import {collection, getDocs} from 'firebase/firestore/lite'

export default function Watching(props) {
  const [user, setUser] = useState([]);

  const GetSata = async () => {
    const citiesCol = collection(db, 'Users');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());

    console.log(cityList)
  }
  useEffect(() => {
  }) 

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Watching</Text>
    <Button title="Seila" onPress={GetSata}/>
    <FlatList
    showsVerticalScrollIndicator={false}
    data={user}/>
    </View>
  );
}