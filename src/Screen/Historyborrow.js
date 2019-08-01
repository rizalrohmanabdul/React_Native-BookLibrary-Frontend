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
import { getbyidUserPeminjaman} from "../Public/redux/actions/peminjaman"
import {connect} from 'react-redux';

class Historyborrow extends Component {
    constructor(props) {
		super(props);

		this.state = { 
			peminjamanlist: []
		};
  }
  componentDidMount = async () => {
    await this.props.dispatch(getbyidUserPeminjaman('35112378908001'));
    this.setState({
        peminjamanlist: this.props.listpeminjaman.listPeminjaman.result,
    });
    console.log('ini warm', this.state.peminjamanlist);
    
  };
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            position: "absolute",
            paddingTop: 20,
            width: "100%",
            borderBottomColor: "black",
            borderBottomWidth: 0.8
          }}
        >
          <View
            style={{
              height: 45,
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                fontFamily: "sans-serif-condensed",
                textAlign: "center",
                flex: 1
              }}
            >
              History Borrow
            </Text>
          </View>
        </View>
        <View style={{marginTop: 70}}>
          <FlatList
            data={this.state.peminjamanlist}
            // data={this.state.bookhome}
            //   ListFooteerComponent={this.renderFooter}
            style={{ paddingLeft: 15, paddingRight: 15 }}
            // keyExtractor={item => item.id_buku.toString()}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 12,
                    flex: 1,
                    minHeight: 120,
                    borderWidth: 1,
                    borderColor: "black"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRightWidth: 1,
                      borderRightColor: "black"
                    }}
                  >
                    <Image
                      style={{ height: 105, width: 105 }}
                      source={{ uri: item.gbr }}
                    />
                  </View>
                  <View style={{ flex: 2, justifyContent: "flex-start" }}>
                    <View
                      style={{ flex: 1, flexDirection: "column", margin: 5 }}
                    >
                      <Text style={{ flex: 1, fontWeight: 'bold' }}> {item.nama_buku}</Text>
                      <Text style={{ flex: 1 }}>{item.nama_kategori}</Text>
                      <Text style={{ flex: 1 }}>{item.description}</Text>
                      <Text style={{ flex: 1 }}>{item.description}</Text>
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text style={{ flex: 1 }}>Denda : 90.000</Text>
                        <View style={{ flex: 1 }}>
                          <Text style={{ textAlign: "right" }}>Selesai</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
      listpeminjaman: state.peminjaman
    };
  };
  
  export default connect(mapStateToProps)(Historyborrow);
