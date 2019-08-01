import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { Icon } from "native-base";
import isEmpty from "lodash.isempty";

class DrawerHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
    AsyncStorage.getItem("id", (error, result) => {
      if (result) {
        this.setState({
          id: result
        });
      }
    });
  }
  logout = () => {
    AsyncStorage.clear().then(() => {
      alert("Thank You !!!");
    });
  };

  render() {
    const menu = AsyncStorage.getItem("level");
    console.warn("lebell login", this.state.id);
    return (
      <React.Fragment>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={require("../assets/img/1564481740.jpg")}
          />
          <Text style={styles.name}>Manajemen Book</Text>
        </View>
        <ScrollView>
          <View>
            {!isEmpty(this.state.id) ? (
              <React.Fragment>
                <FlatList
                  data={[
                    { Menuname: "Home", icon: "" },
                    { Menuname: "History", icon: "" }
                  ]}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={styles.flhome}
                        onPress={() =>
                          this.props.navigation.navigate(item.Menuname)
                        }
                      >
                        {/* <Image style={{ width:24, height:24 }} source={{ uri: require('../assets/img/1564481740.jpg') }}/> */}
                        <Text numberOfLines={1} style={styles.drawer}>
                          {item.Menuname}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
                <TouchableOpacity style={styles.flhome} onPress={this.logout}>
                  {/* <Image style={{ width:24, height:24 }} source={{ uri: require('../assets/img/1564481740.jpg') }}/> */}
                  <Text numberOfLines={1} style={styles.drawer}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FlatList
                  data={[
                    { Menuname: "Home", icon: "" },
                    { Menuname: "Login", icon: "" }
                  ]}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={styles.flhome}
                        onPress={() =>
                          this.props.navigation.navigate(item.Menuname)
                        }
                      >
                        {/* <Image style={{ width:24, height:24 }} source={{ uri: require('../assets/img/1564481740.jpg') }}/> */}
                        <Text numberOfLines={1} style={styles.drawer}>
                          {item.Menuname}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </React.Fragment>
            )}
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default DrawerHome;

const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
    margin: 15
  },
  image: {
    width: 95,
    height: 96,
    borderRadius: 54
  },
  name: {
    fontSize: 17,
    marginTop: 10,
    fontWeight: "600",
    color: "#000000"
  },
  drawer: {
    margin: 10,
    fontWeight: "600",
    color: "#000",
    fontSize: 15,
    paddingLeft: 10
  },
  flhome: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18
  }
});
