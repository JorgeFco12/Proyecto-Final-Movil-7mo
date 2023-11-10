import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Principal = () => {
  return (
    <View style={styles.container}>
      <Text>¡Bienvenido a la pestaña Principal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Principal;
