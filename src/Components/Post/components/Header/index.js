
import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles'

export default function Header({ imageUri, name }) {
    return (
        <View style ={styles.container}>
            <ProfilePicture uri={imageUri} size= {40} />
            <Text style={styles.text}>{name}</Text>

        </View>
    )
}
