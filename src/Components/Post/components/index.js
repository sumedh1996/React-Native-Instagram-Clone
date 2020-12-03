import React from 'react'
import { View, Text } from 'react-native'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Post({ post }) {

    return (
        <View>
            <Header imageUri={post.user.image} name={post.user.name} />
            <Body imageUri={post.image} />
            <Footer
                likesCount={post.likes}
                caption={post.caption}
                postedAt={post.createdAt}
                user={post.user}
            />
        </View>
    )
}
