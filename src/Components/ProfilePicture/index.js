import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles'

export default function ProfilePicture() {
    return (
        <View>

            <Image style={styles.image} source={{ uri: "https://generalimagestest.s3.us-east-2.amazonaws.com/f58160f6-bca3-4c35-a72d-f36011b1c366.JPG" }} />
        </View>
    )
}
