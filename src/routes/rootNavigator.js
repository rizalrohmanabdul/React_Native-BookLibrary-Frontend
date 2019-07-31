import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../Screen/Homepage'
import Login from '../Screen/Login'
import Register from '../Screen/Register'
import Drawerhome from '../Components/DrawerHome'
const HomeNavigator = createStackNavigator({
    Home,
    Login,
    Register,
}, {
    initialRouteName:'Register',
    headerMode: 'none'
}
)

const DrawerBook = createDrawerNavigator({
    Home : HomeNavigator
},{
    contentComponent: Drawerhome
})

export default createAppContainer(DrawerBook)

