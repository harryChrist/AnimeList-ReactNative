import React, { useState, createRef } from "react";
import { Control, Controller, FieldError } from 'react-hook-form';
import { StyleSheet, View, TextInput } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

//import { Input, InputProps } from '../Input/index.jsx'
import styled from 'styled-components/native';
import * as yup from 'yup'
import useDebounce from '../useDebounce/useDebounce'

/*
type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
}*/

// Sistema de erro: usando @hookform/resolvers/yup
export const InputSchema = yup.object({
  user: yup.string().required("Inform your username!"),
  email: yup.string().email("E-mail invalid!").required("Inform your E-mail!"),
  password: yup.string().min(6, "The password requires min six digits!").required("Inform your password!"),
  password_confirm: yup.string().oneOf([yup.ref('password'), null], "Passwords isn't the same!")
})

export const InputSchema2 = yup.object({
  email: yup.string().email("E-mail invalid!").required("Inform your E-mail!"),
  password: yup.string().min(6, "The password requires min six digits!").required("Inform your password!"),
})

// Um Input estilizado, para ser usado para o ControlledInput
export function Input({icon, value, ...rest}) {
  return (
    <View style={[styles.container]}>
      <Icon name={icon || "md-mail"} style={styles.iconStyle}></Icon>
      <TextInput
        value={value}
        placeholderTextColor="#a1a1a1"
        style={styles.inputStyle}
        {...rest}
      ></TextInput>
    </View>
  );
}

import DelayInput from "react-native-debounce-input";

export function SearchInput({icon, value, ...rest}) {
  const inputRef = createRef();
  return (
    <View style={[styles.container]}>
      <DelayInput
        value={value}
        placeholderTextColor="#a1a1a1"
        delayTimeout={500}
        inputRef={inputRef}
        style={styles.inputStyle}
        {...rest}
      />
      <Icon name="search" style={styles.iconStyle} />
    </View>
  );
}


export function ControlledInput({control, name, error, ...rest}) {
  return(
    <>
    <Controller
    name={name}
    control={control}
    render={({ field: {onChange, value}})=> (
      <Input
        onChangeText={onChange}
        value={value}
        {...rest}
      />
    )}
    />
    {
      error && <Error>{error.message}</Error>
    }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    paddingTop: 10,
    paddingLeft: 5,
    justifyContent: 'center',
    height: '100%',
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
  },
  inputStyle: {
    color: "#fff",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
  }
});

const Error = styled.Text`
  color: rgb(255, 51, 51);
  fontSize: 16px;
  text-align: center;
  marginTop: 6px`