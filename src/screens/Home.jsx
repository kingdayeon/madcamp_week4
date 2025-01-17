// // // import React, { useState } from "react";
// // // import { View, StyleSheet, Text, ImageBackground } from "react-native";
// // // import FlagSelector from "../components/FlagSelector";

// // // // 국가별 이미지 경로
// // // const backgroundImages = {
// // //   usa: require("../../assets/images/USA_bg2.png"),
// // //   spain: require("../../assets/images/Spain_bg2.png"),
// // //   japan: require("../../assets/images/Japan_bg2.png"),
// // // };

// // // const Home = () => {
// // //   const [selectedCountry, setSelectedCountry] = useState("usa");

// // //   return (
// // //     <ImageBackground
// // //       source={backgroundImages[selectedCountry]}
// // //       style={styles.background}
// // //       resizeMode="cover" // 이미지를 전체 배경으로 덮음
// // //     >
// // //       <View style={styles.header}>
// // //         <FlagSelector selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
// // //       </View>
// // //         </ImageBackground>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   background: {
// // //     flex: 1, // 화면을 채우도록 설정
// // //   },
// // //   header: {
// // //     position: "absolute",
// // //     top: 50,
// // //     left: 20,
// // //   },
// // //   });

// // // export default Home;

// // import React, { useState, useRef } from "react";
// // import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
// // import FlagSelector from "../components/FlagSelector";
// // import { GLView } from "expo-gl";
// // import { Renderer, TextureLoader } from "expo-three";
// // import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// // import { PerspectiveCamera, Scene, AmbientLight, DirectionalLight } from "three";
// // import { Asset } from "expo-asset";




// // // 국가별 이미지 경로
// // const backgroundImages = {
// //   usa: require("../../assets/images/USA_bg2.png"),
// //   spain: require("../../assets/images/Spain_bg2.png"),
// //   japan: require("../../assets/images/Japan_bg2.png"),
// // };

// // // 3D 모델 경로
// // const gooseModelPath = Asset.fromModule(require("../../assets/model/goose.glb")).uri;

// // const Home = () => {
// //   const [selectedCountry, setSelectedCountry] = useState("usa");
// //   const scene = useRef(new Scene()).current;
// //   const camera = useRef(
// //     new PerspectiveCamera(75, Dimensions.get("window").width / Dimensions.get("window").height, 0.1, 1000)
// //   ).current;

// //   const onContextCreate = async (gl) => {
// //     const renderer = new Renderer({ gl });
// //     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
// //     renderer.setPixelRatio(Dimensions.get("window").scale);

// //     camera.position.z = 20;

// //     // Ambient light
// //     const ambientLight = new AmbientLight(0xffffff, 0.5);
// //     scene.add(ambientLight);

// //     // Directional light
// //     const directionalLight = new DirectionalLight(0xffffff, 1);
// //     directionalLight.position.set(5, 5, 5);
// //     scene.add(directionalLight);

// //     // Load 3D Model
// //     const loader = new GLTFLoader();
// //     loader.load(
// //       gooseModelPath,
// //       (gltf) => {
// //         console.log("Model loaded:", gltf);
// //         const model = gltf.scene;
// //         model.position.set(0, -1, 0);
// //         model.scale.set(10, 10, 10);
// //         scene.add(model);
// //       },
// //       undefined,
// //       (error) => {
// //         console.error("Model loading error:", error);
// //       }
// //     );
    

// //     // Render loop
// //     const render = () => {
// //       requestAnimationFrame(render);
// //       renderer.render(scene, camera);
// //       gl.endFrameEXP();
// //     };
// //     render();
// //   };

// //   return (
// //     <ImageBackground
// //       source={backgroundImages[selectedCountry]}
// //       style={styles.background}
// //       resizeMode="cover"
// //     >
// //       <View style={styles.header}>
// //         <FlagSelector selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
// //       </View>
// //       <GLView style={styles.glView} onContextCreate={onContextCreate} />
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //   },
// //   header: {
// //     position: "absolute",
// //     top: 50,
// //     left: 20,
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

// // 국가별 이미지 경로
// const backgroundImages = {
//   usa: require("../../assets/images/USA_bg2.png"),
//   spain: require("../../assets/images/Spain_bg2.png"),
//   japan: require("../../assets/images/Japan_bg2.png"),
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
//       model.traverse((node) => {
//         if (node.isMesh) {
//           // 재질 최적화
//           node.material = new MeshStandardMaterial({
//             color: 0xcccccc,
//             roughness: 0.7,
//             metalness: 0.3
//           });
//         }
//       });

//       model.position.set(0, -2, 0);
//       model.scale.set(50, 50, 50);
//       model.rotation.y = Math.PI / 4;
      
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
//       <View style={styles.header}>
//         <FlagSelector selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
//       </View>
//       <GLView 
//         style={styles.glView}
//         onContextCreate={onContextCreate}
//       />
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   header: {
//     position: "absolute",
//     top: 50,
//     left: 20,
//     zIndex: 1,
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
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
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

// 상수 추가 (backgroundImages 아래에)
const streakDays = 7; // 연속 학습일수 하드코딩

// 국가별 이미지 경로
const backgroundImages = {
  usa: require("../../assets/images/USA_bg2.png"),
  spain: require("../../assets/images/Spain_bg2.png"),
  japan: require("../../assets/images/Japan_bg2.png"),
};

// 3D 모델 경로
const gooseModelPath = Asset.fromModule(require("../../assets/model/goose.glb")).uri;

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState("usa");
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
  return (
    <ImageBackground
      source={backgroundImages[selectedCountry]}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftContainer}>
            <FlagSelector selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
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
    width: '100%',
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
  glView: {
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.2,
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.5,
  },
});


export default Home;