
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    likes: {
        fontWeight: 'bold',
        marginVertical: 7

    },
    captionContainer: {

        flexDirection: 'row',
        marginVertical: 7
    },
    user: {
        fontWeight: 'bold'
    },
    captions: {

    },
    posted: {
        color: '#8c8c8c',
        fontSize: 12,
        margin: 3
    },
    comments: {
        color: 'gray',
        marginVertical: 7
    },
    icon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between'


    },
    right: {
        marginRight: 15
    }
})

export default styles;