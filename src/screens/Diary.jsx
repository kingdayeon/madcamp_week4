// // screens/Diary.jsx
// import React from 'react';
// import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
// import DiaryItem from '../components/DiaryItem';
// import Icon from 'react-native-vector-icons/Feather';  // 연필 아이콘용
// import { useNavigation } from '@react-navigation/native';


// // 임시 데이터
// const dummyData = [
//   {
//     id: '1',
//     date: '1월 19일',
//     day: '일요일',
//     content: 'It was amazing',
//     emotion: 'love',
//   },
//   {
//     id: '2',
//     date: '1월 18일',
//     day: '토요일',
//     content: 'It was amazing. Today is Saturday',
//     emotion: 'happy',
//   },
// ];

// const Diary = ({  }) => { 
//   const navigation = useNavigation();

//   const renderItem = ({ item }) => (
//     <DiaryItem
//       date={item.date}
//       day={item.day}
//       content={item.content}
//       emotion={item.emotion}
//     />
//   );

//   return (
//     <SafeAreaView style={styles.container} edges={['top']}>
//       <FlatList
//         data={dummyData}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.listContainer}
//       />
//       <TouchableOpacity 
//         style={styles.addButton}
//         onPress={() => navigation.navigate('WriteDiary')}
//       >
//         <Icon name="edit-2" size={24} color="#2088CA" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   listContainer: {
//     paddingBottom: 100, // 하단 버튼을 위한 여백
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 60,
//     right: '50%',
//     transform: [{ translateX: 30 }], // 버튼 크기의 절반
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
// });

// export default Diary;

// screens/Diary.jsx
import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import DiaryItem from '../components/DiaryItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

// 임시 데이터
export const dummyData = [
 {
   id: '1',
   date: '1월 19일',
   day: '일요일',
   content: 'It was amazing',
   emotion: 'love',
 },
 {
   id: '2',
   date: '1월 18일',
   day: '토요일',
   content: 'It was amazing. Today is Saturday',
   emotion: 'happy',
 },
];

const Diary = () => { 
 const navigation = useNavigation();

 const renderItem = ({ item }) => (
   <DiaryItem
     date={item.date}
     day={item.day}
     content={item.content}
     emotion={item.emotion}
   />
 );

 return (
   <SafeAreaView style={styles.container} edges={['top']}>
     <FlatList
       data={dummyData}
       renderItem={renderItem}
       keyExtractor={item => item.id}
       contentContainerStyle={styles.listContainer}
     />
     <TouchableOpacity 
       style={styles.addButton}
       onPress={() => navigation.navigate('WriteDiary')}
     >
       <Icon name="pencil" size={32} color="#2088CA" />
     </TouchableOpacity>
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#FFFFFF',
 },
 listContainer: {
   paddingBottom: 100,
 },
 addButton: {
   position: 'absolute',
   bottom: 120,
   right: 20, // 오른쪽 마진 추가
   width: 80,
   height: 80,
   borderRadius: 40,
   backgroundColor: '#FFFFFF',
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
});

export default Diary;