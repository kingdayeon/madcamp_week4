// components/VoiceButton.jsx
import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const VoiceButton = ({ isListening, onPress }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        isListening ? styles.listeningButton : styles.micButton
      ]}
      onPress={onPress}
    >
      {isListening ? (
        <Icon name="arrow-up" size={32} color="#2088CA" />
      ) : (
        <Icon name="mic" size={32} color="#FFFFFF" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  micButton: {
    backgroundColor: '#2088CA',
    
  },
  listeningButton: {
    backgroundColor: '#FFFFFF',
  },
});

export default VoiceButton;