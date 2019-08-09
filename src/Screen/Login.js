import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'

import Logo from '../Components/Logo';
import Form from '../Components/Form';
import {currentLogin} from '../Public/redux/actions/login'



class Login extends Component {

	// signup() {
	// 	Actions.signup()
  // }
  loginUser = () => {
    this.props.dispatch(currentLogin(this.state))
     .then(()=>{
      alert('Login Success !!!').then(()=>{
        this.props.navigation.navigate('Home');
      })
     }).catch(()=>{
       alert('Wrong Username And Password !!!')
     })
  }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<View style={styles.containerform}>
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
            <TouchableOpacity style={styles.button} onPress={this.loginUser}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={()=>  this.props.navigation.navigate('Register')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const mapStateToProps = state => {
  return {
    userlogin: state.login
  };
};

export default connect(mapStateToProps)(Login);

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