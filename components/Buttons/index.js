import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';

// Um Buttão Estilizado
export function SupButton({ title, ...rest }) {
  const navigation = useNavigation();
  return (
    <SuperButton {...rest}>
      <Text style={{
        color: "#fff",
        fontSize: 18
      }}>{title}</Text>
    </SuperButton>
  );
}

export const SuperButton = styled.TouchableOpacity`
  height: 45px;
  width: 244px;
  marginTop: 25px;
  justify-content: center;
  alignItems: center;
  border-radius: 100px;
  minWidth: 88px;
  borderWidth: 1px;
  border-style: solid;
  shadow-color: rgba(0,0,0,1);
  box-shadow: 3px 3px 5px rgba(0,0,0,1);
  font-size: 18px;
  elevation: 5;
  background: ${props => props.second ? "rgba(230, 230, 230,0)" : 'rgba(47,6,124,1)'}
`

// Apenas um Simples Botão
export function ForgotButton(props) {
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