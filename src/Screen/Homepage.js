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
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import getHome from "../Public/redux/actions/home";
import {connect} from 'react-redux';

function text(text) {
  if(text.length > 15){
      let textSplit = text.substr(0, 15)
      return `${textSplit} ...`    
  }else{
      let textSplit = text
      return `${textSplit}`
  }    
}
class Homepage extends Component {
  constructor(props) {
		super(props);

		this.state = { 
			bookhome: []
		};
  }
  componentDidMount = async () => {
    await this.props.dispatch(getHome());
    console.log("ini dari props", this.props.listbookhome);
    this.setState({
      bookhome: this.props.listbookhome.listBuku.result
    });
  };

    renderFooter = () => {
      return (
        <View>
          <View style={{ paddingVertical: 12 }}>
            <ActivityIndicator animating size="large" color="#333333" />
          </View>
        </View>
      );
    };
  render() {
    return (
      <React.Fragment>
        <View style={component.header}>
          {/* <View style={component.itemsHeader}>
            
          </View> */}
          <Text style={component.items}>BOOK</Text>
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
          <View style={{flex: 1, width: '100%'}}>
          <FlatList
            data={this.state.bookhome}
              ListFooteerComponent={this.renderFooter}
            numColumns={2}
            style={{ paddingLeft: 15, paddingRight: 15 }}
            keyExtractor={item => item.id_buku.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity  onPress={()=>  alert(item.id_buku)}>
                  <Card style={{ margin: 8, borderRadius: 8 }} elevation={4}>
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
        </View>
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

    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.8,
    //     shadowRadius: 2
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
    paddingLeft: 50,
    backgroundColor: "#eeeeee",
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 10
  },
  body: {
    marginTop: 80,
    width: "96%",
    height: 1000,
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
