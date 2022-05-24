import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Anime({ route, navigation }) {

  const { data } = route.params;

  navigation.setOptions({ title: data.attributes.canonicalTitle })

  const image = data.attributes.posterImage.original || data.attributes.posterImage.large;
  const background = data.attributes.coverImage ? data.attributes.coverImage.original : image;

  return (
    <View style={styles.container}>
      <View style={styles.group4Stack}>
        <View style={styles.BackGround}>
          <Image
            source={{
              uri: background,
            }}
            resizeMode="stretch"
            style={styles.Background_Image}
          ></Image>
          <View style={styles.rect}></View>
        </View>
        <Image
          source={{
            uri: image,
          }}
          resizeMode="contain"
          style={styles.AnimeImage}
        ></Image>
        <View style={styles.Description}>
          <Text style={styles.Title}>
            {data.attributes.canonicalTitle}
          </Text>
          <Text style={styles.studioPierrot}>Studio: Studio Pierrot</Text>
          <Text style={styles.episodes500}>Episodes: 500</Text>
          <Text style={styles.studioPierrot2}>
            Genres: Action, Adventure, Fantasy
          </Text>
        </View>
      </View>
      <View style={styles.groupRow}>
        <View style={styles.Marks}>
          <FontAwesomeIcon name="eye" style={styles.MarksIcons} />
          <FontAwesomeIcon name="bookmark" style={styles.MarksIcons} />
          <FontAwesomeIcon name="lock" style={styles.MarksIcons} />
          <FontAwesomeIcon name="check" style={styles.MarksIcons} />
        </View>
        <View style={styles.Avaliate}>
          <Text style={styles.avaliar}>Avaliar:</Text>
          <FontAwesomeIcon name="star" style={styles.AvaliarIcons} />
          <FontAwesomeIcon name="star" style={styles.AvaliarIcons} />
          <FontAwesomeIcon name="star" style={styles.AvaliarIcons} />
          <FontAwesomeIcon name="star" style={styles.AvaliarIcons} />
          <FontAwesomeIcon name="star" style={styles.AvaliarIcons_false} />
        </View>
      </View>
      <Text style={styles.trailer}>Trailer</Text>
      <Text style={styles.synopse}>
        Synopsis: {data.attributes.synopsis}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(19,27,40,1)"
  },
  group4Stack: {
    height: 317,
    marginLeft: -6
  },
  Title: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: '100%',
    height: 73
  },
  BackGround: {
    width: '100%',
    height: 200
  },
  Background_Image: {
    position: "absolute",
    width: '100%',
    height: '100%', //height: 159,
    opacity: 0.6
  },
  rect: {
    top: 160,
    left: 7,
    width: '100%',
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.25
  },
  AnimeImage: {
    position: "absolute",
    top: 160,
    left: 25,
    height: 200,
    width: 142
  },
  Description: {
    top: 171,
    left: 174,
    width: 280,
    height: 190,
    position: "absolute"
  },
  studioPierrot: {
    top: 56,
    left: 0,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "rgba(181,181,181,1)"
  },
  episodes500: {
    //fontFamily: "roboto-regular",
    color: "rgba(181,181,181,1)",
    marginTop: 6
  },
  studioPierrot2: {
    //fontFamily: "roboto-regular",
    color: "rgba(181,181,181,1)",
    width: 183,
    height: 35,
    marginTop: 5
  },
  synopse: {
    //fontFamily: "roboto-regular",
    color: "rgba(181,181,181,1)",
    height: 276,
    textAlign: "left",
    marginTop: 10,
    margin: 25,
  },
  MarksIcons: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 15,
  },
  Marks: {
    width: 127,
    height: 25,
    flexDirection: "row",
  },
  Avaliate: {
    width: 179,
    height: 25,
    flexDirection: "row",
    marginLeft: 25
  },
  avaliar: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 4,
    marginLeft: 10,
  },
  AvaliarIcons: {
    color: "rgba(248,231,28,1)",
    fontSize: 25,
    marginLeft: 4
  },
  AvaliarIcons_false: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 4
  },
  groupRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 10,
    marginRight: 25
  },
  trailer: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    alignSelf: 'center',
  }
});

export default Anime;
