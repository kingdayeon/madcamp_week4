// import React, { useState } from "react";
// import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
// import SpainFlag from "../../assets/icons/SpainFlag.svg";
// import USFlag from "../../assets/icons/USFlag.svg";
// import JapanFlag from "../../assets/icons/JapanFlag.svg";

// const FlagSelector = ({ selectedCountry, onSelect }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const USFlagComponent = () => <USFlag width={24} height={24} />;
//   const SpainFlagComponent = () => <SpainFlag width={24} height={24} />;
//   const JapanFlagComponent = () => <JapanFlag width={24} height={24} />;

//   const countries = [
//     { name: "usa", component: <USFlagComponent /> },
//     { name: "spain", component: <SpainFlagComponent /> },
//     { name: "japan", component: <JapanFlagComponent /> },
//   ];

//   const handleSelect = (country) => {
//     setIsExpanded(false);
//     onSelect(country);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={[
//           styles.base,
//           isExpanded ? styles.expanded : styles.circle,
//         ]}
//         onPress={() => setIsExpanded(!isExpanded)}
//       >
//         {isExpanded ? (
//           <View style={styles.flagsContainer}>
//             {countries.map((country) => (
//               <TouchableOpacity
//                 key={country.name}
//                 style={styles.flagButton}
//                 onPress={() => handleSelect(country.name)}
//               >
//                 {country.component}
//               </TouchableOpacity>
//             ))}
//           </View>
//         ) : (
//           countries.find((c) => c.name === selectedCountry)?.component
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 20,
//     // left: 20,
//   },
//   base: {
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circle: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },
//   expanded: {
//     width: 180,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//   },
//   flagsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     width: "100%",
//     paddingHorizontal: 10,
//   },
//   flagButton: {
//     padding: 10,
//   },
// });

// export default FlagSelector;

// React와 필요한 훅, 컴포넌트들을 불러옵니다
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";

// SVG 국기 이미지들을 불러옵니다
import SpainFlag from "../../assets/icons/SpainFlag.svg";
import USFlag from "../../assets/icons/USFlag.svg";
import JapanFlag from "../../assets/icons/JapanFlag.svg";

// FlagSelector 컴포넌트를 정의합니다. selectedCountry(현재 선택된 국가)와 onSelect(국가 선택 시 실행될 함수)를 props로 받습니다
const FlagSelector = ({ selectedCountry, onSelect }) => {
  // 플래그 선택기가 확장되었는지 여부를 관리하는 state
  const [isExpanded, setIsExpanded] = useState(false);

  // 각 국기 컴포넌트를 정의합니다 (성능 최적화를 위해 미리 생성)
  const USFlagComponent = () => <USFlag width={24} height={24} />;
  const SpainFlagComponent = () => <SpainFlag width={24} height={24} />;
  const JapanFlagComponent = () => <JapanFlag width={24} height={24} />;

  // 사용 가능한 국가들의 배열을 정의합니다
  const countries = [
    { name: "usa", component: <USFlagComponent /> },
    { name: "spain", component: <SpainFlagComponent /> },
    { name: "japan", component: <JapanFlagComponent /> },
  ];

  // 국가가 선택되었을 때 실행되는 함수
  const handleSelect = (country) => {
    setIsExpanded(false);  // 선택기를 접습니다
    onSelect(country);     // 부모 컴포넌트에 선택된 국가를 알립니다
  };

  return (
    // 컨테이너 뷰
    <View style={styles.container}>
      {/* 메인 터치영역 - 확장/축소 상태에 따라 스타일이 달라집니다 */}
      <TouchableOpacity
        style={[
          styles.base,                              // 기본 스타일
          isExpanded ? styles.expanded : styles.circle  // 확장/축소 상태에 따른 스타일
        ]}
        onPress={() => setIsExpanded(!isExpanded)}  // 터치하면 확장/축소 상태를 토글
      >
        {isExpanded ? (
          // 확장된 상태일 때 - 모든 국기를 보여줍니다
          <View style={styles.flagsContainer}>
            {countries.map((country) => (
              <TouchableOpacity
                key={country.name}
                style={styles.flagButton}
                onPress={() => handleSelect(country.name)}
              >
                {country.component}
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          // 축소된 상태일 때 - 선택된 국기만 보여줍니다
          countries.find((c) => c.name === selectedCountry)?.component
        )}
      </TouchableOpacity>
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    position: 'absolute',  // 절대 위치로 설정
    top: 20,              // 상단에서 20px 떨어짐
  },
  base: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",  // 반투명 흰색 배경
    justifyContent: "center",     // 수직 중앙 정렬
    alignItems: "center",         // 수평 중앙 정렬
  },
  circle: {
    width: 60,            // 원형 상태일 때의 크기
    height: 60,
    borderRadius: 30,     // 완전한 원형을 만들기 위해 width/2 값 사용
  },
  expanded: {
    width: 180,           // 확장된 상태일 때의 크기
    height: 60,
    borderRadius: 30,     // 모서리 둥글기
    backgroundColor: "rgba(255, 255, 255, 0.9)",  // 좀 더 진한 흰색 배경
  },
  flagsContainer: {
    flexDirection: "row",           // 가로 방향으로 배치
    justifyContent: "space-around", // 요소들을 균등하게 분배
    alignItems: "center",           // 세로 방향 중앙 정렬
    width: "100%",                  // 전체 너비 사용
    paddingHorizontal: 10,          // 좌우 패딩
  },
  flagButton: {
    padding: 10,          // 터치 영역을 넓히기 위한 패딩
  },
});

export default FlagSelector;