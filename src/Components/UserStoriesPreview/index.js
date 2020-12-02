import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePicture from '../ProfilePicture';
import Story from '../UserStoryPreview'
import styles from './styles';

const data = [
    {
        name: "Sumedh",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/f58160f6-bca3-4c35-a72d-f36011b1c366.JPG"
    }, {
        name: "Nord",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/NordAvatar.png"
    }, {
        name: "Sakshi",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-16+at+1.48.52+AM.jpeg"
    }, {
        name: "Ashu",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg"
    },{
        name: "Tushar",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg"
    }, {
        name: "Sumedh2",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/f58160f6-bca3-4c35-a72d-f36011b1c366.JPG"
    }, {
        name: "Nord2",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/NordAvatar.png"
    }, {
        name: "Sakshi2",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-16+at+1.48.52+AM.jpeg"
    }, {
        name: "Ashu2",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg"
    },{
        name: "Tushar2",
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg"
    },
]

export default function Stories({ imageUri, name }) {
    return (
        <FlatList
                data={data}
                renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
                keyExtractor={({name}) => name}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled
                bounces={false}
                style={styles.container}
            />
    )
}
