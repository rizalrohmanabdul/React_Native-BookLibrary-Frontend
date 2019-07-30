import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../Screen/Homepage'
import Drawerhome from '../Components/DrawerHome'
const HomeNavigator = createStackNavigator({
    Home
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

