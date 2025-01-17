import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font"; // 폰트 로드
import * as SplashScreen from "expo-splash-screen"; // SplashScreen 사용
import { setCustomText } from "react-native-global-props";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";

// SplashScreen 초기화 유지
SplashScreen.preventAutoHideAsync();

const setGlobalFont = () => {
  const customTextProps = {
    style: {
      fontFamily: "Pretendard-Regular",
      fontSize: 16,
    },
  };
  setCustomText(customTextProps);
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
      "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadFonts();
      } finally {
        setGlobalFont();
        SplashScreen.hideAsync(); // 폰트 로드 후 SplashScreen 숨기기
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null; // 로딩 중에는 아무것도 렌더링하지 않음
  }

  return <BottomTabNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
