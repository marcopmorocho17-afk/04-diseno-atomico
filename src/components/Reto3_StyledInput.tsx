import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface StyledInputProps {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  error?: boolean;
}

export default function StyledInput({
  value,
  placeholder,
  onChangeText,
  error = false,
}: StyledInputProps) {
  return (
    <View style={[styles.container, error && styles.containerError]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#94a3b8"
        style={[styles.input, error && styles.inputError]}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {error ? <Text style={styles.errorText}>Campo inválido</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#cbd5e1',
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  containerError: {
    borderColor: '#ef4444',
  },
  input: {
    backgroundColor: '#fff',
    color: '#0f172a',
    minHeight: 48,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 6,
  },
});
