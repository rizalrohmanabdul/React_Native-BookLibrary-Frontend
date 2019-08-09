import React, { Component, Fragment } from "React";
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
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import getHome from "../Public/redux/actions/home";
import { connect } from "react-redux";
import Axios from "axios";
function text(text) {
  if (text.length > 15) {
    let textSplit = text.substr(0, 15);
    return `${textSplit} ...`;
  } else {
    let textSplit = text;
    return `${textSplit}`;
  }
}
class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookhome: [],
      loading: false,
      page: 1
    };
  }
  componentDidMount = async () => {
    // await this.fetchUser();
    const { page } = this.state;
    await this.props.dispatch(getHome(page)).then(() => {
      this.setState({
        loading: true
      });
    });
    this.setState({
      bookhome: this.props.listbookhome.listBuku.result
    });
  };
  fetchUser() {
    const { page } = this.state;
    const url = `https://perpusfinal.herokuapp.com/book/?page=${page}`;
    Axios
      .get(url)
      .then(res => {
        this.setState({
            loading: true,
            bookhome: this.state.bookhome.concat(res.data.result)
        })
        console.warn('ini res', res.data.result)
    }).catch(() => {
        this.setState({ loading: true })
    })
  }
  renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          marginVertical: 15
        }}
      >
        <>
          <ActivityIndicator animating size="large" />
          <Text style={{ fontSize: 12 }}>Loading data..</Text>
        </>
      </View>
    );
  };
  handleLoadMore = () => {
    this.setState({
        page: this.state.page + 1,
    }, () => {
        this.fetchUser()
    })
}
  handlePullRefresh = async () => {
    await this.setState({ loading: true });
    await this.props.dispatch(getHome()).then(() => {
      this.setState({
        page: 1,
        bookhome: this.props.listbookhome.listBuku.result,
        loading: true
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading == false ? (
          <View
            style={{
              height: 500,
              width: "100%",
              flex: 1,
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <ActivityIndicator
              color="black"
              size="large"
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center"
              }}
            />
          </View>
        ) : (
          <Fragment>
            <View style={component.header}>
              <View style={component.itemsHeader}>
                <Text style={component.items}>BOOK</Text>
              </View>
            </View>
            <View style={component.body}>
              <View
                style={{
                  backgroundColor: "transparent",
                  borderBottomColor: "transparent"
                }}
              >
                <TextInput style={component.input} placeholder="Search" />
              </View>
              <FlatList
                data={this.state.bookhome}
                numColumns={2}
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  flex: 1,
                  height: "100%"
                }}
                ListFooterComponent={this.renderFooter.bind(this)}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.1}
                onEndReached={this.handleLoadMore.bind(this)}
                keyExtractor={item => item.id_buku.toString()}
                refreshing={this.state.loading}
                onRefresh={this.handlePullRefresh}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("DetailBook", {
                          id_buku: item.id_buku
                        })
                      }
                    >
                      <Card
                        style={{ margin: 8, borderRadius: 8 }}
                        elevation={4}
                      >
                        <Image
                          style={{
                            width: 150,
                            height: 200,
                            borderRadius: 8
                          }}
                          source={{ uri: item.gbr }}
                        />
                        <CardItem footer bordered>
                          <Text>{text(item.nama_buku)}</Text>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </Fragment>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    listbookhome: state.home
  };
};

export default connect(mapStateToProps)(Homepage);

const component = StyleSheet.create({
  header: {
    position: "absolute",
    paddingTop: 20,
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 0.8
  },
  itemsHeader: {
    height: 45,
    justifyContent: "center",
    flexDirection: "row"
  },
  logout: {
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-end",
    paddingRight: 20
  },
  items: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "sans-serif-condensed",
    textAlign: "center",
    flex: 1
  },
  input: {
    width: "86.5%",
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 20,
    backgroundColor: "#eeeeee",
    marginHorizontal: 25,
    marginBottom: 10
  },
  body: {
    marginTop: 70,
    width: "96%",
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "column"
  },
  card: {
    borderColor: "#f2f2f2",
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    padding: 5
  },
  itemTitle: {
    fontSize: 15,
    paddingLeft: 10,
    color: "#fff",
    fontWeight: "600"
  },
  itemDate: {
    marginTop: 10,
    paddingLeft: "65%",
    fontSize: 10,
    color: "#fff",
    fontWeight: "600"
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10
  },

  itemNote: {
    fontWeight: "600",
    fontSize: 10,
    color: "#fff",
    paddingLeft: 10
  }
});
