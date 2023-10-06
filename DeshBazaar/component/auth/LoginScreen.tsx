import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Keyboard, TextInput} from 'react-native';
import LoginWithGoogle from './LoginWithGoogle';
import AppleLogin from './AppleLogin';
import LoginForm from './LoginForm';

const Login = ({navigation, route}: {navigation: any}) => {
  const [keyboardStatus, setKeyboardStatus] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const {setActive} = route;

  console.log(route.params.setActive);

  return (
    <Flex
      width={'100%'}
      height={'100%'}
      flexDirection={'column'}
      justifyContent={'space-between'}>
      <Center width={'100%'}>
        <Center mt="100" width="70%">
          <Image size={100} source={require('../../assets/logo.png')} />
          <Heading marginTop={4} fontSize={25} fontWeight={900}>
            Login to continue
          </Heading>
          <LoginForm setActive={route.params.setActive} />

          <Center
            w={'100%'}
            flexDirection={'row'}
            justifyContent={'space-between'}>
            <Divider
              w={'40%'}
              _light={{
                bg: 'muted.800',
              }}
              _dark={{
                bg: 'muted.50',
              }}
            />
            <Text>or</Text>
            <Divider
              w={'40%'}
              _light={{
                bg: 'muted.800',
              }}
              _dark={{
                bg: 'muted.50',
              }}
            />
          </Center>

          <Box width={'100%'} alignItems="center">
            <LoginWithGoogle setActive={route.params.setActive} />
          </Box>
        </Center>
      </Center>
    </Flex>
  );
};

export default Login;
