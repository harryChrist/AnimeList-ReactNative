import React, { useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components'

import Login from './routes/Login/index'
import Home from './routes/Screens/index'


import { AuthContext } from './context/context';
import { i18n } from './data/language';

const cores = {
  bg: '#191a24',
};
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [lang, setLang] = useState('en_us');


  const authContext = useMemo(() => ({
    setLang: (key) => {
      setLang(key);
    },
    lang: (key) => {
      return i18n(key, lang);
    },
    singIn: () => {
      setUserToken('shiro');
      setIsLoading(false);
    },
    singOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    singUp: () => {
      setUserToken('shiro');
      setIsLoading(false);
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