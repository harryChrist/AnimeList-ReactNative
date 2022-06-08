import React, { useEffect, useState } from "react";
import { View, Image, Text, Alert, FlatList, Button, TouchableOpacity } from "react-native";

// Componentes Estilizados
import styles from './style'
import { AnimeItem, CharacterItem } from '../../components/ItemAnime'
import Icon from "react-native-vector-icons/Ionicons";

//import { GetAnimesData } from "../../data/services/Database";
// Context -> Global
import { AuthContext } from "../../context/context";
import { db } from "../../data/config/firebase";
import {
  collection, getDocs, doc, updateDoc,
  setDoc, getDoc, query, where,
} from 'firebase/firestore/lite'

import { useNavigation } from '@react-navigation/native'

const GetAnimesData = async (uid, favorited) => {
  // Irá retornar, toda a livraria
  const q = query(collection(db, "Users", uid, 'Library'));
  const querySnapshot = await getDocs(q);
  // Todos os itens e o id(do banco)
  const queryData = querySnapshot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id
  }));
  let Itens = queryData.filter(a => a.favorited == favorited);
  return Itens;
}


export function Page(props) {
  const { getUser } = React.useContext(AuthContext);
  const [info, setInfo] = useState({}); // Personagens
  const user = getUser()
  const navigation = useNavigation();

  let Favoritos = props.Favoritos

  useEffect(async () => {
    if (user) {
      setInfo(await GetAnimesData(user.uid, Favoritos));
    }
  }, user)

  const onSubmit = async () => {
    setInfo(await GetAnimesData(user.uid, Favoritos));
  }

  const AnimeInfo = (itemID) => {
    let data = info.filter(a => a.mal_id == itemID)
    navigation.push('Anime', { data: data[0] })
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => onSubmit()}>
        <Icon name="reload-outline" style={{ fontSize: 30, color: "white", alignSelf: 'flex-end' }} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={info ? info : {}}
        showsVerticalScrollIndicator={false}
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

export function Watching(props) {
  return (
    <Page Favoritos={1}/>
  );
}

export function Watched(props) {
  return (
    <Page Favoritos={4}/>
  );
}

export function Waiting(props) {
  return (
    <Page Favoritos={2}/>
  );
}

export function Droped(props) {
  return (
    <Page Favoritos={3}/>
  );
}