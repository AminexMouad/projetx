import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Appbar, Text, Button, List } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const Home = (props) => {
  const [image, setImage] = useState({});
  const [images, setImages] = useState([
    {
      id: 1,
      uri:
        'https://media.ooreka.fr/public/image/plant/1835/varietyImage/7d2ug2w86ts80w4cs4000w0og-full-12986581.jpg',
      title: 'Title 1',
      subtitle: 'Aliquip nisi sint amet tempor ea tempor pariatur veniam.',
    },
    {
      id: 2,
      uri:
        'https://lh3.googleusercontent.com/proxy/93Xb0Fby5MWtED3FiJc6sPEXEdMzyUiy59qdAaoDekIGMIiFCmD-ZYpLI5xJV_cMbr7iX6nl5nI6yuT6MEgvNFys-ZfFi6DfR6PqgYKJcTOC7wB0l_aAHVk',
      title: 'Title 2',
      subtitle:
        'Qui veniam elit sit nisi nulla Lorem qui qui qui exercitation duis enim veniam est.',
    },

    {
      id: 3,
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOuD8uwtRZsaCa2cKXCrseJaFpU6Yy2nZhHg&usqp=CAU',
      title: 'Title 3',
      subtitle:
        'Sit sint pariatur qui anim ipsum nulla culpa est minim deserunt.',
    },
    {
      id: 4,
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL2jJDCCYU8kHuW1sMcBQKIgH8wWjW0bxjBA&usqp=CAU',
      title: 'Title 4',
      subtitle:
        'Duis excepteur irure aliquip enim ipsum do irure ex tempor officia dolor.',
    },
  ]);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  useEffect(() => {
    if (image.uri) {
      props.navigation.push('Generate', { image });
    }
  }, [image]);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const renderImages = () => {
    return images.map((image) => {
      return (
        <Image
          key={image.id}
          source={{
            uri: image.uri,
          }}
          style={{ height: 100, width: '50%' }}
        />
      );
    });
  };

  const renderList = () => {
    return images.map((image) => {
      return (
        <List.Item
          key={image.id}
          title={image.title}
          description={image.subtitle}
          left={(props) => (
            <Image
              style={{ height: 60, width: 60 }}
              source={{ uri: image.uri }}
            />
          )}
        />
      );
    });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <Appbar.Header style={{ backgroundColor: 'green' }}>
        <Appbar.Content style={{ alignItems: 'center' }} title='Home' />
      </Appbar.Header>
      <View style={{ paddingLeft: 15, paddingRight: 15 }}>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.title}>Latest updated images</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {renderImages()}
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.push('Images');
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: 'teal',
                textDecorationLine: 'underline',
                fontWeight: '700',
              }}
            >
              More images
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.title}>Latest generated Data</Text>
        </View>
        <View>{renderList()}</View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => props.navigation.push('Datas')}>
            <Text
              style={{
                fontSize: 19,
                color: 'teal',
                textDecorationLine: 'underline',
                fontWeight: '700',
              }}
            >
              More Data
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Button
            style={{ backgroundColor: 'teal' }}
            icon='camera'
            mode='contained'
            onPress={() => {
              _pickImage();
              // props.navigation.push('Generate');
            }}
          >
            take a picture
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 27, fontWeight: '700', color: '#008080' },
});

export default Home;
