import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../Screen/Homepage'
import Login from '../Screen/Login'
import Register from '../Screen/Register'
import History from '../Screen/Historyborrow'
import AddFoto from '../Screen/AddFoto'
import Drawerhome from '../Components/DrawerHome'
import Donasi from '../Screen/Donasi'
import Loading from '../assets/mainservice'
import DetailBook from '../Screen/Detailbook'
const HomeNavigator = createStackNavigator({
    Home,
    Login,
    Register,
    History,
    AddFoto,
    Donasi,
    Loading,
    DetailBook
}, {
    initialRouteName:'Home',
    headerMode: 'none'
}
)

const DrawerBook = createDrawerNavigator({
    Home : HomeNavigator
},{
    contentComponent: Drawerhome
})

export default createAppContainer(DrawerBook)

