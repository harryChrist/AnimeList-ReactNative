import React, { Component, useState, useEffect } from "react";
import { View, Image, Text, Alert } from "react-native";

// Components
import ForgotButton from "../../components/ForgotButton";
import {SupButton} from "../../components/Buttons";
import {ControlledInput, InputSchema} from "../../components/Inputs";

// Animação e css
import styles from './style'
import * as Animatable from 'react-native-animatable'

// Import de Formulário e seu resolver(error)
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

function Register(props) {
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
        <Text style={styles.text}>Register</Text>
      </Animatable.View>

      <Animatable.View delay={500} animation='fadeInLeft' style={styles.inserts}>
        <ControlledInput
          name="user"
          control={control}
          icon="ios-person"
          placeholder="User"
          error={errors.user}
        />
        <ControlledInput
          name="email"
          control={control}
          icon="md-mail"
          placeholder="Email"
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
        <ControlledInput
          name="password_confirm"
          control={control}
          icon="md-key"
          placeholder="Password Verify"
          secureTextEntry={true}
          error={errors.password_confirm}
        />
      </Animatable.View>

      <Animatable.View delay={500} animation='fadeInUp'>
        <ForgotButton
          button="Already have an account?"
          local='SingIn'
          style={styles.cupertinoButtonBlueTextColor}
        ></ForgotButton>
      <SupButton
        title="SING UP"
        onPress={handleSubmit(onSubmit)}
      />
      </Animatable.View>
    </View>
  );
}

export default Register;
