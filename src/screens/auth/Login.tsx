import {
  Box,
  Center,
  HStack,
  KeyboardAvoidingView,
  Pressable,
  Text,
  useTheme,
  View,
} from 'native-base';
import React from 'react';
import { Screen } from '~/components/screen/screen';
import Navegue from '../../assets/navegueLogo.svg';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '~/components/Input';
import { z } from 'zod';
import { Button } from '~/components/Button';
import { Keyboard, Platform, TouchableOpacity } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '~/routes/auth.routes';

const signInSchema = z.object({
  login: z.string().email('E-mail inválido'),
  senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});
type SignInForm = z.infer<typeof signInSchema>;

export function Login() {
  const { colors } = useTheme();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  });

  async function handleLogin(data: SignInForm) {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleRegister() {
    navigation.navigate('register');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Screen backGround={colors.black}>
          <View alignItems={'center'} mt={'24'}>
            <Navegue />
            <Text textTransform={'uppercase'} bold>
              Navegue Aqui
            </Text>
          </View>
          <Center mt={8}>
            <Text bold mb={2}>
              Login
            </Text>

            <Box w={'full'} mb={4}>
              <Controller
                control={control}
                name="login"
                render={({ field: { onChange, value } }) => (
                  <Input
                    title="E-mail"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.login?.message}
                    placeholder="email@email.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                )}
              />
            </Box>
            <Box w={'full'}>
              <Controller
                control={control}
                name="senha"
                render={({ field: { onChange, value } }) => (
                  <Input
                    title="Senha"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.senha?.message}
                    placeholder="Sua senha"
                    showPasswordToggle
                  />
                )}
              />
            </Box>
            <Box w={'full'} mt={'8'}>
              <Button disabled={isSubmitting} title="Entrar" onPress={handleSubmit(handleLogin)} />
            </Box>
            <Center w={'full'} mt={'8'}>
              <HStack space={2}>
                <Text>Não tem cadastro?</Text>
                <TouchableOpacity onPress={handleRegister}>
                  <Text color={colors.blue[500]}>Criar</Text>
                </TouchableOpacity>
              </HStack>
            </Center>
          </Center>
        </Screen>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
