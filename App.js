import React, { useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components'

import Login from './routes/Login/index'
import Home from './routes/Screens/index'

import { LogBox } from 'react-native';

import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { collection, getDocs, doc, setDoc, query } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth";

import { db } from './data/config/firebase';
import { Auth } from './data/config/firebase'
import { CreateUser } from './data/services/Database';

import { AuthContext } from './context/context';
import { i18n } from './data/language';

const cores = {
  bg: '#191a24',
};
export default function App() {
  LogBox.ignoreAllLogs()
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [lang, setLang] = useState('en_us');
  const [sexo, setSexo] = useState('sim');

  const authContext = useMemo(() => ({
    setLang: (key) => {
      setLang(key);
    },
    getUser: () => {
      const auth = getAuth();
      const user = auth.currentUser;
      return user;
    },
    lang: (key) => {
      return i18n(key, lang);
    },
    singIn: (email, password) => {
      setIsLoading(false);
      signInWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUserToken(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message)
        });
    },
    singOut: () => {
      setIsLoading(false);
      signOut(Auth).then(() => {
        // Sign-out successful.
        setUserToken(null);
      }).catch((error) => {
        // An error happened.
        console.log(error)
        return false;
      });
    },
    singUp: async (user, email, password) => {
      //registerUser(user, email, password)
      try {
        await createUserWithEmailAndPassword(Auth, email, password)
          .catch((err) =>
            console.log(err)
          ).then((re) => {
            if (re) {
              setUserToken(re.user); // user.uid = banco de dados
              CreateUser(re.user.uid)
            }
          });
        await updateProfile(Auth.currentUser, {
          displayName: user,
          photoURL: 'https://cdn.discordapp.com/attachments/981189453777338419/981189539789934612/unknown.png',
        })
          .catch(
            (err) => console.log(err)
          );
      } catch (err) {
        console.log(err);
      }
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [userToken]);
  return (
    <AuthContext.Provider value={authContext}>
      <ThemeProvider theme={cores}>
        <NavigationContainer>
          <StatusBar backgroundColor="rgba(47,6,124,1)" barStyle="light-content" />
          {userToken !== null ? (
            <Home />
          ) : (
            <Login />
          )}
        </NavigationContainer>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}