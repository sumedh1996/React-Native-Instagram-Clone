import React from 'react'
import { View, Text } from 'react-native';
import Feed from '../../Components/Feed';

export default function ProfileScreen() {
    return (
        <View style={{ backgroundColor: 'blue', height: 1500 }}>
            <Text style={{ textAlign: 'center', top: 500, fontSize: 30, color: 'white' }}>
                Profile Screen
            </Text>
        </View>
    )
}
