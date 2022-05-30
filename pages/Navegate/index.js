import React, { Component, useEffect, useState } from "react";
import { View, FlatList, Image, Text, StyleSheet, TextInput } from "react-native";

import { AuthContext } from '../../context/context'
// usar navegação
import { useNavigation } from '@react-navigation/native'
import { SearchInput } from '../../components/Inputs'
import AnimeItem from '../../components/ItemAnime'
import { HeaderNav } from '../../components/Headers'

// Componentes
import styles from './style'

const api = 'https://kitsu.io/api/edge/';

export default function Navegate() {
  // Translate
  const { singIn, lang } = React.useContext(AuthContext);
  const translate = lang('navegate')

  // Info Data Anime
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  // Use to Navegate
  const navigation = useNavigation();

  const AnimeInfo = (itemID) => {
    let anime = info.data.find(a => a.id == itemID);
    navigation.push('Anime', { data: anime })
  };

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(`${api}anime?filter[text]=${text}&page[limit]=18`)
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