import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const testee = 'https://cdn.discordapp.com/attachments/884463361327255573/977023805660753920/115123-killua-photos-zoldyck-free-hq-image.png'
// props => image, style, titulo
export default function ItemAnime(props) {
  return (
    <TouchableOpacity
      onPress={function () {
        props.funcao(props.id);
      }}>
      <View style={[styles.container, props.style]}>
        <View style={styles.imageStack}>
          <Image
            source={{
              uri: props.image || testee,
            }}
            resizeMode="stretch"
            style={styles.image}
          ></Image>
          <View style={styles.rect}>
            <View style={styles.tituloFiller}></View>
            <Text style={styles.titulo}>{props.titulo || "Loading"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#CCC",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    //overflow: "hidden"
  },
  image: {
    position: "absolute",
    height: '100%',
    width: '100%'
  },
  rect: {
    top: 145,
    width: '100%',
    height: 29,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  tituloFiller: {
    flex: 1
  },
  titulo: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    textAlign: "center",
    width: 114,
    height: 27,
    marginBottom: 1,
    marginLeft: 3
  },
  imageStack: {
    width: 120,
    height: 174,
    marginTop: -1,
    marginLeft: -1
  }
});