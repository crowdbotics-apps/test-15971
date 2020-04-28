import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile33985Navigator from '../features/UserProfile33985/navigator';
import Maps33966Navigator from '../features/Maps33966/navigator';
import Settings33944Navigator from '../features/Settings33944/navigator';
import Settings33929Navigator from '../features/Settings33929/navigator';
import NotificationList33928Navigator from '../features/NotificationList33928/navigator';
import Maps33927Navigator from '../features/Maps33927/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile33985: { screen: UserProfile33985Navigator },
Maps33966: { screen: Maps33966Navigator },
Settings33944: { screen: Settings33944Navigator },
Settings33929: { screen: Settings33929Navigator },
NotificationList33928: { screen: NotificationList33928Navigator },
Maps33927: { screen: Maps33927Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
