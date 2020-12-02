import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'


var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function TitleText({ label }) {
    return (<Text style={{ fontSize: 48, color: 'white' }}>
        {label}
    </Text>)
}

function Swipe() {

    function viewStyle() {
        return {
            flex: 1,
            backgroundColor: "red",
            justifyContent: 'center',
            alignItems: 'center',
        }
    }


    return (
        <Swiper
            loop={false}
            showsPagination={false}
            index={1}>
            <View style={viewStyle()}>
                <TitleText label="Left" />
            </View>
            <Swiper
                horizontal={false}
                loop={false}
                showsPagination={false}
                index={1}>
                <View style={viewStyle}>
                    <TitleText label="Top" />
                </View>
                <View style={viewStyle}>
                    <TitleText label="Home" />
                </View>
                <View style={viewStyle}>
                    <TitleText label="Bottom" />
                </View>
            </Swiper>
            <View style={viewStyle}>
                <TitleText label="Right" />
            </View>
        </Swiper>

    )
}


export default Swipe