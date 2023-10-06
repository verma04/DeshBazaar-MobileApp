import {View, Text} from 'react-native';
import React from 'react';
import {Box, Center, Flex, Heading, VStack, Image} from 'native-base';
import {Button} from 'native-base';
const SplashScreen = ({navigation}: {navigation: any}) => {
  return (
    <Flex
      width={'100%'}
      height={'100%'}
      flexDirection={'column'}
      justifyContent={'space-between'}>
      <Center width={'100%'}>
        <Center mt="100" width="70%">
          <Image size={100} source={require('../../assets/logo.png')} />
          <Heading
            marginTop={4}
            fontSize={25}
            textAlign={'center'}
            fontWeight={900}>
            Create your market list.
          </Heading>
          <VStack marginTop={1} space={7} alignItems="center">
            <Text style={{textAlign: 'center'}}>
              So you never forget something. Remember that you will always find
              the freshest products on the market
            </Text>
            <Box alignItems="center">
              <Button onPress={() => navigation.navigate('Login')}>
                Start now
              </Button>
            </Box>
          </VStack>
        </Center>
      </Center>
      <Image source={require('../../assets/spash.png')} />
    </Flex>
  );
};

export default SplashScreen;
