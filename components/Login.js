import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  // Lógica de inicio de sesión u otros estados si es necesario

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí

    // Después de iniciar sesión, navega a la pestaña "principal"
    navigation.navigate('Principal');
  };

  return (
    <View style={styles.container}>
      <Text>hola</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#dc0a2d',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
