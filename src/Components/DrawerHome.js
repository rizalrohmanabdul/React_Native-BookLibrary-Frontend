import React from 'react'
import { View, ScrollView, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Alert } from 'react-native'
import { connect } from 'react-redux'
import { Icon} from 'native-base';


class DrawerHome extends React.Component{
    render(){
        return(
            <React.Fragment>
				<View style={styles.profile}>
					<Image
                        style={styles.image}
						source={require('../assets/img/1564481740.jpg')}
					/>
					<Text style={styles.name}>
						Manajemen Book
					</Text>
				</View>
				<ScrollView>
					<View>
						<FlatList
                            data = {[{Menuname: 'Home', icon: ''}, {Menuname: 'Login', icon: ''}]}
                            
							renderItem = {({item}) => { return (
								<TouchableOpacity style={styles.flhome} onPress={()=>  this.props.navigation.navigate(item.Menuname)}>
                                    {/* <Image style={{ width:24, height:24 }} source={{ uri: require('../assets/img/1564481740.jpg') }}/> */}
									<Text numberOfLines={1} style={styles.drawer}>{item.Menuname}</Text>
								</TouchableOpacity>
							)}}/>
					</View>
				</ScrollView>
			</React.Fragment>

        )
    }
}

export default DrawerHome

const styles = StyleSheet.create({
	profile: {
		alignItems: 'center',
		margin: 15
	},
	image: {
		width: 95,
		height: 96,
		borderRadius: 54
	},
	name: {
		fontSize: 17,
		marginTop: 10,
		fontWeight: '600',
		color: '#000000'
	},
	drawer: {
		margin: 10,
		fontWeight: '600', 
		color: '#000', 
		fontSize: 15,
		paddingLeft: 10
	},
	flhome: {
		width: '100%', 
		flexDirection: 'row', 
		alignItems: 'center', 
		paddingLeft: 18 
	}
});