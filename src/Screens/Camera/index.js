import React from 'react'
import { View, Text } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';

export default function CameraScreen() {
    return (
        <View>
        <RNCamera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
        />
      </View>
    )
}