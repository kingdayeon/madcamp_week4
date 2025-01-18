// components/SentenceCard.jsx
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SentenceCard = ({ sentence, translation }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.sentence}>{sentence}</Text>
      <Text style={styles.translation}>{translation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    width: '100%',
    alignItems: 'flex-start', // 문장들은 왼쪽 정렬
  },
  sentence: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 8,
  },
  translation: {
    fontSize: 16,
    color: '#606060',
  },
});

export default SentenceCard;