import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '@expo/metro-runtime';
import screen01 from './screen/screen01';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import screen02 from './screen/screen02';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="screen1" component={screen01}></Stack.Screen>
        <Stack.Screen name="screen2" component={screen02}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
