// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { View, StyleSheet } from "react-native";
// import SvgUri from "react-native-svg-uri"; // SVG를 위한 모듈
// import Home from "../screens/Home";
// import Read from "../screens/Read";
// import Voice from "../screens/Voice";
// import Diary from "../screens/Diary";

// const Tab = createBottomTabNavigator();

// const BottomTabNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={({ route }) => ({
//           tabBarStyle: styles.tabBar,
//           tabBarShowLabel: false, // 라벨 숨기기
//           tabBarIcon: ({ focused }) => {
//             let iconPath;

//             // 아이콘 설정
//             switch (route.name) {
//               case "Home":
//                 iconPath = focused
//                   ? require("../../assets/icons/home_on.svg")
//                   : require("../../assets/icons/home_off.svg");
//                 break;
//               case "Read":
//                 iconPath = focused
//                   ? require("../../assets/icons/read_on.svg")
//                   : require("../../assets/icons/read_off.svg");
//                 break;
//               case "Voice":
//                 iconPath = focused
//                   ? require("../../assets/icons/voice_on.svg")
//                   : require("../../assets/icons/voice_off.svg");
//                 break;
//               case "Diary":
//                 iconPath = focused
//                   ? require("../../assets/icons/diary_on.svg")
//                   : require("../../assets/icons/diary_off.svg");
//                 break;
//               default:
//                 break;
//             }

//             return (
//               <View style={styles.iconContainer}>
//                 <SvgUri source={iconPath} />
//               </View>
//             );
//           },
//         })}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Read" component={Read} />
//         <Tab.Screen name="Voice" component={Voice} />
//         <Tab.Screen name="Diary" component={Diary} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     height: 60,
//     backgroundColor: "#ffffff",
//     borderTopWidth: 1,
//     borderTopColor: "#e0e0e0",
//   },
//   iconContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default BottomTabNavigation;
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import Home from "../screens/Home";
import Read from "../screens/Read";
import Voice from "../screens/Voice";
import Diary from "../screens/Diary";

// SVG 아이콘 import
import HomeOff from "../../assets/icons/home_off.svg";
import HomeOn from "../../assets/icons/home_on.svg";
import ReadOff from "../../assets/icons/read_off.svg";
import ReadOn from "../../assets/icons/read_on.svg";
import VoiceOff from "../../assets/icons/voice_off.svg";
import VoiceOn from "../../assets/icons/voice_on.svg";
import DiaryOff from "../../assets/icons/diary_off.svg";
import DiaryOn from "../../assets/icons/diary_on.svg";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false, // Header 제거
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: false, // 라벨 숨기기
          tabBarIcon: ({ focused }) => {
            let Icon;

            // 아이콘 설정
            switch (route.name) {
              case "Home":
                Icon = focused ? HomeOn : HomeOff;
                break;
              case "Read":
                Icon = focused ? ReadOn : ReadOff;
                break;
              case "Voice":
                Icon = focused ? VoiceOn : VoiceOff;
                break;
              case "Diary":
                Icon = focused ? DiaryOn : DiaryOff;
                break;
              default:
                break;
            }

            return (
              <View style={styles.iconContainer}>
                <Icon width={24} height={24} />
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Read" component={Read} />
        <Tab.Screen name="Voice" component={Voice} />
        <Tab.Screen name="Diary" component={Diary} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 80, // 탭바 높이
    backgroundColor: "#ffffff", // 탭바 배경색
    position: "absolute", // 화면 하단에 고정
    bottom: 0, // 화면 아래쪽에 위치
    left: 0, // 화면 왼쪽 끝
    right: 0, // 화면 오른쪽 끝
    paddingVertical: 10, // 탭바 전체 위아래 패딩
    borderTopLeftRadius: 20, // 좌측 상단 라운드
    borderTopRightRadius: 20, // 우측 상단 라운드
  },
  iconContainer: {
    justifyContent: "center", // 수직 중앙 정렬
    alignItems: "center", // 수평 중앙 정렬
    marginTop: 24, // 아이콘 위쪽 마진
    marginBottom: 0, // 아이콘 아래쪽 마진
  },
});



export default BottomTabNavigation;
