// // import React, { useState, useRef, useEffect } from "react";
// // import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
// // import FlagSelector from "../components/FlagSelector";
// // import { GLView } from "expo-gl";
// // import { Renderer } from "expo-three";
// // import { Asset } from "expo-asset";
// // import {
// //   PerspectiveCamera,
// //   Scene,
// //   AmbientLight,
// //   DirectionalLight,
// //   Clock,
// //   MeshStandardMaterial,
// //   WebGLRenderer,
// // } from "three";
// // import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// // import LottieView from "lottie-react-native";
// // import { Text } from "react-native";

// // // 상수 추가 (backgroundImages 아래에)
// // const streakDays = 7; // 연속 학습일수 하드코딩

// // // 국가별 이미지 경로
// // const backgroundImages = {
// //   usa: require("../../assets/images/USA_bg3.png"),
// //   spain: require("../../assets/images/Spain_bg3.png"),
// //   japan: require("../../assets/images/Japan_bg3.png"),
// // };

// // // 3D 모델 경로
// // const gooseModelPath = Asset.fromModule(require("../../assets/model/goose.glb")).uri;

// // const Home = () => {
// //   const [selectedCountry, setSelectedCountry] = useState("usa");
// //   const sceneRef = useRef(new Scene());
// //   const clockRef = useRef(new Clock());
// //   const modelRef = useRef(null);

// //   const onContextCreate = async (gl) => {
// //     const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

// //     // 기본 렌더러 설정
// //     const renderer = new Renderer({ gl });
// //     renderer.setSize(width, height);

// //     // 카메라 설정
// //     const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
// //     camera.position.z = 20;

// //     // 조명 설정
// //     const ambientLight = new AmbientLight(0xffffff, 1.0);
// //     sceneRef.current.add(ambientLight);

// //     const directionalLight = new DirectionalLight(0xffffff, 1.0);
// //     directionalLight.position.set(1, 1, 1);
// //     sceneRef.current.add(directionalLight);

// //     // GLTF 로더 설정
// //     const loader = new GLTFLoader();
    
// //     // WebGL 컨텍스트 설정 최적화
// //     gl.pixelStorei = () => {}; // pixelStorei 에러 방지

// //     try {
// //       const gltf = await new Promise((resolve, reject) => {
// //         loader.load(
// //           gooseModelPath,
// //           resolve,
// //           (progress) => console.log('Loading:', (progress.loaded / progress.total * 100) + '%'),
// //           reject
// //         );
// //       });

// //       const model = gltf.scene;
// //       model.position.set(0,-10, 0);
// //       model.scale.set(80, 80, 80);
// //       model.rotation.x = Math.PI / 10;  // 약간 아래를 보도록 설정 (각도는 조절 가능)
// // model.rotation.y = Math.PI / 4;  // 기존의 y축 회전은 유지
      
// //       modelRef.current = model;
// //       sceneRef.current.add(model);

// //     } catch (error) {
// //       console.error("Model loading error:", error);
// //     }

// //     // 렌더링 루프
// //     const render = () => {
// //       const deltaTime = clockRef.current.getDelta();

// //       if (modelRef.current) {
// //         modelRef.current.rotation.y += deltaTime * 0.5;
// //       }

// //       renderer.render(sceneRef.current, camera);
// //       gl.endFrameEXP();
// //       requestAnimationFrame(render);
// //     };

// //     render();
// //   };
// //   return (
// //     <ImageBackground
// //       source={backgroundImages[selectedCountry]}
// //       style={styles.background}
// //       resizeMode="cover"
// //     >
// //       <View style={styles.container}>
// //         <View style={styles.headerContainer}>
// //           <View style={styles.leftContainer}>
// //             <FlagSelector selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
// //           </View>
// //           <View style={styles.streakContainer}>
// //             <LottieView
// //               source={require("../../assets/icons/fire.json")}
// //               autoPlay
// //               loop
// //               style={styles.lottieFile}
// //             />
// //             <Text style={styles.streakText}>{streakDays}</Text>
// //           </View>
// //         </View>
// //         <GLView 
// //           style={styles.glView}
// //           onContextCreate={onContextCreate}
// //         />
// //       </View>
// //     </ImageBackground>
// //   );
  
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //   },
// //   container: {
// //     flex: 1,
// //     position: 'relative',
// //   },
// //   headerContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between', // 왼쪽과 오른쪽 끝으로 정렬
// //     paddingHorizontal: 20, // 좌우 여백
// //     paddingTop: 40, // 상단 여백
// //     width: '100%',
// //   },
// //   leftContainer: {
// //     justifyContent: 'center', // 세로축 중앙 정렬 (FlagSelector 독립적 정렬)
// //   },
// //   streakContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center', // 불과 숫자 정렬
// //     marginTop: 36, // StreakContainer만 아래로 이동
// //   },
// //   streakText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#FF3B30',
// //     marginLeft: 5, // 불과 숫자 간격 조정
// //   },
// //   lottieFile: {
// //     width: 30,
// //     height: 30,
// //   },
// //   glView: {
// //     position: "absolute",
// //     bottom: Dimensions.get("window").height * 0.2,
// //     alignSelf: "center",
// //     width: Dimensions.get("window").width * 0.9,
// //     height: Dimensions.get("window").height * 0.5,
// //   },
// // });


// // export default Home;

// import React, { useState, useRef, useEffect } from "react";
// import { View, StyleSheet, ImageBackground, FlatList,Dimensions } from "react-native";
// import FlagSelector from "../components/FlagSelector";
// import { GLView } from "expo-gl";
// import { Renderer } from "expo-three";
// import { Asset } from "expo-asset";
// import {
//   PerspectiveCamera,
//   Scene,
//   AmbientLight,
//   DirectionalLight,
//   Clock,
//   MeshStandardMaterial,
//   WebGLRenderer,
// } from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import LottieView from "lottie-react-native";
// import { Text } from "react-native";
// import useLanguageStore from "../store/languageStore";

// // 상수 추가 (backgroundImages 아래에)
// const streakDays = 7; // 연속 학습일수 하드코딩

// // 국가별 이미지 경로
// const backgroundImages = {
//   usa: require("../../assets/images/USA_bg3.png"),
//   spain: require("../../assets/images/Spain_bg3.png"),
//   japan: require("../../assets/images/Japan_bg3.png"),
// };

// // 3D 모델 경로
// const gooseModelPath = Asset.fromModule(require("../../assets/model/goose.glb")).uri;

// // 언어별 단어 데이터
// const wordData = {
//   usa: [
//     { word: "Electric", translation: "전기" },
//     { word: "Apple", translation: "사과" },
//     { word: "Book", translation: "책" },
//     { word: "Sun", translation: "태양" },
//     { word: "Moon", translation: "달" },
//   ],
//   spain: [
//     { word: "Eléctrico", translation: "전기" },
//     { word: "Manzana", translation: "사과" },
//     { word: "Libro", translation: "책" },
//     { word: "Sol", translation: "태양" },
//     { word: "Luna", translation: "달" },
//   ],
//   japan: [ //한자어는 옆에 괄호 안에 히라가나로 표기
//     { word: "電気（でんき）", translation: "전기" }, 
//     { word: "りんご", translation: "사과" },       
//     { word: "本（ほん）", translation: "책" },   
//     { word: "太陽（たいよう）", translation: "태양" }, 
//     { word: "月（つき）", translation: "달" },   
//   ],
  
// };



// const Home = () => {
//   const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
//   const setSelectedLanguage = useLanguageStore((state) => state.setSelectedLanguage);
//   const [currentPage, setCurrentPage] = useState(0);
//   const sceneRef = useRef(new Scene());
//   const clockRef = useRef(new Clock());
//   const modelRef = useRef(null);

//   const onContextCreate = async (gl) => {
//     const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

//     // 기본 렌더러 설정
//     const renderer = new Renderer({ gl });
//     renderer.setSize(width, height);

//     // 카메라 설정
//     const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 20;

//     // 조명 설정
//     const ambientLight = new AmbientLight(0xffffff, 1.0);
//     sceneRef.current.add(ambientLight);

//     const directionalLight = new DirectionalLight(0xffffff, 1.0);
//     directionalLight.position.set(1, 1, 1);
//     sceneRef.current.add(directionalLight);

//     // GLTF 로더 설정
//     const loader = new GLTFLoader();
    
//     // WebGL 컨텍스트 설정 최적화
//     gl.pixelStorei = () => {}; // pixelStorei 에러 방지

//     try {
//       const gltf = await new Promise((resolve, reject) => {
//         loader.load(
//           gooseModelPath,
//           resolve,
//           (progress) => console.log('Loading:', (progress.loaded / progress.total * 100) + '%'),
//           reject
//         );
//       });

//       const model = gltf.scene;
//       model.position.set(0,-10, 0);
//       model.scale.set(80, 80, 80);
//       model.rotation.x = Math.PI / 10;  // 약간 아래를 보도록 설정 (각도는 조절 가능)
// model.rotation.y = Math.PI / 4;  // 기존의 y축 회전은 유지
      
//       modelRef.current = model;
//       sceneRef.current.add(model);

//     } catch (error) {
//       console.error("Model loading error:", error);
//     }

//     // 렌더링 루프
//     const render = () => {
//       const deltaTime = clockRef.current.getDelta();

//       if (modelRef.current) {
//         modelRef.current.rotation.y += deltaTime * 0.5;
//       }

//       renderer.render(sceneRef.current, camera);
//       gl.endFrameEXP();
//       requestAnimationFrame(render);
//     };

//     render();
//   };
//   const handlePageChange = (event) => {
//     const offsetX = event.nativeEvent.contentOffset.x;
//     const page = Math.round(offsetX / 304); // 카드의 width값
//     setCurrentPage(page);
//   };

//   const renderWordCard = ({ item }) => (
//     <View style={styles.wordCard}>
//       <Text style={styles.word}>{item.word}</Text>
//       <Text style={styles.translation}>{item.translation}</Text>
//     </View>
//   );


//   return (
//     <ImageBackground
//       source={backgroundImages[selectedLanguage]}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <View style={styles.leftContainer}>
//             <FlagSelector 
//               selectedCountry={selectedLanguage} 
//               onSelect={setSelectedLanguage} 
//             />
//           </View>
//           <View style={styles.streakContainer}>
//             <LottieView
//               source={require("../../assets/icons/fire.json")}
//               autoPlay
//               loop
//               style={styles.lottieFile}
//             />
//             <Text style={styles.streakText}>{streakDays}</Text>
//           </View>
//         </View>
        
//         <FlatList
//           data={wordData[selectedLanguage]}
//           renderItem={renderWordCard}
//           keyExtractor={(item, index) => index.toString()}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           style={styles.wordList}
//           contentContainerStyle={styles.wordListContainer}
//           onMomentumScrollEnd={handlePageChange}
//           snapToInterval={324}
//           decelerationRate={0.8}
//           snapToAlignment="center"
//           initialNumToRender={5}
//         />

//         <View style={styles.pagination}>
//           {wordData[selectedLanguage].map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.dot,
//                 currentPage === index ? styles.activeDot : styles.inactiveDot,
//               ]}
//             />
//           ))}
//         </View>

//         <GLView
//           style={styles.glView}
//           onContextCreate={onContextCreate}
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// const { width: SCREEN_WIDTH } = Dimensions.get('window');
// const CARD_WIDTH = 304;
// const CARD_MARGIN = 10;
// const CARD_TOTAL_WIDTH = CARD_WIDTH + (CARD_MARGIN * 2);

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     position: 'relative',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // 왼쪽과 오른쪽 끝으로 정렬
//     paddingHorizontal: 20, // 좌우 여백
//     paddingTop: 40, // 상단 여백
//     // width: '100%',
//   },
//   leftContainer: {
//     justifyContent: 'center', // 세로축 중앙 정렬 (FlagSelector 독립적 정렬)
//   },
//   streakContainer: {
//     flexDirection: 'row',
//     alignItems: 'center', // 불과 숫자 정렬
//     marginTop: 36, // StreakContainer만 아래로 이동
//   },
//   streakText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FF3B30',
//     marginLeft: 5, // 불과 숫자 간격 조정
//   },
//   lottieFile: {
//     width: 30,
//     height: 30,
//   },
 
//   wordCard: {
//     width: 304,
//     height: 160,
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 10,
//     elevation: 3, // Android 그림자
//     shadowColor: "#000", // iOS 그림자
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   word: { 
//     fontSize: 32,
//     fontWeight: "600",
//     marginBottom: 8,
//     color: "#000"
//   },
//   translation: { 
//     fontSize: 24,
//     color: "#000"
//   },
//   wordList: { 
//     height: 160,
//     marginTop: 40,
//     zIndex: 1,
//   },
//   wordListContainer: {
//     paddingHorizontal: (SCREEN_WIDTH - CARD_TOTAL_WIDTH) / 2,
//   },
//   pagination: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 16,
//     position: 'absolute',
//     bottom: Dimensions.get("window").height * 0.45,
//     width: '100%',
//     zIndex: 2,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 6,
//     borderWidth: 1,
//     borderColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   activeDot: {
//     backgroundColor: "#000",
//     transform: [{ scale: 1.2 }],
//   },
//   inactiveDot: {
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//   },
//   glView: {
//     position: "absolute",
//     bottom: Dimensions.get("window").height * 0.2,
//     alignSelf: "center",
//     width: Dimensions.get("window").width * 0.9,
//     height: Dimensions.get("window").height * 0.5,
//   },
// });


// export default Home;

import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, ImageBackground, FlatList, Dimensions } from "react-native";
import FlagSelector from "../components/FlagSelector";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import { Asset } from "expo-asset";
import {
  PerspectiveCamera,
  Scene,
  AmbientLight,
  DirectionalLight,
  Clock,
  MeshStandardMaterial,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import LottieView from "lottie-react-native";
import { Text } from "react-native";
import useLanguageStore from "../store/languageStore";

const streakDays = 7;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = 304;
const CARD_MARGIN = 10;
const CARD_TOTAL_WIDTH = CARD_WIDTH + (CARD_MARGIN * 2);

const backgroundImages = {
  usa: require("../../assets/images/USA_bg3.png"),
  spain: require("../../assets/images/Spain_bg3.png"),
  japan: require("../../assets/images/Japan_bg3.png"),
};

const gooseModelPath = Asset.fromModule(require("../../assets/model/goose.glb")).uri;

const wordData = {
  usa: [
    { word: "Electric", translation: "전기" },
    { word: "Apple", translation: "사과" },
    { word: "Book", translation: "책" },
    { word: "Sun", translation: "태양" },
    { word: "Moon", translation: "달" },
  ],
  spain: [
    { word: "Eléctrico", translation: "전기" },
    { word: "Manzana", translation: "사과" },
    { word: "Libro", translation: "책" },
    { word: "Sol", translation: "태양" },
    { word: "Luna", translation: "달" },
  ],
  japan: [
    { word: "電気（でんき）", translation: "전기" },
    { word: "りんご", translation: "사과" },
    { word: "本（ほん）", translation: "책" },
    { word: "太陽（たいよう）", translation: "태양" },
    { word: "月（つき）", translation: "달" },
  ],
};

const Home = () => {
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const setSelectedLanguage = useLanguageStore((state) => state.setSelectedLanguage);
  const [currentPage, setCurrentPage] = useState(0);
  const sceneRef = useRef(new Scene());
  const clockRef = useRef(new Clock());
  const modelRef = useRef(null);
  const animationFrameRef = useRef();

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 20;

    const ambientLight = new AmbientLight(0xffffff, 1.0);
    sceneRef.current.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(1, 1, 1);
    sceneRef.current.add(directionalLight);

    const loader = new GLTFLoader();
    gl.pixelStorei = () => {};

    try {
      const gltf = await new Promise((resolve, reject) => {
        loader.load(
          gooseModelPath,
          resolve,
          (progress) => console.log('Loading:', (progress.loaded / progress.total * 100) + '%'),
          reject
        );
      });

      const model = gltf.scene;
      model.position.set(0, -10, 0);
      model.scale.set(80, 80, 80);
      model.rotation.x = Math.PI / 10;
      model.rotation.y = Math.PI / 4;
      
      modelRef.current = model;
      sceneRef.current.add(model);

    } catch (error) {
      console.error("Model loading error:", error);
    }

    const render = () => {
      const deltaTime = clockRef.current.getDelta();
      
      if (modelRef.current) {
        modelRef.current.rotation.y += deltaTime * 0.5;
      }

      renderer.render(sceneRef.current, camera);
      gl.endFrameEXP();
      
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handlePageChange = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / CARD_TOTAL_WIDTH);
    setCurrentPage(page);
  };

  const renderWordCard = ({ item }) => (
    <View style={styles.wordCard}>
      <Text style={styles.word}>{item.word}</Text>
      <Text style={styles.translation}>{item.translation}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={backgroundImages[selectedLanguage]}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftContainer}>
            <FlagSelector 
              selectedCountry={selectedLanguage} 
              onSelect={setSelectedLanguage} 
            />
          </View>
          <View style={styles.streakContainer}>
            <LottieView
              source={require("../../assets/icons/fire.json")}
              autoPlay
              loop
              style={styles.lottieFile}
            />
            <Text style={styles.streakText}>{streakDays}</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <FlatList
            data={wordData[selectedLanguage]}
            renderItem={renderWordCard}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={styles.wordList}
            contentContainerStyle={styles.wordListContainer}
            onMomentumScrollEnd={handlePageChange}
            snapToInterval={CARD_TOTAL_WIDTH}
            decelerationRate={0.8}
            snapToAlignment="center"
            initialNumToRender={5}
          />

          <View style={styles.pagination}>
            {wordData[selectedLanguage].map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentPage === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        <GLView
          style={styles.glView}
          onContextCreate={onContextCreate}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    position: 'relative',
    zIndex: 1,
    height:220
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  leftContainer: {
    justifyContent: 'center',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 36,
  },
  streakText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginLeft: 5,
  },
  lottieFile: {
    width: 30,
    height: 30,
  },
  wordList: {
    height: 160,
    marginTop: 40,
  },
  wordListContainer: {
    paddingHorizontal: (SCREEN_WIDTH - CARD_TOTAL_WIDTH) / 2,
  },
  wordCard: {
    width: CARD_WIDTH,
    height: 160,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: CARD_MARGIN,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  word: { 
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000"
  },
  translation: { 
    fontSize: 24,
    color: "#000"
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,  // 12에서 16으로 증가
    position: 'absolute',  // 이 부분 추가
    bottom: 0,            // 이 부분 추가
    width: '100%',        // 이 부분 추가
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#444444",
  },
  inactiveDot: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  glView: {
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.2,
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.5,
    zIndex: 0,
  },
});

export default Home;