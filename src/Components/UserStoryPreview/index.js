import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import ProfilePicture from '../ProfilePicture';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';

export default function StoryScreen({ imageUri, name }) {

    const navigation = useNavigation();

    const onPress = () => {
        console.warn("Hello")
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <ProfilePicture uri={imageUri} />
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
