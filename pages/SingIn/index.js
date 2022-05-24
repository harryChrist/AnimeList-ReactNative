import React, { Component, useState, useEffect } from "react";
import { View, Image, Text, Alert } from "react-native";

// Componentes
import {ControlledInput, InputSchema} from "../../components/Inputs";
import ForgotButton from "../../components/ForgotButton";
import {SupButton} from "../../components/Buttons";

// Animação e css
import * as Animatable from 'react-native-animatable'
import styles from './style'

// Import de Formulário e seu resolver(error)
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

function Login(props) {
  // Sistema de uso do UseForm
  const { control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(InputSchema)
  });

  // Apenas um alert, para retornar um array, das informações
  const onSubmit = (data) => Alert.alert(JSON.stringify(data));

  return (
    <View style={styles.container}>
      <Animatable.View animation='flipInY' style={styles.group}>
        <Image
          source={require("../../assets/icons/killua.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.text}>Welcome</Text>
      </Animatable.View>
      
      <Animatable.View delay={500} animation='fadeInLeft' style={styles.inserts}>
        <ControlledInput
          name="email"
          control={control}
          icon="md-mail"
          placeholder="Email or Username"
          error={errors.email}
        />
        <ControlledInput
          name="password"
          control={control}
          icon="md-key"
          placeholder="Password"
          secureTextEntry={true}
          error={errors.password}
        />
      </Animatable.View>

      <Animatable.View delay={500} animation='fadeInUp'>
      <ForgotButton
        caption="Button"
        button="Forgot your password?"
        style={styles.cupertinoButtonBlueTextColor}
      ></ForgotButton>
      <SupButton
        title="LOGIN"
        onPress={handleSubmit(onSubmit)}
      />
      </Animatable.View>
    </View>
  );
}

export default Login;