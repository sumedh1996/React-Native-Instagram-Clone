import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ProfilePicture from '../ProfilePicture';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';

export default function UserStoryPreview(props) {

    const {
        story: {
            user: {
                id,
                image,
                name
            }
        }
    } = props;

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Story', { userId: id })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ProfilePicture uri={image} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}
