import React, { Component, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AuthContext } from "../../context/context";
const api = 'https://api.jikan.moe/v4/';

// Icon
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import Youtube from 'react-native-youtube-iframe'

import { AnimeDataExist, DeleteAnime, GetDataAnime } from '../../data/services/Database'

// Componentes
import { AnimeItem, CharacterItem } from '../../components/ItemAnime'
//import { SupButton } from '../../components/Buttons'
import { styles, ButtonsNav } from './style'

function AnimePage({ route, navigation }) {
  // Translate
  const { lang, getUser } = React.useContext(AuthContext);
  const translate = lang('animePage');
  const user = getUser();

  // Info Data Anime
  const [characters, setCharacters] = useState({}); // Personagens
  const [summary, setSummary] = useState(1) // Summary (info, synopse, trailer)

  // Use to Navegate
  //const navigation = useNavigation();

  var { data, request } = route.params;
  navigation.setOptions({ title: data.title })
  const [favorited, setFavorited] = useState(data.favorited ? data.favorited : 0)

  const onSubmit = (key) => {
    if (key == favorited) return;
    AnimeDataExist(user.uid, data.mal_id, data, key)
    setFavorited(key)
  }

  const Delete = () => {
    DeleteAnime(user.uid, data.mal_id)
    setFavorited(0)
  }

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

  useEffect(async () => {
    if (data.mal_id) {
      setCharacters({});

      fetch(`${api}anime/${data.mal_id}/characters`)
        .then((response) => response.json())
        .then((response) => {
          setCharacters(response);
        });
    }
    if (favorited == 0) {
      let tentar = await GetDataAnime(user.uid, data.mal_id);
      setFavorited(tentar.favorited)
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/70/dc/6d/70dc6d52f887888ac7e6ae705cfe6a95.gif',
            }}
            resizeMode="stretch" //contain
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
          {favorited ? <View style={{ width: '100%', height: '100%', color: "white", position: 'absolute', paddingTop: '2%', paddingRight: '2%' }}>
            <TouchableOpacity onPress={() => Delete()}>
              <Icon name="trash-sharp" style={{ fontSize: 30, color: "white", alignSelf: 'flex-end' }} />
            </TouchableOpacity>
          </View> : null}
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
              <TouchableOpacity onPress={() => onSubmit(1)}>
                {favorited == 1 ? <FontAwesomeIcon name="eye" style={[styles.Marks_icon, { color: "#2E94EC" }]} />
                  : <FontAwesomeIcon name="eye" style={[styles.Marks_icon, { color: "rgba(128,128,128,1)" }]} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSubmit(2)}>
                {favorited == 2 ? <FontAwesomeIcon name="bookmark" style={[styles.Marks_icon, { color: "#F09A4A" }]} />
                  : <FontAwesomeIcon name="bookmark" style={[styles.Marks_icon, { color: "rgba(128,128,128,1)" }]} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSubmit(3)}>
                {favorited == 3 ? <FontAwesomeIcon name="lock" style={[styles.Marks_icon, { color: "#F44646" }]} />
                  : <FontAwesomeIcon name="lock" style={[styles.Marks_icon, { color: "rgba(128,128,128,1)" }]} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSubmit(4)}>
                {favorited == 4 ? <FontAwesomeIcon name="check" style={[styles.Marks_icon, { color: "#40FF00" }]} />
                  : <FontAwesomeIcon name="check" style={[styles.Marks_icon, { color: "rgba(128,128,128,1)" }]} />}
              </TouchableOpacity>


            </View>

            <View style={styles.navTab}>
              <ButtonsNav selected={summary === 1 ? true : ''}
                onPress={() => setSummary(1)}>
                <Text style={styles.navTab_text}>{translate.informations}</Text>
              </ButtonsNav>
              {data.synopsis ? <ButtonsNav selected={summary === 2 ? true : ''}
                onPress={() => setSummary(2)}>
                <Text style={styles.navTab_text}>{translate.sinopse}</Text>
              </ButtonsNav> : <View></View>}
              {youtube ? <ButtonsNav selected={summary === 3 ? true : ''}
                onPress={() => setSummary(3)}>
                <Text style={styles.navTab_text}>{translate.trailer}</Text>
              </ButtonsNav> : <View></View>}
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
                    {data.score ? <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.score}</Text>
                      <Text style={styles.content_itens_text}>{data.score}</Text>
                    </View> : null}
                    <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.rank}</Text>
                      <Text style={styles.content_itens_text}>#{data.popularity}</Text>
                    </View>
                    {data.rating ? <View style={styles.content_itens}>
                      <Text style={styles.content_itens_subtitle}>{translate.age}</Text>
                      <Text style={styles.content_itens_text}>{data.rating}</Text>
                    </View> : null}
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
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                      <Text style={{
                        width: '95%',
                        fontSize: 10,
                        textAlign: 'center',
                        marginLeft: 20,
                        color: '#b8b4b4'
                      }}>{data.title_english ? data.title_english : ''}</Text>
                      <Text style={{
                        width: '95%',
                        fontSize: 10,
                        textAlign: 'center',
                        marginLeft: 20,
                        color: '#b8b4b4'
                      }}>{data.title_japanese ? data.title_japanese : ''}</Text>
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