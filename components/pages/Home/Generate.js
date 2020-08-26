import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Appbar, Text, TextInput, Button } from 'react-native-paper';
const Generate = (props) => {
  const [report, setReport] = useState({ title: '', description: '' });
  console.log(props.route.params.image.uri);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Appbar.Header style={{ backgroundColor: 'green' }}>
        <Appbar.Content title='Generate Report' />
        {/* <Appbar.Action icon={'camera'} onPress={() => {}} /> */}
      </Appbar.Header>
      <View style={{ paddingLeft: 15, paddingRight: 15, height: '100%' }}>
        <Image
          source={{
            uri: props.route.params.image.uri,
          }}
          style={{ width: '100%', height: '45%', marginTop: 15 }}
        />
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <TextInput
            label='Report Title'
            value={report.title}
            onChangeText={(title) => setReport({ ...report, title })}
          />
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Button
              style={{ backgroundColor: 'teal' }}
              icon='file'
              mode='contained'
              onPress={() => {
                props.navigation.push('Datas');
              }}
            >
              Generate Report
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Generate;
