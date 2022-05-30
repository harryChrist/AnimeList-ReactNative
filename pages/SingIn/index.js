import React, { Component, useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Image, Text, Alert } from "react-native";

import { AuthContext } from "../../context/context";
// Componentes
import { ControlledInput, InputSchema } from "../../components/Inputs";
import { SupButton, ForgotButton } from "../../components/Buttons";

// Animação e css
import * as Animatable from 'react-native-animatable'
import styles from './style'

// Import de Formulário e seu resolver(error)
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

function Login(props) {
  // Tradução
  const { singIn, lang } = React.useContext(AuthContext);
  const translate = lang('login')
  // Sistema de uso do UseForm
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(InputSchema)
  });

  // Apenas um alert, para retornar um array, das informações
  const onSubmit = (data) => Alert.alert(JSON.stringify(data));

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Animatable.View animation='flipInY' style={styles.group}>
            <Image
              source={require("../../assets/icons/killua.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.text}>{translate.title}</Text>
          </Animatable.View>

          <Animatable.View delay={500} animation='fadeInLeft' style={styles.inserts}>
            <ControlledInput
              name="email"
              control={control}
              icon="md-mail"
              placeholder={translate.input_email}
              error={errors.email}
            />
            <ControlledInput
              name="password"
              control={control}
              icon="md-key"
              placeholder={translate.input_pass}
              secureTextEntry={true}
              error={errors.password}
            />
          </Animatable.View>

          <Animatable.View delay={500} animation='fadeInUp'>
            <ForgotButton
              caption="Button"
              button={translate.forget}
              style={styles.cupertinoButtonBlueTextColor}
            ></ForgotButton>
            <SupButton
              title={translate.button}
              onPress={handleSubmit(onSubmit)}
            />
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
    </View >
  );
}

export default Login;