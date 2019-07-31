import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../Screen/Homepage'
import Login from '../Screen/Login'
import Register from '../Screen/Register'
import Historyborrow from '../Screen/Historyborrow'
import AddFoto from '../Screen/AddFoto'
import Drawerhome from '../Components/DrawerHome'
const HomeNavigator = createStackNavigator({
    Home,
    Login,
    Register,
    Historyborrow,
    AddFoto
}, {
    initialRouteName:'AddFoto',
    headerMode: 'none'
}
)

const DrawerBook = createDrawerNavigator({
    Home : HomeNavigator
},{
    contentComponent: Drawerhome
})

export default createAppContainer(DrawerBook)

