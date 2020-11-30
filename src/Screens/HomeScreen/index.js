import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../Components/ProfilePicture';
import Stories from '../../Components/Stories';
import Feed from '../../Components/Feed';

const post = {
    user: {
        imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg",
        name: "Sumedh"
    },
    imageUri: "https://generalimagestest.s3.us-east-2.amazonaws.com/WhatsApp+Image+2020-11-07+at+10.10.40+AM.jpeg",
    captions: "Best in the world!!!",
    likesCount: 1455,
    posted: '6 min ago',
    commentCount: 34
}

export default function HomeScreen() {
    return (
        <View>
            <Feed />
        </View>
    )
}
