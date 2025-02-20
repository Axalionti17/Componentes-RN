import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

interface InputMontoProps {
  monto: string;
  setMonto: (monto: string) => void;
  onMontoChange: () => void;
}

const InputMonto: React.FC<InputMontoProps> = ({ monto, setMonto, onMontoChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Monto del Consumo</Text>
      <TextInput
        style={styles.input}
        value={monto}
        onChangeText={(text) => {
          setMonto(text);
          onMontoChange();
        }}
        placeholder="Ingrese el monto"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
});

export default InputMonto;