import React, { Component, useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Image, Text, Alert } from "react-native";

import { AuthContext } from "../../context/context";
// Components
import { SupButton, ForgotButton } from "../../components/Buttons";
import { ControlledInput, InputSchema } from "../../components/Inputs";

// Animação e css
import styles from './style'
import * as Animatable from 'react-native-animatable'

// Import de Formulário e seu resolver(error)
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

// Banco de Dados
import { CreateUser } from '../../data/services/Users'

function Register(props) {
  // Tradução
  const { singUp, lang } = React.useContext(AuthContext);
  const translate = lang('singUp')
  // Sistema de uso do UseForm
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(InputSchema)
  });

  const onSubmit = (data) => {
    console.log(data)
  }
  // Apenas um alert, para retornar um array, das informações
  //const onSubmit = (data) => Alert.alert(JSON.stringify(data));

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
              name="user"
              control={control}
              icon="ios-person"
              placeholder={translate.input_user}
              error={errors.user}
            />
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
            <ControlledInput
              name="password_confirm"
              control={control}
              icon="md-key"
              placeholder={translate.input_pass_verify}
              secureTextEntry={true}
              error={errors.password_confirm}
            />
          </Animatable.View>

          <Animatable.View delay={500} animation='fadeInUp'>
            <ForgotButton
              button={translate.forget}
              local='SingIn'
              style={styles.cupertinoButtonBlueTextColor}
            ></ForgotButton>
            <SupButton
              title={translate.button}
              onPress={handleSubmit(CreateUser)}
            />
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Register;
