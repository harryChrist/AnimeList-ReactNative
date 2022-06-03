import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SearchInput } from '../Inputs'

import Icon from "react-native-vector-icons/Ionicons";

export function HeaderNav({icon, title, style, value, onPress, NoSearchBar, ...rest}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textWrapperRow}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>
            {title || "Title"}
          </Text>
        </View>
        {NoSearchBar ? false : <SearchInput
          style={styles.materialUnderlineTextbox2}
          {...rest}
        /> }
      </View>
      <View style={styles.textWrapperRowFiller}></View>
        <TouchableOpacity style={styles.iconButton} onPress={onPress}>
          <Icon name="ellipsis-vertical-outline" style={styles.Options}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(47,6,124,1)",
    //backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  textWrapper: {
    height: 18,
    marginTop: 14
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  },
  inputStyle: {
    color: "#fff",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
  },
  materialUnderlineTextbox2: {
    color: "#fff",
    height: 43,
    width: 200,
    paddingRight: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    marginLeft: 49,
    paddingTop: 10,
    paddingBottom: 8,
  },
  textWrapperRow: {
    height: 43,
    flexDirection: "row",
    marginLeft: 17,
    marginTop: 5
  },
  textWrapperRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    marginTop: 5
  },
  iconButton: {
    marginTop: 5,
    paddingRight: 11
  },
  Options: {
    color: "#FFFFFF",
    fontSize: 24
  }
});
