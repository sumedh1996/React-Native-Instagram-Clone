import React from 'react'
import { View, Text } from 'react-native'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Post({post}) {

    return (
        <View>
            <Header name={post.user.name} imageUri={post.user.imageUri} />
            <Body imageUri={post.imageUri}/>
            <Footer 
                likesCount={post.likesCount} 
                commentCount={post.commentCount}
                captions={post.captions}
                posted={post.posted}
            />
        </View>
    )
}
