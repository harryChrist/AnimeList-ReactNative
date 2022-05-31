import React, { Component, useEffect } from "react";
import { AuthContext } from "../../context/context";

// usar navegação
import { useNavigation, CommonActions } from '@react-navigation/native'
// Componentes Estilizados
import styles, { Container, SupButton, Imagem, Texto } from './style'

export default function Welcome(props) {
  const { singIn, lang } = React.useContext(AuthContext);
  const translate = lang('welcome');
  const navigation = useNavigation();

  return (
    <Container>
      <Imagem
        source={require("../../assets/icons/killua.png")}
        resizeMode="contain"
      ></Imagem>
      <Texto title>{translate.title}</Texto>
      <SupButton second onPress={() => navigation.navigate('SingUp')}>
        <Texto>{translate.sing_up}</Texto>
      </SupButton>
      <SupButton onPress={() => navigation.navigate('SingIn')}>
        <Texto>{translate.login}</Texto>
      </SupButton>

      <SupButton onPress={singIn}>
        <Texto>Home</Texto>
      </SupButton>
    </Container>
  );
}