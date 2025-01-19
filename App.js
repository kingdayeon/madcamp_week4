import "react-native-gesture-handler"; // 최상단에 위치
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { setCustomText } from "react-native-global-props";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";

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
        SplashScreen.hideAsync();
      }
    };
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <BottomTabNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
