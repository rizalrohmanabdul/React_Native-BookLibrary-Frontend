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
            <View>
                <FlatList
                data={[{
                    key: 'https://cdn.brilio.net/news/2016/11/27/108215/519930-temukan-perbedaan-gambar.png', 
                    text: 'gsgahsgasas', 
                    description: 'hehiehieheiheiheihei'}]}
            // data={this.state.bookhome}
            //   ListFooteerComponent={this.renderFooter}
            numColumns={2}
            style={{ paddingLeft: 15, paddingRight: 15 }}
            // keyExtractor={item => item.id_buku.toString()}
            renderItem={({ item }) => {
              return (
                <View style={{flexDirection: "row", marginTop: 12, flex: 1, minHeight: 120, borderWidth: 1, borderColor: 'black'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'black'}}>
                        <Image style={{height: 60, width: 60}} source={{uri: item.key}} />
                    </View>
                    <View style={{flex: 2, justifyContent: 'flex-start'}}>
                        <View style={{flex: 1, flexDirection: 'column', margin: 5}}>
                            <Text style={{flex: 1}}>{item.text}</Text>
                            <Text style={{flex: 1}}>{item.description}</Text>
                            <Text style={{flex: 1}}>{item.description}</Text>
                            <Text style={{flex: 1}}>{item.description}</Text>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{flex: 1}}>Denda : 90.000</Text>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'right'}}>Selesai</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
              );
            }}
          />
            </View>
        )
    }
}

export default Historyborrow