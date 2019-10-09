import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { AR } from "expo";
import { ExpoGraphics, GraphicsView } from "expo-graphics";
import ExpoTHREE, { THREE, AR as ThreeAR } from "expo-three";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { tsParenthesizedType } from "@babel/types";
import * as GLoc from "geolocation-utils";
import TinyEmitter from "tiny-emitter";

// import { AR } from 'expo';
const screenCenter = new THREE.Vector2(0.5, 0.5);
const onProgress = function(xhr) {
  if (xhr.lengthComputable) {
    const percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log(Math.round(percentComplete, 2) + "% downloaded");
  }
};

let emitter = new TinyEmitter();

export default class ARCamScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onLocationUpdate = this.onLocationUpdate.bind(this);
  }

  async assembleScene(nameofScene) {
    this.setState({
      isLoaded: false
    });
    console.log(nameofScene, " loading...");
    switch (nameofScene) {
      case "1":
        // Scene
        scene = new THREE.Scene();
        // Merlion

        const model = {
          "merlion.obj": require("../assets/3dmodels/merlion.obj"),
          "merlion.mtl": require("../assets/3dmodels/merlion.mtl")
          // "pastry.jpg": require("../assets/3dmodels/pastry.jpg")
          // "Wolf_Eyes_1.jpg": require("../assets/3dmodels/textures/Wolf_Eyes_1.jpg"),
          // "Wolf_Eyes_2.jpg": require("../assets/3dmodels/textures/Wolf_Eyes_2.jpg"),
          // "Wolf_Fur.jpg": require("../assets/3dmodels/textures/Wolf_Fur.jpg")
        };

        merlionobj = await ExpoTHREE.loadAsync(
          [model["merlion.obj"], model["merlion.mtl"]],
          onProgress,
          name => model[name]
        );

        ExpoTHREE.utils.scaleLongestSideToSize(merlionobj, 0.5);

        // Cube
        // geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        // material = new THREE.MeshPhongMaterial({
        //   color: 0x00ff00
        // });

        // const mesh = await ExpoTHREE.loadAsync([
        //   require('./assets/3dmodels/merlion.obj')
        // ]);

        // cube = new THREE.Mesh(geometry, material);

        // magnetic = new ThreeAR.MagneticObject();
        // magnetic.add(cube);
        // scene.add(magnetic);
        scene.add(merlionobj);

        // Light
        scene.add(new THREE.AmbientLight(0x404040));
        scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

        console.log(nameofScene, " loaded");
        this.setState({
          isLoaded: true
        });
        return scene;
      case "2":
        // Scene
        scene = new THREE.Scene();
        // Merlion
        merlionobj = await ExpoTHREE.loadAsync(
          [
            require("../assets/3dmodels/merlion.obj"),
            require("../assets/3dmodels/merlion.mtl")
          ],
          null
        );

        // texture not working
        merliontexture = await ExpoTHREE.loadTextureAsync({
          asset: require("../assets/3dmodels/merlion.mtl")
        });

        ExpoTHREE.utils.scaleLongestSideToSize(merlionobj, 0.5);

        // Cube
        // geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        // material = new THREE.MeshPhongMaterial({
        //   color: 0xff0000
        // });
        // cube = new THREE.Mesh(geometry, material);

        // magnetic = new ThreeAR.MagneticObject();
        // magnetic.add(cube);
        // scene.add(magnetic);

        // // const mesh = await ExpoTHREE.loadAsync([
        // //   require('./assets/3dmodels/merlion.obj')
        // // ]);
        // const mesh = await loadOBJMTL();
        // this.scene.add(mesh);
        scene.add(merlionobj);

        // Light
        scene.add(new THREE.AmbientLight(0x404040));
        scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

        console.log(nameofScene, " loaded");
        this.setState({
          isLoaded: true
        });
        return scene;

      default:
        console.log("default scene called");
        return new THREE.Scene();
    }
  }

  async onLocationUpdate(myLocation) {
    // console.log(myLocation);
    let locations = [
      {
        identifier: "1",
        latitude: 1.3458031,
        longitude: 103.6815211,
        radius: 200
      },
      {
        identifier: "2",
        latitude: 1.3504001,
        longitude: 103.6815541,
        radius: 200
      }
    ];

    for (location of locations) {
      // console.log(
      //   { lat: location.latitude, lon: location.longitude },
      //   { lat: myLocation.coords.latitude, lon: myLocation.coords.longitude },
      //   location.radius
      // );

      if (
        GLoc.insideCircle(
          { lat: location.latitude, lon: location.longitude },
          { lat: myLocation.coords.latitude, lon: myLocation.coords.longitude },
          location.radius
        )
      ) {
        if (this.state.currentSceneIdentifier != location.identifier) {
          console.log("loading identifier...", location.identifier);
          this.setState({
            currentScene: await this.assembleScene(location.identifier),
            currentSceneIdentifier: location.identifier,
            isLoaded: false
          });
        }
        return;
      }
    }

    console.log("clearing stage");

    this.setState({
      currentScene: await this.assembleScene(),
      currentSceneIdentifier: "",
      isLoaded: false
    });
  }

  componentDidMount() {
    this.setupAR();
    THREE.suppressExpoWarnings();
  }

  async setupAR() {
    await new Promise(async resolve =>
      this.setState(
        {
          currentScene: await this.assembleScene(),
          currentSceneIdentifier: "",
          blankScene: new THREE.Scene(),
          isLoaded: false
        },
        resolve
      )
    );

    await Location.requestPermissionsAsync();

    let permission = await Location.hasServicesEnabledAsync();

    console.log("Permission : ", permission);
    if (permission) {
      let wpasync = Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 5,
          mayShowUserSettingsDialog: true
        },
        this.onLocationUpdate
      );

      this.setState({
        watchPosition: wpasync
      });
    } else {
      alert("You did not enable Location Services!");
    }
  }

  componentWillUnmount() {
    this.state.watchPosition.remove();
  }

  render() {
    return (
      <GraphicsView
        isArEnabled
        onContextCreate={this.onContextCreate}
        onRender={this.onRender}
      />
    );
  }

  onContextCreate = async ({
    // Web: const gl = canvas.getContext('webgl')
    gl,
    width,
    height,
    scale
  }) => {
    AR.setPlaneDetection(AR.PlaneDetection.Horizontal);

    // Renderer
    this.renderer = new ExpoTHREE.Renderer({
      gl,
      width,
      height,
      pixelRatio: scale
    });

    // Camera
    this.camera = new ThreeAR.Camera(width, height, 0.1, 1000);
    this.bgrenderer = new ThreeAR.BackgroundTexture(this.renderer);
  };

  onRender = () => {
    if (
      this.state.currentScene !== undefined &&
      this.state.currentScene.background !== this.bgrenderer
    ) {
      // FIXME: potential waste battery operation
      this.state.currentScene.background = this.bgrenderer;
    }

    // this.magnetic.update(this.camera, screenCenter);
    this.renderer.render(this.state.currentScene, this.camera);
  };
}

ARCamScreen.navigationOptions = {
  title: "AR Camera"
};

// Merlion
//     const texture = await ExpoTHREE.loadAsync(require('./icon.png'));
//     const obj = await ExpoTHREE.loadAsync(
//   [require('../assets/3dmodels/merlion.obj'), require('../assets/3dmodels/merlion.mtl')],
//   null,
//   imageName => resources[imageName],
// );
// const { scene } = await ExpoTHREE.loadAsync(
//   resources['./kenny.dae'],
//   onProgress,
//   resources,
// );

// ORIGINAL
// const obj = await ExpoTHREE.loadAsync(
//   [require('../assets/3dmodels/merlion.obj')
//   , require('../assets/3dmodels/material.mtl')
// ], null,
//   imageName => resources[imageName],
// );
