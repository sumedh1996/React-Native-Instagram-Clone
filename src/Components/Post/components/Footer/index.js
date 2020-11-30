
import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles'

export default function Footer({ likesCount, commentCount, captions, posted }) {
    return (
        <View style={styles.container}>
            <Text style={styles.likes}>{likesCount} likes</Text>
            <View style={styles.captionContainer}>
                <Text style={styles.user}>UserName</Text>
                <Text style={styles.captions}>{captions}</Text>
            </View>
            <Text style={styles.posted}>{posted}</Text>
        </View>
    )
}
