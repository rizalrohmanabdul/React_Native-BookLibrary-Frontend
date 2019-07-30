import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../Screen/Homepage'
import Login from '../Screen/Login'
import Drawerhome from '../Components/DrawerHome'
const HomeNavigator = createStackNavigator({
    Home,
    Login
}, {
    initialRouteName:'Login',
    headerMode: 'none'
}
)

const DrawerBook = createDrawerNavigator({
    Home : HomeNavigator
},{
    contentComponent: Drawerhome
})

export default createAppContainer(DrawerBook)

