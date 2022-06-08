import React, { Component, useContext, useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Context -> Global
import { AuthContext } from "../../context/context";
import { db } from "../../data/config/firebase";
import {
  collection, getDocs, doc, updateDoc,
  setDoc, getDoc, query, where,
} from 'firebase/firestore/lite'

// usar navegação
import { useNavigation } from '@react-navigation/native'

const GetAnimesData = async (uid) => {
  // Irá retornar, toda a livraria
  const q = query(collection(db, "Users", uid, 'Library'));
  const querySnapshot = await getDocs(q);
  // Todos os itens e o id(do banco)
  const queryData = querySnapshot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id
  }));
  //let Itens = queryData.filter(a => a.favorited == favorited);
  return queryData;
}

// Componentes Estilizados
import { SupButton } from "../../components/Buttons";
import { HeaderNav } from "../../components/Headers";
import { PickerLang } from "../../components/Selects";

import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import styles from './style'

import { LangList } from '../../data/language'

export default function Settings(props) {
  // Translate
  const { singOut, lang, setLang, getUser } = React.useContext(AuthContext);
  const [info, setInfo] = useState(null);
  const translate = lang('settings');
  const user = getUser();

  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState();
  const [update, setUpdate] = useState('10');

  const setItem = (sex) => {
    setSelectedValue(sex);
    setLang(sex);
    setUpdate(Math.random(10).toString())
  }

  useEffect(async () => {
    let sexo = await GetAnimesData(user.uid);
    console.log(10)
    setInfo({
      watching: sexo.filter(a => a.favorited == 1).length,
      waiting: sexo.filter(a => a.favorited == 2).length,
      droped: sexo.filter(a => a.favorited == 3).length,
      watched: sexo.filter(a => a.favorited == 4).length,
    })
  }, [selectedValue, update])

  const Submit = (page) => {
    navigation.push("ChangeFoto")
    setUpdate(Math.random(10))
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <HeaderNav
            title={translate.title}
            placeholder='Search'
            NoSearchBar />

          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/70/dc/6d/70dc6d52f887888ac7e6ae705cfe6a95.gif',
            }}
            resizeMode="stretch" //contain
            style={styles.background}
          />
          <View style={styles.perfil}>
            <View style={styles.perfil_borda}>
              <Image
                source={{
                  uri: user.photoURL,
                }}
                resizeMode="cover" //contain
                style={styles.perfil_image}
              />
            </View>
            <Text style={styles.perfiL_name}>{user.displayName}</Text>
          </View>

          <View style={styles.settings}>
            <View style={styles.favorites}>
              <View style={styles.favorites_container}>
                <Text style={styles.favorites_title}>{info ? info.watching : 0}</Text>
                <Text style={styles.favorites_subtitle}>{translate.watching}</Text>
              </View>
              <View style={styles.favorites_container}>
                <Text style={styles.favorites_title}>{info ? info.waiting : 0}</Text>
                <Text style={styles.favorites_subtitle}>{translate.waiting}</Text>
              </View>
              <View style={styles.favorites_container}>
                <Text style={styles.favorites_title}>{info ? info.watched : 0}</Text>
                <Text style={styles.favorites_subtitle}>{translate.watched}</Text>
              </View>
              <View style={styles.favorites_container}>
                <Text style={styles.favorites_title}>{info ? info.droped : 0}</Text>
                <Text style={styles.favorites_subtitle}>{translate.droped}</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => Submit("ChangeFoto")} style={styles.containers_change}>
              <Icon name={'person-circle-sharp'} color={'white'} size={30} style={styles.containers_change_icon} />
              <Text style={styles.containers_change_title}>{translate.change_perfil}</Text>
              <Icon name={'arrow-forward-outline'} color={'white'} size={20} style={styles.containers_change_icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers_change}>
              <Icon name={'mail'} color={'white'} size={30} style={styles.containers_change_icon} />
              <Text style={styles.containers_change_title}>{translate.change_email}</Text>
              <Icon name={'arrow-forward-outline'} color={'white'} size={20} style={styles.containers_change_icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers_change}>
              <Icon name={'key'} color={'white'} size={30} style={styles.containers_change_icon} />
              <Text style={styles.containers_change_title}>{translate.change_pass}</Text>
              <Icon name={'arrow-forward-outline'} color={'white'} size={20} style={styles.containers_change_icon} />
            </TouchableOpacity>

            <View style={styles.containers}>
              <View style={styles.containers_change}>
                <Icon name={'language'} color={'white'} size={30} style={[styles.containers_change_icon, { width: '10%' }]} />
                <Text style={[styles.containers_change_title, { width: '35%' }]}>{translate.language}</Text>
                <PickerLang
                  data={LangList}
                  selectedValue={selectedValue}
                  map={{ lang: "lang", name: "name" }}
                  onValueChange={setItem}
                />
              </View>
            </View>
            <SupButton second
              title={translate.singOut}
              onPress={() => singOut()}
            />
            <Text style={{ color: 'white', opacity: 0.7 }}>Version: 1.0.0</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View >
  );
}