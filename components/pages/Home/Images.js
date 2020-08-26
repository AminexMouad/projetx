import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  Appbar,
  Text,
  Button,
  List,
  Title,
  Paragraph,
  Card,
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Images = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Appbar.Header style={{ backgroundColor: 'green' }}>
        <Appbar.Content title='Images' />
        <Appbar.Action icon={'camera'} onPress={() => {}} />
      </Appbar.Header>
      <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 27, fontWeight: '700', color: '#008080' }}>
            Uploaded images
          </Text>
        </View>

        <Card style={{ marginTop: 10, marginBottom: 10 }}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title style={{ color: 'teal' }}>Image 1</Title>
            <Paragraph style={{ color: '#7c8997', fontSize: 12 }}>
              Excepteur cupidatat commodo voluptate esse.
            </Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.push('Generate', {
                  image: { uri: 'https://picsum.photos/700' },
                })
              }
            >
              <Button color={'teal'}>More detail</Button>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card style={{ marginTop: 10, marginBottom: 10 }}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title style={{ color: 'teal' }}>Image 1</Title>
            <Paragraph style={{ color: '#7c8997', fontSize: 12 }}>
              Excepteur cupidatat commodo voluptate esse.
            </Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity>
              <Button color={'teal'}>More detail</Button>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card style={{ marginTop: 10, marginBottom: 10 }}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title style={{ color: 'teal' }}>Image 1</Title>
            <Paragraph style={{ color: '#7c8997', fontSize: 12 }}>
              Excepteur cupidatat commodo voluptate esse.
            </Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity>
              <Button color={'teal'}>More detail</Button>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card style={{ marginTop: 10, marginBottom: 10 }}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title style={{ color: 'teal' }}>Image 1</Title>
            <Paragraph style={{ color: '#7c8997', fontSize: 12 }}>
              Excepteur cupidatat commodo voluptate esse.
            </Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity>
              <Button color={'teal'}>More detail</Button>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Images;
