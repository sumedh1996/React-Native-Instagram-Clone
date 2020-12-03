import React, {useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePicture from '../ProfilePicture';
import Story from '../UserStoryPreview'
import styles from './styles';
import storiesData from '../../Data/stories';
import { API, graphqlOperation } from 'aws-amplify';
import {listStorys} from '../../../graphql/queries'



export default function UserStoriesPreview() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const storiesData = await API.graphql(graphqlOperation(listStorys));
            setStories(storiesData.data.listStorys.items);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <FlatList
            data={stories}
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
