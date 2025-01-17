const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.resolver.assetExts.push("glb", "gltf", "png", "jpg");
  config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    assetPlugins: ["expo-asset/tools/hashAssetFiles"], // 해시 처리 설정
  };
  config.resolver = {
    assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...config.resolver.sourceExts, "svg"],
  };

  return config;
})();
