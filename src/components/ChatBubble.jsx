import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoadingDots from './LoadingDots'; // 로딩 애니메이션 컴포넌트

const ChatBubble = ({ message, translation, isUser, isLoading }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handlePress = () => {
    if (translation) {
      setShowTranslation(!showTranslation);
    }
  };

  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.botContainer]}>
      <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={translation ? 0.7 : 1}
      >
        <View style={[
          styles.bubble,
          isUser ? styles.userBubble : styles.botBubble,
          isLoading && styles.loadingBubble,  // 로딩 시 특별한 스타일 적용
        ]}>
          {isLoading ? (
            <LoadingDots />
          ) : (
            <Text style={styles.messageText}>
              {showTranslation ? translation : message}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    maxWidth: '80%',
  },
  userContainer: {
    alignSelf: 'flex-end',
  },
  botContainer: {
    alignSelf: 'flex-start',
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    minHeight: 40,
    justifyContent: 'center',
  },
  userBubble: {
    backgroundColor: '#2088CA',
    borderRadius: 40,
    borderBottomRightRadius: 0,
  },
  botBubble: {
    backgroundColor: '#5EBFED',
    borderRadius: 40,
    borderBottomLeftRadius: 0,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
  },
  loadingBubble: {
    width: 80,  // 로딩 말풍선의 고정 너비
    height: 48, // 로딩 말풍선의 고정 높이
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default ChatBubble;
