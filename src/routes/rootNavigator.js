import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../Screen/Homepage'
const HomeNavigator = createStackNavigator({
    Home
}, {
    initialRouteName:'Home',
    headerMode: 'none'
}
)

const DrawerBook = createDrawerNavigator({
    Home : HomeNavigator
})

export default createAppContainer(DrawerBook)

