import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import OtpInput from 'custom-react-native-otp-input';

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from 'native-base';
const App = () => {
  const [otp, setOtp] = useState<string>('');

  return (
    <>
      <Flex
        width={'100%'}
        height={'100%'}
        flexDirection={'column'}
        justifyContent={'space-between'}>
        <Center width={'100%'}>
          <Center mt="100" width="70%">
            <Image size={100} source={require('../../assets/logo.png')} />
            <Heading marginTop={4} fontSize={25} fontWeight={900}>
              Enter Otp
            </Heading>
            <VStack marginTop={1} space={7} alignItems="center">
              <Text style={{textAlign: 'center'}}>
                Enter Otp sent to register email address
              </Text>

              <OtpInput
                value={val => setOtp(val)}
                numberOfDigits={4}
                inputShape={'box'}
                secureEntry
              />
            </VStack>

            <Box mt="30" width={'100%'} alignItems="center">
              <Button width={'100%'} onPress={() => console.log('hello world')}>
                Submit
              </Button>
            </Box>
          </Center>
        </Center>
      </Flex>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
