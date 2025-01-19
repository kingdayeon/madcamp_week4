import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import Home from "../screens/Home";
import Read from "../screens/Read";
import Voice from "../screens/Voice";
import DiaryStack from "./DiaryStack"; // 경로 확인

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
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let Icon;

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
        <Tab.Screen name="Diary" component={DiaryStack} />
      </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 0,
  },
});

export default BottomTabNavigation;