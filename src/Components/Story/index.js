import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePicture from '../ProfilePicture';
import styles from './styles';


export default function Story({ imageUri, name }) {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} />
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}