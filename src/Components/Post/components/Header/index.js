
import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

export default function Header({ imageUri, name }) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageUri} size={40} />
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.right}>
                <Icon name="dots-three-vertical" size={16} />
            </View>



        </View>
    )
}
