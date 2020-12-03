import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePicture from '../ProfilePicture';
import Story from '../UserStoryPreview'
import styles from './styles';
import storiesData from '../../Data/stories'

export default function UserStoriesPreview({ imageUri, name }) {
    return (
        <FlatList
            data={storiesData}
            renderItem={({ item }) => <Story story={item} />}
            keyExtractor={({ user: { id } }) => id}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled
            bounces={false}
            style={styles.container}
        />
    )
}
