import { Spinner, Center, Image, Text } from 'native-base';

export function Loading() {
  return (
    <Center flex={1} bg="white">
      <Text>Loading...</Text>
    </Center>
  );
}
