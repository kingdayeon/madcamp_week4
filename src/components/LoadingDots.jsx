import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';

// components/LoadingDots.jsx
const LoadingDots = () => {
  const [dots, setDots] = useState('...');  // 초기값을 '...'로 설정

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '.';
        if (prev === '.') return '..';
        if (prev === '..') return '...';
        return '...';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <Text style={styles.dots}>{dots}</Text>;
};



const styles = StyleSheet.create({
  dots: {
    fontSize: 24,
    color: '#FFFFFF',  // 말풍선 안에서는 흰색으로
    textAlign: 'center',
    width: 40,  // 고정된 너비
  },
});

export default LoadingDots;
