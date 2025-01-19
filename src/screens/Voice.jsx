import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import ChatBubble from '../components/ChatBubble';
import VoiceButton from '../components/VoiceButton';
import LoadingDots from '../components/LoadingDots';
import useLanguageStore from '../store/languageStore';

const initialMessages = {
  usa: {
    greeting: { text: "Hello, How was your day?", translation: "안녕하세요, 오늘 하루는 어떠셨나요?" },
    userResponse: { text: "It was amazing!" }
  },
  spain: {
    greeting: { text: "¡Hola! ¿Qué tal tu día?", translation: "안녕하세요, 오늘 하루는 어떠셨나요?" },
    userResponse: { text: "¡Fue increíble!" }
  },
  japan: {
    greeting: { text: "今日はどうでしたか?", translation: "안녕하세요, 오늘 하루는 어떠셨나요?" },
    userResponse: { text: "すごく良かったです！" }
  }
};

const Voice = () => {
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const flatListRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const initialGreeting = {
        id: '1',
        text: initialMessages[selectedLanguage].greeting.text,
        translation: initialMessages[selectedLanguage].greeting.translation,
        isUser: false,
      };
      setMessages([initialGreeting]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedLanguage]);

  const handleVoiceButton = () => {
    if (isListening) {
      const userMessage = {
        id: Date.now().toString(),
        text: initialMessages[selectedLanguage].userResponse.text,
        isUser: true,
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsListening(false);
    } else {
      setIsListening(true);
    }
  };

  const renderMessage = ({ item, index }) => (
    <ChatBubble
      message={item.text}
      translation={item.translation}
      isUser={item.isUser}
      isLoading={isLoading && index === messages.length - 1} // 마지막 메시지에 로딩 적용
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messageList}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
        />
        <View style={styles.buttonContainer}>
          <VoiceButton
            isListening={isListening}
            onPress={handleVoiceButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messageList: {
    padding: 16,
    paddingBottom: 100,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
});

export default Voice;
