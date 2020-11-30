import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles'

export default function ProfilePicture({ uri, size = 70 }) {
    return (
        <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
            <Image style={[styles.image, { width: size, height: size }]} source={{ uri }} />
        </View>
    )
}
