import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import AlertBox from '../components/Reto4_AlertBox';
import CustomButton from '../components/Reto1_CustomButton';
import InfoCard from '../components/Reto2_InfoCard';
import StyledInput from '../components/Reto3_StyledInput';

export default function Showcase() {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <CustomButton label="Guardar" variant="primary" onPress={() => undefined} />
        <InfoCard
          title="Diseño Atómico"
          description="Practica la construcción de componentes reutilizables y semánticos."
        />
        <StyledInput
          value={inputValue}
          placeholder="Escribe tu nombre"
          onChangeText={setInputValue}
          error={inputValue.length > 0 && inputValue.length < 3}
        />
        {showAlert ? (
          <AlertBox
            type="warning"
            message="Completa la información antes de continuar."
            onClose={() => setShowAlert(false)}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#FFF8E7',
    flex: 1,
  },
  container: {
    gap: 20,
    padding: 20,
  },
});
