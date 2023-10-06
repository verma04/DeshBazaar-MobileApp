import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from 'native-base';

const LoginForm = ({setActive}) => {
  return (
    <Center w="100%">
      <Box safeArea py="8" w="100%" maxW="290">
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button onPress={() => setActive()} mt="2" colorScheme="indigo">
            Login
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginForm;
