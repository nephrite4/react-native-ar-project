import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: "white",
    paddingHorizontal: 36,
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: "space-between",
    alignItems: "center"
  },
  articles: {},
  attractions: { flex: 1, justifyContent: "space-between" },

  attraction: {
    width: width - 36 * 2,
    height: width * 0.6,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 24,
    borderRadius: 12
  },
  attractionInfo: {
    position: "absolute",
    borderRadius: 12,
    padding: 24,
    bottom: -36,
    right: 36,
    left: 36,
    paddingVertical: 24,
    paddingHorizontal: 36,
    backgroundColor: "white"
  },
  recommended: {
    // padding: 36
  },
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginVertical: 18,
    paddingHorizontal: 36,
    paddingTop: 8
  },
  recommendation: {
    width: (width - 36 * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: "white"
  },
  recommendedList: {
    // paddingHorizontal: 36
  },
  recommendationImage: {
    width: (width - 36 * 2) / 2,
    height: (height - 36 * 2) / 5
    // justifyContent: "space-between",
    // padding: 16
  },
  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "white"
  },
  rating: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold"
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 6,
    marginHorizontal: 6,
    backgroundColor: "#DCE0E9",
    borderColor: "transparent"
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.5,
    borderColor: "#007BFA"
  }
});

class Article extends Component {
  // static navigationOptions = {
  //   header: (
  //     <View style={[styles.flex, styles.row, styles.header]}>
  //       <View>
  //         <Text style={{ color: "#BCCCD4" }}>Search for place</Text>
  //         <Text style={{ fontSize: 24, fontWeight: "600" }}>Attractions</Text>
  //       </View>
  //       <View>
  //         <Image
  //           style={styles.avatar}
  //           source={{
  //             uri:
  //               "https://pbs.twimg.com/profile_images/974738943307538432/GBiXvqar.jpg"
  //           }}
  //         />
  //       </View>
  //     </View>
  //   )
  // };
  render() {
    return (
      <View>
        <Text>Article</Text>
      </View>
    );
  }
}

export default Article;
