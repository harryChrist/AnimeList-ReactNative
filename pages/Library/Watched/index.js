import React, { Component } from "react";
import { View, Image, Text, Alert } from "react-native";

// Componentes Estilizados
import styles from './style'

export default function Watched(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Watched</Text>
    </View>
  );
}