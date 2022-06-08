import React, { Component, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, FlatList, Image, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AuthContext } from '../../context/context'
import { AnimeItem } from '../../components/ItemAnime'
// usar navegação
import { useNavigation } from '@react-navigation/native'
import { HeaderNav } from "../../components/Headers";

// Componentes Estilizados
import styles, { ButtonsNav } from './style'

const api = 'https://api.jikan.moe/v4/';

export default function News(props) {
  // Translate
  const { lang } = React.useContext(AuthContext);
  const translate = lang('news')
  const translateSeason = lang('seasons');

  // Info Data Anime
  const [topAnime, setTopAnime] = useState({});
  const [seasonNow, setSeasonNow] = useState();
  const [seasonNowText, setSeasonNowText] = useState('');
  const [seasonComing, setSeasonComing] = useState();
  const [topFilter, setTopFilter] = useState(1)
  const [PrecisoDisso, setPreciso] = useState('Sexo');
  const Tops = ['bypopularity', 'airing', 'upcoming', 'favorite'];

  const navigation = useNavigation();

  useEffect(() => {
    if (topFilter) {
      setTopAnime({});
      fetch(`${api}top/anime?filter=${Tops[topFilter - 1]}`)
        .then((response) => response.json())
        .then((response) => {
          setTopAnime(response);
        });
    }
  }, [topFilter]);
  useEffect(() => {
    if (PrecisoDisso) {
      setSeasonNow({});
      fetch(`${api}seasons/now`)
        .then((response) => response.json())
        .then((response) => {
          setSeasonNow(response);
          setSeasonNowText(translateSeason[response.data[0].season]);
        });
      setSeasonComing({});
      fetch(`${api}seasons/upcoming`)
        .then((response) => response.json())
        .then((response) => {
          setSeasonComing(response);
        });
    }
  }, [PrecisoDisso]);

  const TopAnimeInfo = (itemID) => {
    let anime = topAnime.data.find(a => a.mal_id == itemID);
    navigation.push('Anime', { data: anime })
  }
  const SeasonNowInfo = (itemID) => {
    let anime = seasonNow.data.find(a => a.mal_id == itemID);
    navigation.push('Anime', { data: anime })
  }
  const SeasonUpInfo = (itemID) => {
    let anime = seasonComing.data.find(a => a.mal_id == itemID);
    navigation.push('Anime', { data: anime })
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <HeaderNav
            title={translate.title}
            placeholder='Search'
            onChangeText={text => setText(text)}
            NoSearchBar />
          <View style={[styles.conteiners, { height: 260, }]}>
            <View style={styles.conteiners_tab}>
              <Text style={styles.conteiners_title}>{translate.topAnime}</Text>
            </View>
            <View style={styles.navTab}>
              <ButtonsNav selected={topFilter === 1 ? true : ''}
                onPress={() => setTopFilter(1)}>
                <Text style={styles.navTab_text}>{translateSeason.bypopularity}</Text>
              </ButtonsNav>
              <ButtonsNav selected={topFilter === 2 ? true : ''}
                onPress={() => setTopFilter(2)}>
                <Text style={styles.navTab_text}>{translateSeason.airing}</Text>
              </ButtonsNav>
              <ButtonsNav selected={topFilter === 3 ? true : ''}
                onPress={() => setTopFilter(3)}>
                <Text style={styles.navTab_text}>{translateSeason.upcoming}</Text>
              </ButtonsNav>
              <ButtonsNav selected={topFilter === 4 ? true : ''}
                onPress={() => setTopFilter(4)}>
                <Text style={styles.navTab_text}>{translateSeason.favorite}</Text>
              </ButtonsNav>
            </View>
            <FlatList
              data={topAnime ? topAnime.data : {}}
              horizontal={true}
              style={styles.flat_list}
              renderItem={({ item }) => (
                <AnimeItem
                  titulo={item.title}
                  image={item.images.jpg.image_url}
                  id={item.mal_id}
                  estilo={styles.animeItem}
                  funcao={TopAnimeInfo}
                />
              )}
              keyExtractor={(item) => item.mal_id}
            />
          </View>
          <View style={styles.conteiners}>
            <View style={styles.conteiners_tab}>
              <Text style={styles.conteiners_title}>{translate.seasonNow}
                {seasonNowText == '' ? seasonNowText : `(${seasonNowText})`}</Text>
            </View>
            <FlatList
              data={seasonNow ? seasonNow.data : {}}
              horizontal={true}
              renderItem={({ item }) => (
                <AnimeItem
                  titulo={item.title}
                  image={item.images.jpg.image_url}
                  id={item.mal_id}
                  estilo={styles.animeItem}
                  funcao={SeasonNowInfo}
                />
              )}
              keyExtractor={(item) => item.mal_id}
            />
          </View>
          <View style={[styles.conteiners, { marginBottom: '10%' }]}>
            <View style={styles.conteiners_tab}>
              <Text style={styles.conteiners_title}>{translate.seasonUp}</Text>
            </View>
            <FlatList
              data={seasonComing ? seasonComing.data : {}}
              horizontal={true}
              renderItem={({ item }) => (
                <AnimeItem
                  titulo={item.title}
                  image={item.images.jpg.image_url}
                  id={item.mal_id}
                  estilo={styles.animeItem}
                  funcao={SeasonUpInfo}
                />
              )}
              keyExtractor={(item) => item.mal_id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

/*<FlatList
          data={info ? info.data : {}}
          style={styles.flat_list}
          renderItem={({ item }) => (
            <View style={styles.containers}>
              <View style={styles.container_tab}>
                <Text style={styles.containers_title}>{item.year}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.mal_id}
        /> */