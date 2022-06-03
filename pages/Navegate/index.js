import React, { Component, useEffect, useState } from "react";
import { View, FlatList, Image, Text, StyleSheet, TextInput } from "react-native";

import { AuthContext } from '../../context/context'
// usar navegação
import { useNavigation } from '@react-navigation/native'
import { SearchInput } from '../../components/Inputs'
import {AnimeItem, CharacterItem} from '../../components/ItemAnime'
import { HeaderNav } from '../../components/Headers'

// Componentes
import styles from './style'
import { TouchableOpacity } from "react-native-gesture-handler";

const api = 'https://api.jikan.moe/v4/';

export default function Navegate() {
  // Translate
  const { lang } = React.useContext(AuthContext);
  const translate = lang('navegate')

  // Info Data Anime
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  // Use to Navegate
  const navigation = useNavigation();

  const AnimeInfo = (itemID) => {
    fetch(`${api}anime/${itemID}/full`)
    .then((response) => response.json())
    .then((response) => {
      navigation.push('Anime', { data: response.data })
    });
  }

  useEffect(() => {
    setInfo({});
    if (text) {
      setInfo({});

      fetch(`${api}anime?q=${text.split(" ").join("+")}&limit=18`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);
  return (
    <View style={styles.container}>
      <HeaderNav
        title={translate.title}
        placeholder={translate.input_search}
        onChangeText={text => setText(text)} />

      {text == '' ? <View style={styles.back}>
        <Text style={styles.Loading}>{translate.null}</Text>
        <Image
          resizeMode="contain"
          source={require("../../assets/icons/Killua_Eating.png")} style={styles.image} />
      </View> : <Text style={styles.Loading}>{text && !info.data && translate.loading}</Text>}

      <FlatList
        data={text ? info.data : {}}
        numColumns={3}
        style={styles.flat_list}
        renderItem={({ item }) => (
          <AnimeItem
            titulo={item.title}
            image={item.images.jpg.image_url}
            id={item.mal_id}
            estilo={styles.animeItem}
            funcao={AnimeInfo}
          />
        )}
        keyExtractor={(item) => item.mal_id}
      />

    </View>
  );
}