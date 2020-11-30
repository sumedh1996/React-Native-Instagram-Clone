import React from 'react'
import { View, Text, TextInput } from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ANTIcon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import styles from './styles';


export default function CommentBar() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={"https://generalimagestest.s3.us-east-2.amazonaws.com/NordAvatar.png"} size={20} />
                <TextInput
                    placeholder="Add a comment..."
                />
            </View>
            <View style={styles.right}>
                <ANTIcon name="heart" style={styles.icon} size={16} />
                <Icon name="kiss-wink-heart" size={16} />
                <IonIcons name="ios-add-circle-outline" size={16} />
            </View>

        </View>
    )
}
