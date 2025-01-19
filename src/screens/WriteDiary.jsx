// screens/WriteDiary.jsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  Image,
  SafeAreaView 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const EmotionSelector = ({ selectedEmotion, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);
  
  const emotions = [
    { id: 'happy', source: require('../../assets/images/face_happy.png') },
    { id: 'angry', source: require('../../assets/images/face_angry.png') },
    { id: 'sad', source: require('../../assets/images/face_sad.png') },
    { id: 'love', source: require('../../assets/images/face_love.png') },
  ];

  return (
    <View style={styles.emotionContainer}>
      {!showOptions ? (
        <TouchableOpacity onPress={() => setShowOptions(true)}>
          <Image 
            source={emotions.find(e => e.id === selectedEmotion).source}
            style={styles.selectedEmotion}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.emotionOptions}>
          {emotions.map((emotion) => (
            <TouchableOpacity
              key={emotion.id}
              onPress={() => {
                onSelect(emotion.id);
                setShowOptions(false);
              }}
            >
              <Image source={emotion.source} style={styles.emotionOption} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const WriteDiary = ({ route }) => {
  const navigation = useNavigation();
  const [content, setContent] = useState('');
  const [emotion, setEmotion] = useState('happy');
  const [showCorrection, setShowCorrection] = useState(false);
  
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`;
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const currentDay = days[currentDate.getDay()];

  const handleSend = () => {
    // 여기에 일기 저장 로직 추가
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSend}>
            <Icon name="send" size={24} color="#2088CA" />
          </TouchableOpacity>
        </View>

        {/* Date and Emotion */}
        <View style={styles.dateEmotionContainer}>
          <EmotionSelector
            selectedEmotion={emotion}
            onSelect={setEmotion}
          />
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.day}>{currentDay}</Text>
        </View>

        {/* Content Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.prompt}>오늘 하루를 작성해주세요!</Text>
          <TextInput
            style={styles.input}
            multiline
            value={content}
            onChangeText={setContent}
            placeholder="Write your day..."
          />
        </View>

        {/* Correction Button */}
        <TouchableOpacity 
          style={styles.correctionButton}
          onPress={() => setShowCorrection(!showCorrection)}
        >
          <Icon name="chevron-down" size={24} color="#2088CA" />
        </TouchableOpacity>

        {/* Correction Text */}
        {showCorrection && (
          <View style={styles.correctionContainer}>
            <Text style={styles.correctionText}>
              멋진 하루를 보내셨나내요. It was amazing이라고 문법적으로는 맞습니다.
            </Text>
          </View>
        )}
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateEmotionContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  emotionContainer: {
    marginBottom: 16,
  },
  selectedEmotion: {
    width: 60,
    height: 60,
  },
  emotionOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  emotionOption: {
    width: 60,
    height: 60,
  },
  date: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  day: {
    fontSize: 14,
    color: '#666666',
  },
  inputContainer: {
    flex: 1,
  },
  prompt: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    fontSize: 16,
    color: '#000000',
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  correctionButton: {
    alignItems: 'center',
    padding: 10,
  },
  correctionContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  correctionText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});

export default WriteDiary;