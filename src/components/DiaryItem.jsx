// components/DiaryItem.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DiaryItem = ({ date, day, content, emotion }) => {
  const emotionImages = {
    happy: require('../../assets/images/face_happy.png'),
    sad: require('../../assets/images/face_sad.png'),
    angry: require('../../assets/images/face_angry.png'),
    love: require('../../assets/images/face_love.png'),
  };

  return (
    <View style={styles.container}>
      <Image 
        source={emotionImages[emotion]} 
        style={styles.emotionImage}
      />
      <View style={styles.contentContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.day}>{day}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  emotionImage: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  dateContainer: {
    flexDirection: 'column',  // 세로 방향으로 변경
    marginBottom: 8,
  },
  date: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,  // 날짜와 요일 사이 간격
  },
  day: {
    fontSize: 14,
    color: '#666666',
  },
  content: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 22,
    marginTop: 8,  // 날짜/요일과 내용 사이 간격
  },
});

export default DiaryItem;