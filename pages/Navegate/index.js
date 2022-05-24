import React, { Component, useEffect, useState } from "react";
import { View, FlatList, Image, Text, StyleSheet, TextInput } from "react-native";

// usar navegação
import { useNavigation } from '@react-navigation/native'
import { SearchInput } from '../../components/Inputs'
import AnimeItem from '../../components/ItemAnime'
import { HeaderNav } from '../../components/Headers'

// Componentes
import styles from './style'

const api = 'https://kitsu.io/api/edge/';

export default function Navegate() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const navigation = useNavigation(); // Use to Navegate

  const AnimeInfo = (itemID) => {
    let anime = info.data.find(a => a.id == itemID);
    navigation.push('AnimePage', { data: anime })
  };

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(
        `${api}anime?filter[text]=${text}&page[limit]=18`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);
  return (
    <View style={styles.container}>
      <HeaderNav
        title="Navegate"
        placeholder='Search'
        onChangeText={text => setText(text)} />

      {text == '' ? <View style={styles.back}>
        <Text style={styles.Loading}>Nothing..</Text>
        <Image
          source={require("../../assets/icons/Killua_Eating.png")} />
      </View> : <Text style={styles.Loading}>{text && !info.data && 'Loading...'}</Text>}

      <FlatList
        data={text ? info.data : {}}
        numColumns={3}
        style={styles.flat_list}
        renderItem={({ item }) => (
          <AnimeItem
            titulo={item.attributes.canonicalTitle}
            image={item.attributes.posterImage.small}
            id={item.id}
            style={styles.animeItem}
            funcao={AnimeInfo}
          />
        )}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}