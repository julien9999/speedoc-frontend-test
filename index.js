import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configAnimation from './app/config/Animations.config';

configAnimation();

AppRegistry.registerComponent(appName, () => App);
