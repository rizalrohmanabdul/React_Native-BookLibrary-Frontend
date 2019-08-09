import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  Image,
  ActivityIndicator
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { getKategori } from "../Public/redux/actions/kategori";
import {postBuku} from "../Public/redux/actions/buku"
import { registrasiPeminjam } from "../Public/redux/actions/peminjam";
import { connect } from "react-redux";
import Logo from "../Components/Logo";
import ImagePicker from "react-native-image-picker";
import MainService from "../assets/mainservice"

class Donasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      kategorilist: [],
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
        let source = { uri: response };


        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          ImageSource: source
        });
      }
    });
  }
  componentDidMount = async () => {
    await this.props.dispatch(getKategori());
    console.log("ini dari props list Kategori", this.props.listkategori);
    this.setState({
      kategorilist: this.props.listkategori.listKategori.result
    });
  };
  // registerList = () => {
  //   this.props
  //     .dispatch(registrasiPeminjam(this.state))
  //     .then(() => {
  //       alert("Registrasi Success !!!");
  //       this.props.navigation.navigate("Login");
  //     })
  //     .catch(err => {
  //       console.warn(err);
  //     });
  // };
  render() {
    const bookAdd = () => {
        const dataFile = new FormData();
        dataFile.append("id_kategori", this.state.id_kategori);
        dataFile.append("nama_buku", this.state.nama_buku_donasi);
        dataFile.append(
          "pengarang",
          this.state.pengarang_buku_donasi
        );
        dataFile.append('gbr', {
            name: this.state.ImageSource.uri.fileName,
            type: this.state.ImageSource.uri.type || null,
            uri: this.state.ImageSource.uri.uri
        })
       
        add(dataFile);
      };
    let add = async data => {
      this.props.navigation.navigate('Loading');
        await this.props
          .dispatch(postBuku(data))
          .then(() => {
            alert('Donasi Success !!!')
            this.props.navigation.navigate('Home');
          })
          .catch(() => {
            alert('Donasi Success !!! Thank You')
            this.props.navigation.navigate('Adddonasi');
          });
      };
      console.log('inini', this.state.ImageSource)
    const list_kategori = this.state.kategorilist;
    return (
      <View style={styles.container}>
        <Logo />
        <ScrollView>
          <View style={styles.containerform}>
            <Picker
              selectedValue={this.state.id_kategori}
              style={styles.inputBox}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ id_kategori: itemValue })
              }
            >
              {list_kategori.map((val_list, index) => {
                return (
                  <Picker.Item
                    placeholder="Select category..."
                    key={index}
                    label={val_list.nama_kategori}
                    value={val_list.id_kategori}
                  />
                );
              })}
            </Picker>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Nama Buku"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={nama_buku_donasi => this.setState({ nama_buku_donasi:nama_buku_donasi })}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Pengarang"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={pengarang_buku_donasi => this.setState({ pengarang_buku_donasi })}
            />
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View
                style={{
                  minHeight: 100,
                  width: "100%",
                //   alignItems: "left",
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
                    source={this.state.ImageSource.uri}
                  />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={bookAdd.bind(this)}>
              <Text style={styles.buttonText}>Donate Book</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerform: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#6e6e6e",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  },
  items: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "sans-serif-condensed",
    textAlign: "center",
    flex: 1
  }
});
const mapStateToProps = state => {
  return {
    peminjam: state.peminjam,
    listkategori: state.kategori
  };
};

export default connect(mapStateToProps)(Donasi);

// export default connect(state => ({peminjam: state.peminjam}))(Register)
