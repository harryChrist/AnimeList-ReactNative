import React, { Component, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CharacterItem, AnimeItem, CharacterItemNoPress, AnimeItemNoPress } from "../../components/ItemAnime";

import { AuthContext } from "../../context/context";

import { styles } from './style'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { SupButton } from '../../components/Buttons'

const api = 'https://api.jikan.moe/v4/';

export default function CharacterPage({ route, navigation }) {
  // Translate
  const { lang } = React.useContext(AuthContext);
  const translate = lang('characterPage');

  var { data } = route.params;
  navigation.setOptions({ title: data.name })
  console.log(data.mal_id)

  const image = data.images.jpg.image_url

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.summary}>
            <View style={styles.summaryImage}>
              <Image
                source={{
                  uri: image,
                }}
                resizeMode="stretch" //contain
                style={styles.summaryImage_img}
              />
            </View>
            <Text style={styles.title}>{data.name}</Text>
          </View>
          <View style={styles.summary_content}>
            <View>
              <Text style={styles.content_title}>{translate.about}</Text>
              <Text style={styles.content_synopse}>{data.about}</Text>
            </View>
          </View>

          <View style={styles.character_container}>
            <View style={styles.character_tab}>
              <Text style={styles.character_title}>{translate.voices}</Text>
            </View>
            <FlatList
              data={data.voices ? data.voices : {}}
              horizontal={true}
              style={styles.character_list}
              SameLine={true}
              renderItem={({ item }) => (
                <CharacterItemNoPress
                  titulo={item.person.name}
                  image={item.person.images.jpg.image_url}
                  role={item.language}
                  id={item.person.mal_id}
                />
              )}
              keyExtractor={(item) => item.person.mal_id}
            />
          </View>
          <View style={styles.character_container}>
            <View style={styles.character_tab}>
              <Text style={styles.character_title}>{translate.animes}</Text>
            </View>
            <FlatList
              data={data.anime ? data.anime : {}}
              horizontal={true}
              style={styles.character_list}
              renderItem={({ item }) => (
                <AnimeItemNoPress
                  titulo={item.anime.title}
                  image={item.anime.images.jpg.image_url}
                  id={item.anime.mal_id}
                />
              )}
              keyExtractor={(item) => item.anime.mal_id}
            />
          </View>
          <View style={styles.character_container}>
            <View style={styles.character_tab}>
              <Text style={styles.character_title}>{translate.mangas}</Text>
            </View>
            <FlatList
              data={data.manga ? data.manga : {}}
              horizontal={true}
              style={styles.character_list}
              SameLine={true}
              renderItem={({ item }) => (
                <AnimeItemNoPress
                  titulo={item.manga.title}
                  image={item.manga.images.jpg.image_url}
                  id={item.manga.mal_id}
                />
              )}
              keyExtractor={(item) => item.manga.mal_id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}