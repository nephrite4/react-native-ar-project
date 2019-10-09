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
import { ThemeColors } from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import * as theme from "../theme";

const { width, height } = Dimensions.get("screen");
const mocks = [
  {
    id: 1,
    user: {
      name: "Balma Chavez",
      avatar:
        "https://pbs.twimg.com/profile_images/1125243450675400704/TRkRhV48.jpg"
    },
    saved: true,
    location: "Bayfront MRT",
    temperature: 32,
    title: "Gardens By The Bay",
    description: "The nature park spanning 101 hectares of...",
    rating: 4.7,
    reviews: 62,
    preview:
      "https://www.visitsingapore.com/mice/en/plan-your-event/venues/gardens-by-bay/overview/_jcr_content/cardcontent/cardcontentpar/image_video/carousel/item_1.resize.carousel-img.0.0.jpg",
    image: [
      "https://aws-tiqets-cdn.imgix.net/images/content/3c74a852107a45398b5635a7ee2a0d1b.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=d4bca89de3c065092ceac82140907088&w=400&h=320&dpr=2.625",
      "https://aws-tiqets-cdn.imgix.net/images/content/3c74a852107a45398b5635a7ee2a0d1b.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=d4bca89de3c065092ceac82140907088&w=400&h=320&dpr=2.625",
      "https://aws-tiqets-cdn.imgix.net/images/content/3c74a852107a45398b5635a7ee2a0d1b.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=d4bca89de3c065092ceac82140907088&w=400&h=320&dpr=2.625"
    ]
  },
  {
    id: 2,
    user: {
      name: "Lelia Charlotte",
      avatar:
        "https://images.pexels.com/photos/413723/pexels-photo-413723.jpeg?h=350&auto=compress&cs=tinysrgb"
    },
    saved: false,
    location: "Harbourfront MRT",
    temperature: 32,
    title: "Sentosa Island",
    description: "An island resort off Singapore’s southern coast...",
    rating: 3.9,
    reviews: 82,
    preview:
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
    image: [
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg"
    ]
  },
  {
    id: 3,
    user: {
      name: "Benjamin Lim",
      avatar:
        "https://pbs.twimg.com/profile_images/514958948563030018/HJp5Enpt.jpeg"
    },
    saved: false,
    location: "Bayfront MRT",
    temperature: 32,
    title: "ArtScience Museum",
    description:
      "Discover creativity at its best – through art, science, design...",
    rating: 4.8,
    reviews: 102,
    preview:
      "https://www.indesignlive.sg/wp-content/uploads/2016/04/Crystal-Universe-Future-World-at-ArtScience-Museum-Credit-to-teamLab.jpg",
    image: [
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg"
    ]
  }
];
const mocks2 = [
  {
    id: 1,
    user: {
      name: "Lelia Charlotte",
      avatar:
        "https://images.pexels.com/photos/413723/pexels-photo-413723.jpeg?h=350&auto=compress&cs=tinysrgb"
    },
    saved: false,
    location: "Harbourfront MRT",
    temperature: 32,
    title: "Sentosa Island",
    description:
      "Sentosa is an island resort off Singapore’s southern coast...",
    rating: 3.9,
    reviews: 82,
    preview:
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
    image: [
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg"
    ]
  },
  {
    id: 2,
    user: {
      name: "Benjamin Lim",
      avatar:
        "https://pbs.twimg.com/profile_images/514958948563030018/HJp5Enpt.jpeg"
    },
    saved: true,
    location: "Bayfront MRT",
    temperature: 32,
    title: "ArtScience Museum",
    description:
      "Discover creativity at its best – through art, science, design...",
    rating: 4.8,
    reviews: 102,
    preview:
      "https://www.indesignlive.sg/wp-content/uploads/2016/04/Crystal-Universe-Future-World-at-ArtScience-Museum-Credit-to-teamLab.jpg",
    image: [
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg",
      "https://www.visitsingapore.com/see-do-singapore/places-to-see/sentosa/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg"
    ]
  },
  {
    id: 3,
    user: {
      name: "Balma Chavez",
      avatar:
        "https://pbs.twimg.com/profile_images/1125243450675400704/TRkRhV48.jpg"
    },
    saved: true,
    location: "Bayfront MRT",
    temperature: 32,
    title: "Gardens By The Bay",
    description:
      "Gardens by the Bay is a nature park spanning 101 hectares of...",
    rating: 4.7,
    reviews: 62,
    preview:
      "https://www.visitsingapore.com/mice/en/plan-your-event/venues/gardens-by-bay/overview/_jcr_content/cardcontent/cardcontentpar/image_video/carousel/item_1.resize.carousel-img.0.0.jpg",
    image: [
      "https://aws-tiqets-cdn.imgix.net/images/content/3c74a852107a45398b5635a7ee2a0d1b.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=d4bca89de3c065092ceac82140907088&w=400&h=320&dpr=2.625",
      "https://aws-tiqets-cdn.imgix.net/images/content/3c74a852107a45398b5635a7ee2a0d1b.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=d4bca89de3c065092ceac82140907088&w=400&h=320&dpr=2.625",
      "https://aws-tiqets-cdn.imgix.net/images/content/3c74a852107a45398b5635a7ee2a0d1b.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=d4bca89de3c065092ceac82140907088&w=400&h=320&dpr=2.625"
    ]
  }
];

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
    paddingTop: 48,
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
    fontWeight: "bold",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
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

class Articles extends Component {
  scrollX = new Animated.Value(0);
  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text style={{ color: "#BCCCD4" }}>
            <FontAwesome color="#BCCCD4" name="search" /> Search
          </Text>

          <Text style={{ fontSize: 24, fontWeight: "600" }}>Attractions</Text>
        </View>
        <View>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/974738943307538432/GBiXvqar.jpg"
            }}
          />
        </View>
      </View>
    )
  };

  constructor(props) {
    super(props);
    this.renderAttractions = this.renderAttractions.bind(this);
  }

  renderDots() {
    const { attractions } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          {
            justifyContent: "center",
            alignContent: "center",
            marginTop: 36 * 1.75
          }
        ]}
      >
        {attractions.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={`step - ${item.id}`}
              style={[
                styles.dots,
                styles.activeDot,
                { borderWidth: borderWidth }
              ]}
            />
          );
        })}
      </View>
    );
  }

  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return stars.map((_, index) => {
      const activeStar = Math.floor(rating) >= index + 1;
      return (
        <FontAwesome
          name="star"
          key={`star-${index}`}
          size={theme.sizes.font}
          color={theme.colors[activeStar ? "active" : "gray"]}
        />
      );
    });
  }

  renderAttractions = () => {
    return (
      <View style={[styles.column, styles.attractions]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={this.props.attractions}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.renderAttraction(item)}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } }
          ])}
          style={{ overflow: "visible" }}
        />
        {this.renderDots()}
      </View>
    );
  };

  renderAttraction = item => {
    const { navigation } = this.props;
    return (
      <ImageBackground
        key={item.id}
        style={[styles.flex, styles.attraction]}
        imageStyle={{ borderRadius: 12 }}
        source={{ uri: item.preview }}
      >
        <View style={[styles.row]}>
          {/* <View style={{ flex: 0, paddingRight: 10 }}>
            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          </View> */}
          <View styles={[styles.column, { flex: 2, paddingHorizontal: 18 }]}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6
                },
                shadowOpacity: 1.0,
                shadowRadius: 10
              }}
            >
              {item.title}
            </Text>
            <View style={{ flexDirection: "row", paddingTop: 2 }}>
              <View
                style={{
                  backgroundColor: "#0080e7",
                  borderRadius: 20,
                  padding: 2,
                  paddingHorizontal: 8
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>
                  <SimpleLineIcons
                    name="location-pin"
                    size={11}
                    color="white"
                  />
                  <Text> {item.location}</Text>
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              // justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>

        <View style={[styles.column, styles.attractionInfo, styles.shadow]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Article", { article: item })}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", paddingBottom: 8 }}>
              {item.title}
            </Text>

            <View
              style={[
                styles.row,
                { justifyContent: "space-between", alignItems: "flex-end" }
              ]}
            >
              <Text style={{ color: "#a3b4c6" }}>{item.description}</Text>
              <FontAwesome name="chevron-right" size={12} color="#BCCCD4" />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.row, styles.recommendedHeader]}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Recommended</Text>

          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: "#BCCCD4" }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="end"
            // contentOffset={{ x: 16, y: 0 }}
            // contentInset={{ top: 0, left: 18, bottom: 0, right: 0 }}
            style={{ overflow: "visible" }}
            data={this.props.recommended}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) =>
              this.renderRecommendation(item, index)
            }
          >
            {this.renderDots()}
          </FlatList>
        </View>
      </View>
    );
  };

  renderRecommendation = (item, index) => {
    const { attractions } = this.props;
    const isLastItem = index === attractions.length - 1;
    console.log("isLastitem", { index, length: attractions.length });
    return (
      <View
        style={[
          styles.flex,
          styles.column,
          styles.recommendation,
          styles.shadow,
          index === 0 ? { marginLeft: 36 } : null,
          isLastItem ? { marginRight: 18 } : null
        ]}
      >
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image
            style={[styles.recommendationImage]}
            source={{ uri: item.preview }}
          />
          <View
            style={[
              styles.flex,
              styles.row,
              {
                justifyContent: "flex-start",
                padding: 18,
                position: "absolute",
                top: 0,
                right: 0,
                left: 0
              }
            ]}
          >
            <FontAwesome
              name={item.saved ? "bookmark" : "bookmark-o"}
              size={18}
              color="white"
            />
          </View>
        </View>
        <View
          style={[
            styles.flex,
            styles.column,
            { justifyContent: "space-evenly", padding: 18 }
          ]}
        >
          <Text style={{ fontSize: 14, fontWeight: "500", paddingBottom: 8 }}>
            {item.title}
          </Text>
          <Text style={{ color: "#BCCCD4", fontSize: 12 }}>
            {item.location}
          </Text>
          <View
            style={[
              styles.row,
              { justifyContent: "space-between", marginTop: 18 }
            ]}
          >
            <Text style={{ color: "#007BFA" }}>
              {this.renderRatings(item.rating)}
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator="false">
        {this.renderAttractions()}
        {this.renderRecommended()}
      </ScrollView>
    );
  }
}

Articles.defaultProps = {
  attractions: mocks,
  recommended: mocks2
};

export default Articles;
