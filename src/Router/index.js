import * as React from 'react';
import NotificationScreen from '../Screens/NotificationScreen';
import PostScreen from '../Screens/PostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ReelsScreen from '../Screens/ReelsScreen';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HomeRoutes from './home.routes';
import CameraScreen from '../Screens/Camera'
import ChatsScreen from '../Screens/ChatsScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Router = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            scrollEnabled: true
        }}
    >
        <Stack.Screen
            name="home"
            component={Tabbb}
        />

        <Stack.Screen
            name="Camera"
            component={CameraScreen}
        />
        <Stack.Screen
            name="Chats"
            component={ChatsScreen}
        />
    </Stack.Navigator>
)

const Tabbb = () => (

    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

                if (route.name === 'Home') {
                    return <FoundationIcons name="home" size={size} color={color} />
                }
                if (route.name === 'Reels') {
                    return <FoundationIcons name="play-video" size={size} color={color} />
                }
                if (route.name === 'Post') {
                    return <FeatherIcons name="plus-square" size={size} color={color} />
                }
                if (route.name === 'Notification') {
                    return <AntIcons name="heart" size={size} color={color} />
                }
                if (route.name === 'Profile') {
                    return <FontAwesomeIcon name="user" size={size} color={color} />
                }

            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false
        }}
    >
        <Tab.Screen name="Home" component={HomeRoutes} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
)
export default Router;