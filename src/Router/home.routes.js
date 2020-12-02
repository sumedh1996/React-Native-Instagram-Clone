import * as React from 'react';
import {
    Image
} from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcons from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import logo from '../Assets/Images/logo.png'
import StoryScreen from '../Components/UserStoryPreview';
import { useNavigation } from '@react-navigation/native';
const HomeStack = createStackNavigator();



const HomeRoutes = () => {
    const navigation = useNavigation();
    const onPressCamera = () => {
        navigation.navigate('Camera')
    }
    const onPressChats = () => {
        navigation.navigate('Chats')
    }
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Instagram',
                    headerLeft: () => (

                        <FeatherIcons name="camera" size={24} color={"#000"} style={{

                        }} onPress={onPressCamera} />
                    ),
                    headerLeftContainerStyle: {
                        marginLeft: 15
                    },
                    headerRight: () => (
                        <IonIcons name="paper-plane-outline" size={24} color={"#000"} style={{

                        }} onPress={onPressChats} />

                    ),
                    headerRightContainerStyle: {
                        marginRight: 15
                    },
                    headerTitle: () => (
                        <Image source={logo} resizeMode={'contain'} style={{
                            width: 130
                        }} />
                    )
                }}
            />
            <HomeStack.Screen
                name="Story"
                component={StoryScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeRoutes;