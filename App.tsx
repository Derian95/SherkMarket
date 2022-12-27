import { StatusBar } from 'expo-status-bar';
import {  Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Shrek Market</Text>
      <TextInput
        value={"usuario"}
      />
        <TextInput
        value={"contraseña"}
      />

      <Button
      title='INGRESAR'
      />
    </View>
  );
}

