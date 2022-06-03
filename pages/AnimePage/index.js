import React, { Component, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AuthContext } from "../../context/context";
const api = 'https://api.jikan.moe/v4/';

// Icon
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Youtube from 'react-native-youtube-iframe'

// Componentes
import { AnimeItem, CharacterItem } from '../../components/ItemAnime'
//import { SupButton } from '../../components/Buttons'
import { styles, ButtonsNav } from './style'

function AnimePage({ route, navigation }) {
  // Translate
  const { lang } = React.useContext(AuthContext);
  const translate = lang('animePage')

  // Info Data Anime
  const [characters, setCharacters] = useState({}); // Personagens
  const [summary, setSummary] = useState(1) // Summary (info, synopse, trailer)

  // Use to Navegate
  //const navigation = useNavigation();

  var { data, request } = route.params;
  navigation.setOptions({ title: data.title })

  // Imagens
  let image = data.images.jpg.large_image_url ? data.images.jpg.large_image_url : data.images.jpg.image_url;
  let background = null;
  // Trailer
  const youtube = data.trailer.youtube_id;

  const AnimeInfo = (itemID) => {
    //let anime = characters.data.find(a => a.character.mal_id == itemID);
    fetch(`${api}characters/${itemID}/full`)
      .then((response) => response.json())
      .then((response) => {
        navigation.push('Character', { data: response.data })
      });
  };

  useEffect(() => {
    if (data.mal_id) {
      setCharacters({});

      fetch(`${api}anime/${data.mal_id}/characters`)
        .then((response) => response.json())
        .then((response) => {
          setCharacters(response);
        });
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.background}>
            <Image
              source={{
                uri: background,
              }}
              resizeMode="stretch"
              style={styles.background_image}
            />
          </View>
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

            <View style={styles.Marks}>
              <FontAwesomeIcon name="eye" style={styles.Marks_icon} />
              <FontAwesomeIcon name="bookmark" style={styles.Marks_icon} />
              <FontAwesomeIcon name="lock" style={styles.Marks_icon} />
              <FontAwesomeIcon name="check" style={styles.Marks_icon} />
            </View>

            <View style={styles.navTab}>
              <TouchableOpacity style={styles.navTab_buttons}
                onPress={() => setSummary(1)}>
                <Text style={styles.navTab_text}>{translate.informations}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navTab_buttons}
                onPress={() => setSummary(2)}>
                <Text style={styles.navTab_text}>{translate.sinopse}</Text>
              </TouchableOpacity>
              {youtube ? <TouchableOpacity style={styles.navTab_buttons}
                onPress={() => setSummary(3)}>
                <Text style={styles.navTab_text}>{translate.trailer}</Text>
              </TouchableOpacity> : <View></View>}
            </View>

            <View style={styles.summary_content}>
              {summary == 1 ?
                <View>
                  <View style={styles.content_rating}>
                    <FontAwesomeIcon name="star" style={styles.content_rating_star} />
                    <FontAwesomeIcon name="star" style={styles.content_rating_star} />
                    <FontAwesomeIcon name="star" style={styles.content_rating_star} />
                    <FontAwesomeIcon name="star" style={styles.content_rating_star} />
                    <FontAwesomeIcon name="star" style={styles.content_rating_star} />
                    <Text style={styles.content_rating_text}>{translate.rating}</Text>
                  </View>
                  <View>
                    <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.status}</Text>
                      <Text style={styles.content_itens_text}>{data.status}</Text>
                    </View>
                    <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.score}</Text>
                      <Text style={styles.content_itens_text}>{data.score}</Text>
                    </View>
                    <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.rank}</Text>
                      <Text style={styles.content_itens_text}>#{data.popularity}</Text>
                    </View>
                    <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.age}</Text>
                      <Text style={styles.content_itens_text}>{data.rating}</Text>
                    </View>
                    <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.type}</Text>
                      <Text style={styles.content_itens_text}>{data.type} - {data.source}</Text>
                    </View>
                    {data.season ? <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.season}</Text>
                      <Text style={styles.content_itens_text}>{data.year} - {data.season.toUpperCase()}</Text>
                    </View> : null}
                    {data.producers[0] ? <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.producers}</Text>
                      <Text style={styles.content_itens_text}>{data.producers.map(i => i.name).join(', ')}</Text>
                    </View> : null}
                    {data.studios[0] ? <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.studio}</Text>
                      <Text style={styles.content_itens_text}>{data.studios.map(i => i.name).join(', ')}</Text>
                    </View> : null}
                    <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.genre}</Text>
                      <Text style={styles.content_itens_text}>{data.genres.map(i => i.name).join(', ')}</Text>
                    </View>
                  </View>
                </View>
                : summary == 2 ?
                  <View>
                    <Text style={styles.content_synopse}>{data.synopsis.split('.').map(i => i).join('\n\n')}</Text>
                  </View>
                  :
                  <View>
                    <Youtube
                      height={230}
                      play={false}
                      videoId={youtube}
                    />
                  </View>}
            </View>
          </View>

          <View style={styles.character_container}>
            <View style={styles.character_tab}>
              <Text style={styles.character_title}>{translate.characters}</Text>
            </View>
            <FlatList
              data={characters ? characters.data : {}}
              horizontal={true}
              style={styles.character_list}
              renderItem={({ item }) => (
                <CharacterItem
                  titulo={item.character.name}
                  image={item.character.images.jpg.image_url}
                  role={item.role}
                  id={item.character.mal_id}
                  funcao={AnimeInfo}
                />
              )}
              keyExtractor={(item) => item.character.mal_id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default AnimePage;