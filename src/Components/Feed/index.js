import React from 'react'
import { View, Text, FlatList } from 'react-native';
import Post from '../Post/components';
import Stories from '../Stories';

const data = [
    {
        user: {
            imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg",
            name: "Sumedh"
        },
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg",
        captions: "Best in the world!!!",
        likesCount: 1455,
        posted: '6 min ago',
        commentCount: 34,
        id: "1"
    },
    {
        user: {
            imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg",
            name: "Sumedh"
        },
        imageUri: "https://picsum.photos/id/237/200/300",
        captions: "Best in the world!!!",
        likesCount: 1455,
        posted: '6 min ago',
        commentCount: 34,
        id: "2"
    },
    {
        user: {
            imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg",
            name: "Sumedh"
        },
        imageUri: "https://picsum.photos/id/237/200/300",
        captions: "Best in the world!!!",
        likesCount: 1455,
        posted: '6 min ago',
        commentCount: 34,
        id: "3"
    }, {
        user: {
            imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg",
            name: "Sumedh"
        },
        imageUri: "https://picsum.photos/id/237/200/300",
        captions: "Best in the world!!!",
        likesCount: 1455,
        posted: '6 min ago',
        commentCount: 34,
        id: "4"
    }
]

export default function Feed() {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={item => item.id}
            scrollEnabled
            ListHeaderComponent={Stories}

        />
    )
}
