// screens/Read.jsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SentenceCard from '../components/SentenceCard';
import useLanguageStore from '../store/languageStore';

// 임시 데이터
const sentencesData = {
  usa: [
    {
      sentence: "I haven't made up my mind yet, but I'm leaning towards accepting the offer.",
      translation: "아직 결정을 내리진 않았지만, 그 제안을 받아들일까 생각 중이야.",
    },
    {
      sentence: "Can you give me a hand?",
      translation: "나 좀 도와줄 수 있어?",
    },
    {
      sentence: "I was wondering if you could help me figure this out.",
      translation: "이걸 해결하는 데 네가 도와줄 수 있는지 궁금했어.",
    },
    {
      sentence: "Let me know if there’s anything else I can do to help you out.",
      translation: "내가 너를 더 도울 수 있는 게 있으면 알려줘.",
    },
    {
      sentence: "I’ll keep you posted.",
      translation: "너한테 계속 소식 전할게.",
    },
  ],
  spain: [
    {
      sentence: "Todavía no me he decidido, pero me inclino a aceptar la oferta.",
      translation: "아직 결정을 내리진 않았지만, 그 제안을 받아들일까 생각 중이야.",
    },
    {
      sentence: "¿Me puedes echar una mano?",
      translation: "나 좀 도와줄 수 있어?",
    },
    {
      sentence: "Me preguntaba si podrías ayudarme a resolver esto.",
      translation: "이걸 해결하는 데 네가 도와줄 수 있는지 궁금했어.",
    },
    {
      sentence: "Avísame si hay algo más que pueda hacer para ayudarte.",
      translation: "내가 너를 더 도울 수 있는 게 있으면 알려줘.",
    },
    {
      sentence: "Te mantendré informado.",
      translation: "너한테 계속 소식 전할게.",
    },
  ],
  japan: [
    {
      sentence: "まだ決めていませんが、その提案を受け入れる方向で考えています。",
      translation: "아직 결정을 내리진 않았지만, 그 제안을 받아들일까 생각 중이야.",
    },
    {
      sentence: "手伝ってもらえますか？",
      translation: "나 좀 도와줄 수 있어?",
    },
    {
      sentence: "これを理解するのを手伝ってもらえないでしょうか。",
      translation: "이걸 해결하는 데 네가 도와줄 수 있는지 궁금했어.",
    },
    {
      sentence: "何か他にできることがあったら教えてください。",
      translation: "내가 너를 더 도울 수 있는 게 있으면 알려줘.",
    },
    {
      sentence: "随時お知らせします。",
      translation: "너한테 계속 소식 전할게.",
    },
    
  ],
};


const Read = () => {
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const sentences = sentencesData[selectedLanguage];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>오늘의 문장</Text>
      <View style={styles.cardsContainer}>
        {sentences.map((item, index) => (
          <SentenceCard
            key={index}
            sentence={item.sentence}
            translation={item.translation}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 80,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardsContainer: {
    paddingHorizontal: 24,
    alignItems: 'center', // 컴포넌트들을 가운데 정렬
  },
});

export default Read;