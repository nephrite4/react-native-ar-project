import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  HeaderStyleInterpolator
} from "react-navigation";

import List from "../screens/List";
import Article from "../screens/Article";

export default createStackNavigator(
  {
    List,
    Article: Article
  },
  {
    initialRouteName: "List"
  }
);
