
import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAicon from 'react-native-vector-icons/FontAwesome'
import CommentBar from '../CommentBar';


export default function Footer({ likesCount, commentCount, captions, posted }) {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <View style={styles.left}>
                    <Icon name="hearto" size={25} />
                    <FontistoIcon name="comment" size={24} />
                    <IoniconsIcon name="paper-plane-outline" size={24} />
                </View>
                <View style={styles.right}>
                    <FAicon name="bookmark-o" size={24} />
                </View>

            </View>
            <Text style={styles.likes}>{likesCount} likes</Text>
            <View style={styles.captionContainer}>
                <Text style={styles.user}>UserName</Text>
                <Text style={styles.captions}>{captions}</Text>
            </View>
            <Text style={styles.comment}>View all {commentCount} comments</Text>
            <CommentBar />
            <Text style={styles.posted}>{posted}</Text>
        </View>
    )
}
