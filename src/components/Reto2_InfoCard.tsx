import React from 'react';
import { Image, StyleSheet, Text, View, type ImageSourcePropType } from 'react-native';

interface InfoCardProps {
  title: string;
  description?: string;
  image?: ImageSourcePropType;
  children?: React.ReactNode;
}

export default function InfoCard({ title, description, image, children }: InfoCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {image ? <Image source={image} style={styles.image} resizeMode="cover" /> : null}
      {description ? <Text style={styles.description}>{description}</Text> : null}
      {children ? <View style={styles.content}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  image: {
    borderRadius: 12,
    height: 160,
    marginBottom: 12,
    width: '100%',
  },
  description: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
  },
  content: {
    marginTop: 12,
  },
});
