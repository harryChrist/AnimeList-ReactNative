import React, { Component } from "react";

// usar navegação
import { useNavigation, CommonActions } from '@react-navigation/native'
// Componentes Estilizados
import styles, { Container, SupButton, Imagem, Texto } from './style'

export default function Welcome(props) {
  const navigation = useNavigation();
  const entrar = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' },
        ],
      })
    );
  }
  return (
    <Container>
      <Imagem
        source={require("../../assets/icons/killua.png")}
        resizeMode="contain"
      ></Imagem>
      <Texto title>Welcome</Texto>
      <SupButton second onPress={() => navigation.navigate('SingUp')}>
        <Texto>SING UP</Texto>
      </SupButton>
      <SupButton onPress={() => navigation.navigate('SingIn')}>
        <Texto>LOGIN</Texto>
      </SupButton>

      <SupButton onPress={() => entrar()}>
        <Texto>Home</Texto>
      </SupButton>
    </Container>
  );
}