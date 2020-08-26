import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

import Logo from '../../assets/logo.png';
const Login = (props) => {
  const [user, setUser] = useState({ email: '', password: '' });
  return (
    <View
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View style={{ marginTop: 60, paddingBottom: 50 }}>
        <Image
          source={Logo}
          style={{ width: 150, height: 150, alignSelf: 'center' }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          label='Email'
          value={user.email}
          onChangeText={(email) => setEmail({ ...user, email })}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          label='password'
          value={user.password}
          onChangeText={(password) => setEmail({ ...user, password })}
        />
      </View>
      {/* <Text style={{ color: 'red', fontWeight: '700' }}>
        *your email or password are incorrect
      </Text> */}

      <View style={styles.container}>
        <Button
          style={{ backgroundColor: 'teal' }}
          icon='lock'
          mode='contained'
          onPress={() => props.navigation.push('MainHome')}
        >
          Log in
        </Button>
      </View>
      <View style={styles.container}>
        <Button
          style={{ backgroundColor: 'green' }}
          icon='login'
          mode='contained'
          onPress={() => props.navigation.push('SignUp')}
        >
          Sign up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});

export default Login;
