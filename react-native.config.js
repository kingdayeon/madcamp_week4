module.exports = {
  dependencies: {
    "react-native-screens": {
      platforms: {
        ios: {
          codegenConfig: {
            jsPath:
              "./node_modules/react-native-screens/js/react-native-screens.js",
            jsOutputDir: "./generated",
          },
        },
      },
    },
    // 다른 모듈들 추가 가능
  },
};
