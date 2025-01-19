// screens/WriteDiary.jsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { dummyData } from './Diary';

const EmotionSelector = ({ selectedEmotion, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);
  
  const emotions = [
    { id: 'happy', source: require('../../assets/images/goose_happy.png') },
    { id: 'angry', source: require('../../assets/images/goose_angry.png') },
    { id: 'sad', source: require('../../assets/images/goose_sad.png') },
    { id: 'love', source: require('../../assets/images/goose_love.png') },
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

const WriteDiary = () => {
  const navigation = useNavigation();
  const [content, setContent] = useState('');
  const [emotion, setEmotion] = useState('happy');
  const [showCorrection, setShowCorrection] = useState(false);
  
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`;
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const currentDay = days[currentDate.getDay()];

  const handleSend = () => {
    // 새 일기 데이터 생성
    const newDiary = {
      id: Date.now().toString(),
      date: `${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`,
      day: currentDay,
      content: content,
      emotion: emotion,
    };
    dummyData.unshift(newDiary); // 여기에서 실제로는 글로벌 상태 관리나 API 호출을 통해 데이터를 저장할 것입니다
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSend}>
              <Icon name="send" size={24} color="#2088CA" />
            </TouchableOpacity>
          </View>

          <View style={styles.dateEmotionContainer}>
            <EmotionSelector
              selectedEmotion={emotion}
              onSelect={setEmotion}
            />
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.day}>{currentDay}</Text>
          </View>

          <Text style={styles.prompt}>오늘 하루를 작성해주세요!</Text>
          
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              multiline
              value={content}
              onChangeText={setContent}
              placeholder="Write your day..."
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity 
            style={styles.correctionButton}
            onPress={() => setShowCorrection(!showCorrection)}
          >
            <Icon name="chevron-down" size={28} color="#2088CA" />
          </TouchableOpacity>

          {showCorrection && (
            <View style={styles.correctionContainer}>
              <Text style={styles.correctionText}>
                멋진 하루를 보내셨네요. "It was amazing"이 문법적으로 맞습니다.
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2F2F2',
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
    width: 80,
    height: 80,
  },
  emotionOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  emotionOption: {
    width: 80,
    height: 80,
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
  prompt: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputWrapper: {
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    textAlignVertical: 'top',
  },
  correctionButton: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  correctionContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  correctionText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});

export default WriteDiary;