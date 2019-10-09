import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import MapsScreen from "../screens/MapsScreen";
import ARCamScreen from "../screens/ARCamScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = HomeScreen;

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? // `ios-home${focused ? "" : "-outline"}`
            "ios-home"
          : "md-information-circle"
      }
    />
  )
};

HomeStack.path = "";

const MapsStack = createStackNavigator(
  {
    Maps: MapsScreen
  },
  config
);

MapsStack.navigationOptions = {
  tabBarLabel: "Maps",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-compass" : "md-link"}
    />
  )
};

MapsStack.path = "";

const ARCamStack = createStackNavigator(
  {
    ARCam: ARCamScreen
  },
  config
);

ARCamStack.navigationOptions = {
  tabBarLabel: "AR Camera",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-camera" : "md-options"}
    />
  )
};

ARCamStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MapsStack,
  ARCamStack
});

tabNavigator.path = "";

export default tabNavigator;
