import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Appbar, Text, Button } from 'react-native-paper';
import Rotate from '../../../assets/rotate.png';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState('');
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* <Image source={Rotate} style={{ width: 50, height: 50 }} /> */}
      <Camera
        style={{ flex: 1, height: 300 }}
        type={type}
        ref={(ref) => {
          setCamera(ref);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                margin: 10,
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Image source={Rotate} style={{ width: 50, height: 50 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={async () => {
                if (camera) {
                  let photo = await camera.takePictureAsync();
                  console.log(photo);
                  await FileSystem.copyAsync({
                    from: photo.uri,
                    to: FileSystem.documentDirectory + 'test.jpg',
                  });
                  console.log(await FileSystem.getInfoAsync('file:///data/'));
                }
              }}
            >
              <Text style={{ color: 'white' }}>Take picture</Text>
            </TouchableOpacity>
            <View></View>
          </View>
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;
