import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

interface OperacionHistorial {
  id: number;
  montoOriginal: number;
  porcentajePropina: number;
  montoPropina: number;
  total: number;
}

interface HistorialOperacionesProps {
  historial: OperacionHistorial[];
}

const HistorialOperaciones: React.FC<HistorialOperacionesProps> = ({ historial }) => {
  const renderItem = ({ item }: { item: OperacionHistorial }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>Operación</Text>
      <View style={styles.fila}>
        <Text style={styles.label}>Monto Original:</Text>
        <Text style={styles.valor}>${item.montoOriginal.toFixed(2)}</Text>
      </View>
      <View style={styles.fila}>
        <Text style={styles.label}>Propina ({item.porcentajePropina}%):</Text>
        <Text style={styles.valor}>${item.montoPropina.toFixed(2)}</Text>
      </View>
      <View style={styles.fila}>
        <Text style={styles.label}>Total:</Text>
        <Text style={styles.valorTotal}>${item.total.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.historialTitulo}>Historial de Operaciones</Text>
      <FlatList
        data={historial}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  historialTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    color: '#666',
  },
  valor: {
    fontWeight: '500',
    color: '#333',
  },
  valorTotal: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default HistorialOperaciones;