
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: -8
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    right: {
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100
    },
    icon: {
        color: 'red'
    }
})

export default styles;