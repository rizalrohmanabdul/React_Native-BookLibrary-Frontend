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

class Historyborrow extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 2, backgroundColor: 'red'}}>
                    <Image></Image>
                </View>
                <View style={{flex: 9, justifyContent: 'flex-start'}}>
                    <View style={{minHeight: 100, width: '100%', alignItems: 'center', paddingTop: 10}}>
                        <Image style={{width: 120, height: 120, borderRadius: 100, backgroundColor: 'green'}}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', paddingRight: 15, paddingLeft: 15}}>
                    <TouchableOpacity style={{flex: 1}}>
                        <Text>Ambil Foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text>Lain Kali</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Historyborrow