import React from 'react';
import { View, ScrollView, Image } from 'react-native';
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
const DataInfos = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Appbar.Header style={{ backgroundColor: 'green' }}>
        <Appbar.Content title='Placeholder data 1' />
        {/* <Appbar.Action icon={'camera'} onPress={() => {}} /> */}
      </Appbar.Header>
      <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
        <Image
          style={{ width: '100%', height: 250 }}
          source={{
            uri:
              'https://www.usinenouvelle.com/mediatheque/8/7/5/000282578/ble.jpg',
          }}
        />
        <View style={{ paddingTop: 15 }}>
          <Paragraph>
            Laborum voluptate et tempor veniam consequat est quis ex eu commodo
            id tempor velit fugiat. Exercitation dolore eu nostrud commodo eu ad
            Lorem aliqua. Velit et ex ullamco qui id culpa ut sunt culpa
            voluptate pariatur. In consequat ea consequat in consequat sint aute
            labore labore cupidatat mollit sunt labore adipisicing. Nulla
            reprehenderit esse deserunt ad proident. Consectetur id aute esse
            commodo ipsum velit amet deserunt anim ea sint aute exercitation
            elit.
          </Paragraph>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default DataInfos;
