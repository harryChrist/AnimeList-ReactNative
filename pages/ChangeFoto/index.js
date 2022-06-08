import React, { Component, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, FlatList, Image, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AuthContext } from '../../context/context'
import { CharacterItem, AnimeItem } from '../../components/ItemAnime'
// usar navegação
import { useNavigation } from '@react-navigation/native'

// Componentes Estilizados
import styles, { ButtonsNav } from './style'
import { SearchInput } from '../../components/Inputs/index'

import { updateProfile,  } from 'firebase/auth';
import { Auth } from '../../data/config/firebase'

const api = 'https://api.jikan.moe/v4/';

export default function ChangeFoto(props) {
  const navigation = useNavigation();
  const { getUser, lang } = React.useContext(AuthContext);
  const translate = lang('changeFoto')
  const user = getUser()

  // Info Data Anime
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    setInfo({});
    if (text) {
      setInfo({});
      fetch(`${api}characters?q=${text.split(" ").join("+")}&limit=100?order_by=name`)
        .then((response) => response.json())
        .then((response) => {
          let diferentes = response.data.filter(a => a.images.jpg.image_url !== 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png');
          setInfo(diferentes);
        });
    }
  }, [text]);

  const AnimeInfo = async (key) => {
    let imagem = info.filter(a => a.mal_id == key);
    await updateProfile(Auth.currentUser, {
      photoURL: imagem[0].images.jpg.image_url,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <SearchInput
          placeholder={translate.placeholder}
          style={styles.SearchInput}
          onChangeText={text => setText(text)}
          maxLength={40} />
      </View>
      <FlatList
        data={text ? info : {}}
        numColumns={3}
        style={styles.flat_list}
        renderItem={({ item }) => (
          <AnimeItem
            titulo={item.name}
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