import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ResultadoCalculoProps {
  monto: number;
  propina: number;
}

const ResultadoCalculo: React.FC<ResultadoCalculoProps> = ({ monto, propina }) => {
  const montoPropina = (monto * propina) / 100;
  const total = monto + montoPropina;

  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        <Text style={styles.label}>Monto de Propina:</Text>
        <Text style={styles.valor}>
          ${isNaN(montoPropina) ? '0.00' : montoPropina.toFixed(2)}
        </Text>
      </View>
      <View style={styles.fila}>
        <Text style={styles.label}>Total a Pagar:</Text>
        <Text style={styles.valorTotal}>
          ${isNaN(total) ? '0.00' : total.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  valorTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default ResultadoCalculo;