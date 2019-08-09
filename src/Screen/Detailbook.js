import React, { Component, Fragment } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { connect } from "react-redux";
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Modal,
  TextInput
} from "react-native";
import { Button } from "native-base";
import { getdetailBuku } from "../Public/redux/actions/buku";
import {postPeminjaman} from "../Public/redux/actions/peminjaman";
import isEmpty from "lodash.isempty"
// import Borrow from '../components/Borrow';
// import Restore from '../components/Restore';

class BookDetails extends Component {
  state = {
    detaillist: [],
    kembalilist: [],
    modalVisible: false,
    id: ""
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  constructor(props) {
    super(props);
    AsyncStorage.getItem("id", (error, result) => {
        if (result) {
          this.setState({
            id: result
          });
        }
      });
  }

  componentDidMount = async () => {
    const id_detail = this.props.navigation.state.params.id_buku;

    await this.props.dispatch(getdetailBuku(id_detail));
    console.log("ini dari props", id_detail);
    this.setState({
      detaillist: this.props.listbuku.listBuku
    });
  };
  render() {
    const list = this.state.detaillist;
    const bookAdd = () => {
        if (!isEmpty(this.state.id)){
            const data = {
                'id_buku':list.id_buku,
                'id_ktp':this.state.id,
                'lama_pinjam':this.state.lama_pinjam  
            }
            console.log('ini data', data)
         this.props
          .dispatch(postPeminjaman(data))
          .then(() => {
            alert('Pinjam Success jangan lambat')
            this.props.navigation.navigate('Home');
          })
          .catch(() => {
            alert('Gagal Mohon cek Konkesi anda')
            this.props.navigation.navigate('Home');
          });
        }else {
            alert('Mohon Maaf Anda Harus Login Terlebih Dahulu')
                this.props.navigation.navigate('Login');
                this.setModalVisible(!this.state.modalVisible);
        }
        
      };
    console.warn("ini dari list", list);
    return (
      <ScrollView>
        <View>
          <Fragment>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={{ marginTop: 22 }}>
                <View>
                  <Text>Mau Pinjam Berapa Hari?</Text>
                  <View
                    style={{
                      flexGrow: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <TextInput
                      style={{
                        width: 300,
                        backgroundColor: "#020202",
                        borderRadius: 25,
                        paddingHorizontal: 16,
                        fontSize: 16,
                        color: "#fff",
                        marginVertical: 10
                      }}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholder="isi Jumlah hari"
                      placeholderTextColor="#ffffff"
                      onChangeText={lama_pinjam => this.setState({ lama_pinjam:lama_pinjam })}
                    />
                    <TouchableOpacity
                      style={styles.status}
                      onPress={bookAdd.bind(this)}
                    >
                      <Text style={styles.buttonText}>Pinjam Buku</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </Fragment>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: `${list.gbr}` }} />
            <View style={styles.textLeft}>
              <Text style={styles.name}>{list.nama_buku}</Text>
              <Text style={styles.writer}>Pengarang {list.pengarang}</Text>
              {list.status == "ada" ? (
                <Fragment>
                  <Button style={styles.status}>
                    <Text style={{ color: "white" }}>Tersedia</Text>
                  </Button>
                  <TouchableHighlight
                    style={styles.login}
                    onPress={() => {
                      this.setModalVisible(true);
                    }}
                  >
                    <Text style={{ color: "white" }}>Pinjam</Text>
                  </TouchableHighlight>
                </Fragment>
              ) : (
                <Fragment>
                  <Button style={styles.statusno}>
                    <Text style={{ color: "white" }}>Dipinjam</Text>
                  </Button>
                </Fragment>
              )}

              <View />
            </View>
          </View>
          <Text style={styles.des}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    listbuku: state.buku,
    listpeminjaman: state.peminjaman
  };
};

export default connect(mapStateToProps)(BookDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "relative",
    padding: 20
  },
  textLeft: {
    flexDirection: "column",
    flex: 1,
    paddingLeft: 10
  },
  image: {
    width: 90,
    height: 140,
    borderRadius: 10
  },
  name: {
    fontSize: 22,
    fontWeight: "bold"
  },
  writer: {
    fontSize: 18,
    paddingBottom: 10
  },
  status: {
    backgroundColor: "#bafb02",
    color: "white",
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5
  },
  statusno: {
    backgroundColor: "red",
    color: "white",
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5
  },
  statused: {
    backgroundColor: "green",
    color: "white",
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5
  },
  borrow: {
    backgroundColor: "#df42ff",
    marginTop: 8,
    color: "white",
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5
  },
  login: {
    backgroundColor: "#aaaaaa",
    marginTop: 8,
    color: "white",
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5
  },
  des: {
    marginTop: 0,
    padding: 20
  }
});
