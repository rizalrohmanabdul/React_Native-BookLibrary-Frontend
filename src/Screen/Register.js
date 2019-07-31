import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import {registrasiPeminjam} from "../Public/redux/actions/peminjam"

import Logo from "../Components/Logo";

class Register extends Component {
  render() {
    var radio_props = [
      {label: 'Perempuan', value: 0 },
      {label: 'Laki-Laki', value: 1 }
    ];
    const registerList = async() =>{
      await this.props.dispatch(registrasiPeminjam(this.state))    
      console.warn(this.state)
    }
    return (
      <View style={styles.container}>
        <Logo />
        <ScrollView>
          <View style={styles.containerform}>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="NIK"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText = {(e)=>this.setState({id_ktp:e})}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Full Name"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText = {(e)=>this.setState({nama_peminjam:e})}              
            />
            <RadioForm radio_props={radio_props} buttonColor={'#fff'} labelColor={'#fff'} initial={0} formHorizontal={true}  onPress={(jk) => {this.setState({jk:jk})}} onChangeText = {(e)=>this.setState({jk:e})}/>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Address"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText = {(e)=>this.setState({alamat:e})}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Email"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText = {(e)=>this.setState({email:e})}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              onChangeText = {(e)=>this.setState({password:e})}
            />
            <TouchableOpacity style={styles.button} onPress={registerList.bind(this)}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>You have an account yet?</Text>
          <TouchableOpacity onPress={()=>  this.props.navigation.navigate('Login')}>
            <Text style={styles.signupButton}> Sigin</Text>
          </TouchableOpacity>
        </View>
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
export default Register;
