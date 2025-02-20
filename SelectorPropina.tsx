import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

interface SelectorPropinaProps {
  propina: number;
  setPropina: (propina: number) => void;
  onPropinaChange: () => void;
}

const SelectorPropina: React.FC<SelectorPropinaProps> = ({ propina, setPropina, onPropinaChange }) => {
  const [mostrarPersonalizado, setMostrarPersonalizado] = useState(false);
  const porcentajes = [10, 15, 20];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Porcentaje de Propina</Text>
      <View style={styles.botonesContainer}>
        {porcentajes.map((porcentaje) => (
          <TouchableOpacity
            key={porcentaje}
            style={[
              styles.boton,
              propina === porcentaje && styles.botonSeleccionado,
            ]}
            onPress={() => {
              setPropina(porcentaje);
              setMostrarPersonalizado(false);
              onPropinaChange();
            }}
          >
            <Text style={[
              styles.botonTexto,
              propina === porcentaje && styles.botonTextoSeleccionado,
            ]}>{porcentaje}%</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[
            styles.boton,
            mostrarPersonalizado && styles.botonSeleccionado,
          ]}
          onPress={() => setMostrarPersonalizado(true)}
        >
          <Text style={[
            styles.botonTexto,
            mostrarPersonalizado && styles.botonTextoSeleccionado,
          ]}>Otro</Text>
        </TouchableOpacity>
      </View>
      {mostrarPersonalizado && (
        <TextInput
          style={styles.inputPersonalizado}
          value={propina.toString()}
          onChangeText={(text) => {
            const valor = parseInt(text) || 0;
            setPropina(valor);
            onPropinaChange();
          }}
          keyboardType="numeric"
          placeholder="Ingrese porcentaje personalizado"
        />
      )}
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
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  botonSeleccionado: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  botonTexto: {
    textAlign: 'center',
    color: '#333',
  },
  botonTextoSeleccionado: {
    color: 'white',
  },
  inputPersonalizado: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
});

export default SelectorPropina;
