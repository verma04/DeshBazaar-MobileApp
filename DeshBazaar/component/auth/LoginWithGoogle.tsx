import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Pressable} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import GoogleSvg from './GoogleSvg';
import {Flex, Text} from 'native-base';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const LoginWithGoogle = ({setActive}) => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      setActive();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={{marginTop: 20, width: '100%'}}>
      <Pressable onPress={googleLogin}>
        <View style={styles.loginButton}>
          <Flex display={'flex'} flexDirection={'row'}>
            <GoogleSvg />
            <Text pl={'1rem'}>Login with Google</Text>
          </Flex>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 40,
    borderRadius: 10,
  },
});

export default LoginWithGoogle;
