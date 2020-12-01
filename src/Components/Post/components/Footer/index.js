
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAicon from 'react-native-vector-icons/FontAwesome'
import CommentBar from '../CommentBar';


export default function Footer({ likesCount, commentCount, captions, posted }) {

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const onLikePressed = () => {


        const amount = isLiked ? -1 : 1;
        setLikeCount(likesCount + amount);
        setIsLiked(!isLiked);

    }

    useEffect(() => {
        setLikeCount(likesCount);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <View style={styles.left}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ?
                            <Icon name="heart" size={25} color='#e73838' /> :
                            <Icon name="hearto" size={25} color="#4f4f4f" />
                        }
                    </TouchableWithoutFeedback>

                    <FontistoIcon name="comment" size={24} color="#4f4f4f" />
                    <IoniconsIcon name="paper-plane-outline" size={24} color="#4f4f4f" />
                </View>
                <View style={styles.right}>
                    <FAicon name="bookmark-o" size={24} color="#4f4f4f" />
                </View>

            </View>
            <Text style={styles.likes}>{likeCount} likes</Text>
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
