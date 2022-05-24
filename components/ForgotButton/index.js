import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

// Apenas um Simples Botão
function ForgotButton(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.local)} style={[styles.container, props.style]}>
      <Text style={styles.button}>{props.button || "Button"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    color: "rgba(53,148,243,1)",
    fontSize: 17,
  }
});

export default ForgotButton;
