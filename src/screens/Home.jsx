// import React, { useState, useRef, useEffect } from "react";
// import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
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

// const Home = () => {
//   const [selectedCountry, setSelectedCountry] = useState("usa");
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
//   return (
//     <ImageBackground
//       source={backgroundImages[selectedCountry]}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <View style={styles.leftContainer}>
//             <FlagSelector selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
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
//         <GLView 
//           style={styles.glView}
//           onContextCreate={onContextCreate}
//         />
//       </View>
//     </ImageBackground>
//   );
  
// };

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
//     width: '100%',
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
import { View, StyleSheet, ImageBackground, FlatList,Dimensions } from "react-native";
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
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import LottieView from "lottie-react-native";
import { Text } from "react-native";
import useLanguageStore from "../store/languageStore";

// 상수 추가 (backgroundImages 아래에)
const streakDays = 7; // 연속 학습일수 하드코딩

// 국가별 이미지 경로
const backgroundImages = {
  usa: require("../../assets/images/USA_bg3.png"),
  spain: require("../../assets/images/Spain_bg3.png"),
  japan: require("../../assets/images/Japan_bg3.png"),
};

// 3D 모델 경로
const gooseModelPath = Asset.fromModule(require("../../assets/model/goose.glb")).uri;

// 언어별 단어 데이터
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
  japan: [ //한자어는 옆에 괄호 안에 히라가나로 표기
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

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    // 기본 렌더러 설정
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    // 카메라 설정
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 20;

    // 조명 설정
    const ambientLight = new AmbientLight(0xffffff, 1.0);
    sceneRef.current.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(1, 1, 1);
    sceneRef.current.add(directionalLight);

    // GLTF 로더 설정
    const loader = new GLTFLoader();
    
    // WebGL 컨텍스트 설정 최적화
    gl.pixelStorei = () => {}; // pixelStorei 에러 방지

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
      model.position.set(0,-10, 0);
      model.scale.set(80, 80, 80);
      model.rotation.x = Math.PI / 10;  // 약간 아래를 보도록 설정 (각도는 조절 가능)
model.rotation.y = Math.PI / 4;  // 기존의 y축 회전은 유지
      
      modelRef.current = model;
      sceneRef.current.add(model);

    } catch (error) {
      console.error("Model loading error:", error);
    }

    // 렌더링 루프
    const render = () => {
      const deltaTime = clockRef.current.getDelta();

      if (modelRef.current) {
        modelRef.current.rotation.y += deltaTime * 0.5;
      }

      renderer.render(sceneRef.current, camera);
      gl.endFrameEXP();
      requestAnimationFrame(render);
    };

    render();
  };

  const handlePageChange = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / 304); // 카드의 width값
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
        
        <FlatList
          data={wordData[selectedLanguage]}
          renderItem={renderWordCard}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={styles.wordList}
          onMomentumScrollEnd={handlePageChange}
          snapToInterval={324} // 304(카드 width) + 20(좌우 마진)
          decelerationRate="fast"
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
    position: 'relative',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // 왼쪽과 오른쪽 끝으로 정렬
    paddingHorizontal: 20, // 좌우 여백
    paddingTop: 40, // 상단 여백
    // width: '100%',
  },
  leftContainer: {
    justifyContent: 'center', // 세로축 중앙 정렬 (FlagSelector 독립적 정렬)
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center', // 불과 숫자 정렬
    marginTop: 36, // StreakContainer만 아래로 이동
  },
  streakText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginLeft: 5, // 불과 숫자 간격 조정
  },
  lottieFile: {
    width: 30,
    height: 30,
  },
  wordList: { height: 160, marginTop: 20 },
  wordCard: {
    width: 304,
    height: 160,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    elevation: 3, // Android 그림자
    shadowColor: "#000", // iOS 그림자
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
  wordList: { 
    height: 160,
    marginTop: 40,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#000",
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
  },
});


export default Home;

