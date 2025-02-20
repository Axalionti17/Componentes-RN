// App.tsx
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import InputMonto from './app/componentes/InputMonto';
import SelectorPropina from './app/componentes/SelectorPropina';
import ResultadoCalculo from './app/componentes/ResultadoCalculo';
import HistorialOperaciones from './app/componentes/HistorialOperaciones';

interface CalculoPropina {
  id: number;
  montoOriginal: number;
  porcentajePropina: number;
  montoPropina: number;
  total: number;
}

export default function App() {
  const [monto, setMonto] = useState<string>('');
  const [propina, setPropina] = useState<number>(15);
  const [historial, setHistorial] = useState<CalculoPropina[]>([]);

  const calcularPropina = () => {
    const montoNumerico = parseFloat(monto);
    if (isNaN(montoNumerico)) return;

    const propinaCalculada = (montoNumerico * propina) / 100;
    const totalPagar = montoNumerico + propinaCalculada;

    const nuevoCalculo: CalculoPropina = {
      id: Date.now(),
      montoOriginal: montoNumerico,
      porcentajePropina: propina,
      montoPropina: propinaCalculada,
      total: totalPagar,
    };

    setHistorial([nuevoCalculo, ...historial]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.calculadora}>
        <InputMonto 
          monto={monto} 
          setMonto={setMonto}
          onMontoChange={calcularPropina}
        />
        <SelectorPropina 
          propina={propina} 
          setPropina={setPropina}
          onPropinaChange={calcularPropina}
        />
        <ResultadoCalculo 
          monto={parseFloat(monto)} 
          propina={propina} 
        />
        <HistorialOperaciones historial={historial} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calculadora: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});
