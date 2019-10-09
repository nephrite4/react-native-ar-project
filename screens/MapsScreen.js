import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import MapView, {
  Marker,
  Permissions,
  Location,
  CallOut
} from "react-native-maps";

export default class MapsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      markers: [] // {coordinate: {latitude: , longitude: }, img: {url: ...}}
    };
    //   this._getLocationAsync();
    // }
    // _getLocationAsync = async () => {
    //   let location = await Location.getCurrentPositionAsync({
    //     enabledHighAccuracy: true
    //   });
    //   let region = {
    //     latitude: location.coords.latitude,
    //     longtitude: location.coords.longtitude,
    //     latitude: location.coords.longtitude,
    //     latitudeDelta: 0.045,
    //     longtitudeDelta: 0.045
    //   };
    //   this.setState({ region: region });
  }
  componentDidMount() {
    this.setState({
      markers: [
        {
          coordinate: { latitude: 1.286747, longitude: 103.8523024 },
          img: require("../assets/images/merlion.png"),
          title: "Merlion AR Tour"
        },
        {
          coordinate: { latitude: 1.2835283, longitude: 103.857823 },
          img: require("../assets/images/marinabaysands.png"),
          title: "Marina Bay Sands AR Tour"
        },
        {
          coordinate: { latitude: 1.2892988, longitude: 103.8609481 },
          img: require("../assets/images/sgflyer.png"),
          title: "Singapore Flyer AR Tour"
        }
      ]
    });
  }

  render() {
    return (
      <MapView
        rotateEnabled={false}
        showsCompass={true}
        showsUserLocation={true}
        style={{ flex: 1 }}
      >
        {this.state.markers &&
          this.state.markers.map((item, i) => (
            <Marker
              key={i}
              coordinate={item.coordinate}
              title={item.title}
              image={item.img}
            ></Marker>
          ))}
        {/* <TileLayer
          {...{
            detectRetina: true,
            maxZoom: 18,
            minZoom: 12,
            url: "https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png",
            attribution:
              '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
          }}
        /> */}
      </MapView>
    );
  }
}

MapsScreen.navigationOptions = {
  title: "Maps"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
