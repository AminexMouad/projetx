import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const SignUp = (props) => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
      }}
    >
      <View style={{ marginTop: 60 }}>
        <Text style={{ fontSize: 27, fontWeight: '700', color: '#008080' }}>
          Sign up
        </Text>
      </View>
      <View style={{ paddingTop: 35 }}>
        <View style={styles.container}>
          <TextInput
            label='Username'
            value={user.userName}
            onChangeText={(userName) => setUser({ ...user, userName })}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            label='Email'
            value={user.email}
            onChangeText={(email) => setUser({ ...user, email })}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            label='Password'
            value={user.password}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            label='Confirm password'
            value={user.confirmPassword}
            onChangeText={(confirmPassword) =>
              setUser({ ...user, confirmPassword })
            }
          />
        </View>

        <View style={styles.container}>
          <Button
            style={{
              height: 50,
              backgroundColor: 'teal',
              justifyContent: 'center',
            }}
            icon='login'
            mode='contained'
            onPress={() => props.navigation.push('Home')}
          >
            Register
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});
export default SignUp;
