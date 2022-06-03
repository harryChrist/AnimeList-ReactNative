import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles, styled } from './style'

const NoImage = 'https://cdn.discordapp.com/attachments/884463361327255573/977023805660753920/115123-killua-photos-zoldyck-free-hq-image.png'
// props => image, style, titulo
export function AnimeItem(props) {
  return (
    <TouchableOpacity
      onPress={function () {
        props.funcao(props.id);
      }}>
      <View style={[styles.container, props.estilo]}>
        <Image
          source={{
            uri: props.image || NoImage,
          }}
          resizeMode="stretch"
          blurRadius={20}
          style={styles.background}
        />
        <View style={styles.group}>
          <View style={styles.imageStack}>
            <Image
              source={{
                uri: props.image || NoImage,
              }}
              resizeMode="stretch"
              style={styles.image}
            />
          </View>
          <View style={styles.rect}>
            <Text numberOfLines={2} style={styles.titulo}>{props.titulo || "Loading"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity >
  );
}

export function AnimeItemNoPress(props) {
  return (
      <View style={[styles.container, props.estilo]}>
        <Image
          source={{
            uri: props.image || NoImage,
          }}
          resizeMode="stretch"
          blurRadius={20}
          style={styles.background}
        />
        <View style={styles.group}>
          <View style={styles.imageStack}>
            <Image
              source={{
                uri: props.image || NoImage,
              }}
              resizeMode="stretch"
              style={styles.image}
            />
          </View>
          <View style={styles.rect}>
            <Text numberOfLines={2} style={styles.titulo}>{props.titulo || "Loading"}</Text>
          </View>
        </View>
      </View>
  );
}

export function CharacterItem(props) {
  return (
    <TouchableOpacity
      onPress={function () {
        props.funcao(props.id);
      }}>
      <View style={[styled.conteiners, props.estilo]}>
        <Image
          source={{
            uri: props.image || NoImage,
          }}
          resizeMode="stretch"
          blurRadius={20}
          style={styled.background}
        />
        <View style={styled.imageStack}>
          <Image
            source={{
              uri: props.image || NoImage,
            }}
            resizeMode="stretch"
            style={styled.image}
          />
        </View>
        <View style={styled.rect}>
          <Text allowFontScaling style={styled.titulo}> { props.titulo.length < 22
            ? `${props.titulo}`
            : `${props.titulo.substring(0, 20)}...`}</Text>
          <Text style={styled.titulo}>{props.role || ""}</Text>
        </View>
      </View>
    </TouchableOpacity >
  );
}

export function CharacterItemNoPress(props) {
  return (
      <View style={[styled.conteiners, props.estilo]}>
        <Image
          source={{
            uri: props.image || NoImage,
          }}
          resizeMode="stretch"
          blurRadius={20}
          style={styled.background}
        />
        <View style={styled.imageStack}>
          <Image
            source={{
              uri: props.image || NoImage,
            }}
            resizeMode="stretch"
            style={styled.image}
          />
        </View>
        <View style={styled.rect}>
          <Text allowFontScaling style={styled.titulo}> { props.titulo.length < 22
            ? `${props.titulo}`
            : `${props.titulo.substring(0, 20)}...`}</Text>
          <Text style={styled.titulo}>{props.role || ""}</Text>
        </View>
      </View>
  );
}