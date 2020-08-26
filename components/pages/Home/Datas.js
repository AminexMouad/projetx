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
  DataTable,
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Datas = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Appbar.Header style={{ backgroundColor: 'green' }}>
        <Appbar.Content title='Reports' />
        {/* <Appbar.Action icon={'camera'} onPress={() => {}} /> */}
      </Appbar.Header>
      <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 27, fontWeight: '700', color: '#008080' }}>
            Generated Reports
          </Text>
        </View>

        <Card style={{ marginTop: 10, marginBottom: 10 }}>
          <Card.Cover
            source={{
              uri:
                'https://www.usinenouvelle.com/mediatheque/8/7/5/000282578/ble.jpg',
            }}
          />
          <Card.Content>
            <Title style={{ color: 'teal' }}>Placeholder data 1</Title>
            {/* <Paragraph style={{ color: '#7c8997', fontSize: 12 }}>
              Excepteur cupidatat commodo voluptate esse.
            </Paragraph> */}
            <DataTable.Header>
              <DataTable.Title>Attributes</DataTable.Title>
              <DataTable.Title>Label</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Nature</DataTable.Cell>
              <DataTable.Cell>Strong</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Count on plants</DataTable.Cell>
              <DataTable.Cell>237</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Count of colors</DataTable.Cell>
              <DataTable.Cell>5</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Dominant color</DataTable.Cell>
              <DataTable.Cell>Green</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Head of size</DataTable.Cell>
              <DataTable.Cell>27</DataTable.Cell>
            </DataTable.Row>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => props.navigation.push('DataInfos')}
            >
              <Button color={'teal'}>More detail</Button>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        <Card style={{ marginTop: 10, marginBottom: 10 }}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title style={{ color: 'teal' }}>Placeholder data 1</Title>
            {/* <Paragraph style={{ color: '#7c8997', fontSize: 12 }}>
              Excepteur cupidatat commodo voluptate esse.
            </Paragraph> */}
            <DataTable.Header>
              <DataTable.Title>Attributes</DataTable.Title>
              <DataTable.Title>Label</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Nature</DataTable.Cell>
              <DataTable.Cell>Strong</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Count on plants</DataTable.Cell>
              <DataTable.Cell>237</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Count of colors</DataTable.Cell>
              <DataTable.Cell>5</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Dominant color</DataTable.Cell>
              <DataTable.Cell>Green</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Head of size</DataTable.Cell>
              <DataTable.Cell>27</DataTable.Cell>
            </DataTable.Row>
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
            <Title style={{ color: 'teal' }}>Placeholder data 1</Title>
            {/* <Paragraph style={{ color: '#7c8997', fontSize: 12 }}>
              Excepteur cupidatat commodo voluptate esse.
            </Paragraph> */}
            <DataTable.Header>
              <DataTable.Title>Attributes</DataTable.Title>
              <DataTable.Title>Label</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Nature</DataTable.Cell>
              <DataTable.Cell>Strong</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Count on plants</DataTable.Cell>
              <DataTable.Cell>237</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Count of colors</DataTable.Cell>
              <DataTable.Cell>5</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Dominant color</DataTable.Cell>
              <DataTable.Cell>Green</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Head of size</DataTable.Cell>
              <DataTable.Cell>27</DataTable.Cell>
            </DataTable.Row>
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
            <Title style={{ color: 'teal' }}>Placeholder data 1</Title>
            {/* <Paragraph style={{ color: '#7c8997', fontSize: 12 }}>
              Excepteur cupidatat commodo voluptate esse.
            </Paragraph> */}
            <DataTable.Header>
              <DataTable.Title>Attributes</DataTable.Title>
              <DataTable.Title>Label</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Nature</DataTable.Cell>
              <DataTable.Cell>Strong</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Count on plants</DataTable.Cell>
              <DataTable.Cell>237</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Count of colors</DataTable.Cell>
              <DataTable.Cell>5</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Dominant color</DataTable.Cell>
              <DataTable.Cell>Green</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Head of size</DataTable.Cell>
              <DataTable.Cell>27</DataTable.Cell>
            </DataTable.Row>
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

export default Datas;
