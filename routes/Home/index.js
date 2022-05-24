// Uso do Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { StyleSheet } from 'react-native';

// Pages
import LibraryScreen from '../Library/index'
import Navegate from '../../pages/Navegate';
import News from '../../pages/News';
import Settings from '../../pages/Settings';

// Icons
import Icon from "react-native-vector-icons/FontAwesome";
let icons = {
  LibraryScreen: "home",
  Navegate: "search",
  News: "th-list",
  Settings: "gear",
}

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = icons[route.name] || "home";
          return <Icon name={iconName} color={color} size={size} style={styles.iconStyle}></Icon>;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#007AFF',
        tabBarActiveBackgroundColor: '#2F067C',
        headerTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 16,
          height: 30,
          margin: 10,
        },
        tabBarItemStyle: {
          margin: -2,
          borderRadius: 16,
        },
        headerSearchBarOptions: {
          placeholder: "Search",
        }
      })}>
      <Tab.Screen name="Library" component={LibraryScreen}/>
      <Tab.Screen name="Navegate" component={Navegate}
        options={{
          headerTitle: 'Navegate',
        }} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 20,
    justifyContent: 'center',
  },
});