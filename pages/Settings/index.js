import React, { Component, useContext, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

// usar navegação
import { useNavigation } from '@react-navigation/native'
// Componentes Estilizados
import { SupButton } from "../../components/Buttons";
import { HeaderNav } from "../../components/Headers";
import { PickerLang } from "../../components/Selects";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../context/context";
import { TouchableOpacity } from "react-native-gesture-handler";

import { LangList } from '../../data/language'

export default function Settings(props) {
  // Translate
  const { singOut, lang, setLang } = React.useContext(AuthContext);
  const translate = lang('settings')

  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('English');
  const setItem = (sex) => {
    setSelectedValue(sex);
    setLang(sex)
  }

  return (
    <View style={styles.container}>
      <HeaderNav
        title="News"
        placeholder='Search'
        onChangeText={text => setText(text)}
        NoSearchBar />
      <TouchableOpacity>
        <Text>{ }</Text>
      </TouchableOpacity>
      <Text style={{ color: 'white' }}>{selectedValue}</Text>
      <View style={styles.icon1Row}>
        <Icon
          name="document-text-outline"
          style={styles.icon1}
        />
        <Text style={styles.language}>{translate.language}:</Text>
        <PickerLang
          data={LangList}
          selectedValue={selectedValue}
          map={{ lang: "lang", name: "name" }}
          onValueChange={setItem}
        />
      </View>
      <View style={styles.Changes}>
        <Text style={styles.change_Title}>Change</Text>
        <SupButton second
          title={translate.change_pass}
        />
        <SupButton second
          title={translate.change_email}
        />
        <SupButton second
          title={translate.singOut}
          onPress={() => singOut()}
        />
      </View>
      <View style={styles.imageStack}>
        <Image
          source={require("../../assets/icons/Killua_chibi.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(19,27,40,1)"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 445,
    width: 347
  },
  imageStack: {
    width: 407,
    height: 445,
    marginTop: 30,
  },
  Changes: {
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  change_Title: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    textAlign: "center",
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 2
  },
  language: {
    color: "rgba(255,255,255,1)",
    width: 134,
    fontSize: 25,
    marginLeft: 22
  },
  rect: {
    width: 108,
    height: 33,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  linguagem: {
    color: "rgba(0,122,255,1)",
    height: 33,
    width: 84,
    fontSize: 25,
    textAlign: "center"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 25,
    width: 14
  },
  icon1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 40,
  },
});
