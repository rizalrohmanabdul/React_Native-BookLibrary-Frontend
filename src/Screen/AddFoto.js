import React, { Component } from "React";
import {
  FlatList,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import ImagePicker from "react-native-image-picker";
import axios from "axios";

class Historyborrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ImageSource: null
    };
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          ImageSource: source
        });
      }
    });
  }

  saveimageto = () => {

    alert('Your Foto has been Changed !!!')
    this.props.navigation.navigate('Home');

    //   console.warn('as', image.uri)
    //   const timeStamp = Date.now()/1000;
    //   let formData = new FormData();
    //   formData.append("api_key",'592491942836456');
    //   formData.append("file", image.uri);
    //   formData.append("public_id", "sample_image");
    //   formData.append("timestamp", timeStamp);
    //   formData.append("upload_preset", 'kxl1uom6');
  
    //   axios
    //   .post('https://api.cloudinary.com/v1_1/downloadaplikasi27/image/upload', formData)
    //   .then((result) => {
    //       console.warn(result);
    //   })
    //   .catch((err) => {
    //       alert('gagal')
    //       console.warn(err);
    //   })    
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: "red", alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 24, textAlign: "center" }}>
            Welcome To Book Library, Please Pick Your foto{" "}
          </Text>
        </View>
        <View style={{ flex: 9, justifyContent: "flex-start" }}>
          <View
            style={{
              minHeight: 100,
              width: "100%",
              alignItems: "left",
              paddingTop: 10
            }}
          >
            {this.state.ImageSource === null ? (
              <Image
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                  backgroundColor: "green"
                }}
                source={require("../assets/img/1564481740.jpg")}
              />
            ) : (
              <Image
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                  backgroundColor: "green"
                }}
                source={this.state.ImageSource}
              />
            )}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingRight: 15,
            paddingLeft: 15
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={this.selectPhotoTapped.bind(this)}
          >
            <Text>Ambil Foto</Text>
          </TouchableOpacity>
          {this.state.ImageSource === null ? (
            <TouchableOpacity
              style={{ flex: 1, alignItems: "flex-end" }}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text>Lain Kali</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ flex: 1, alignItems: "flex-end" }}
              onPress={this.saveimageto}
            >
              <Text>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default Historyborrow;
