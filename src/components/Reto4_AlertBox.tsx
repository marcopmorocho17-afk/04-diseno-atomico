import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type AlertType = 'success' | 'warning' | 'error';

interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 12,
    padding: 16,
  },
  success: {
    backgroundColor: '#dcfce7',
  },
  warning: {
    backgroundColor: '#fef3c7',
  },
  error: {
    backgroundColor: '#fee2e2',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    color: '#1f2937',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  message: {
    color: '#334155',
    fontSize: 14,
    lineHeight: 20,
  },
  closeButton: {
    alignItems: 'center',
    borderRadius: 999,
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  closeText: {
    color: '#1f2937',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
  },
});

const typeStyles = {
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
} as const;

export default function AlertBox({ type, message, onClose }: AlertBoxProps) {
  return (
    <View style={[styles.box, typeStyles[type]]}>
      <View style={styles.header}>
        <Text style={styles.title}>{type.toUpperCase()}</Text>
        {onClose ? (
          <Pressable accessibilityRole="button" onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>×</Text>
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}
