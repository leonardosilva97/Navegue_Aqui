import { Box, Center, HStack, Text, useTheme, View } from 'native-base';
import React from 'react';
import { Screen } from '~/components/screen/screen';
import Navegue from '../../assets/navegueLogo.svg';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '~/components/Input';
import { z } from 'zod';
import { Button } from '~/components/Button';
import { TouchableOpacity } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '~/routes/auth.routes';

const registerSchema = z
  .object({
    name: z.string().min(1, { message: 'O nome é obrigatório' }),
    email: z.string().email({ message: 'E-mail inválido' }),
    password: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
    confirmPassword: z.string().min(6, { message: 'Confirme sua senha' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export function Register() {
  const { colors } = useTheme();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  async function handleRegister(data: RegisterForm) {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleLogin() {
    navigation.navigate('login');
  }

  return (
    <Screen canGoBack scrolable backGround={colors.black} goBack={handleLogin}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <View alignItems={'center'} mt={'12'}>
        <Navegue />
        <Text textTransform={'uppercase'} bold mb={4}>
          Navegue Aqui
        </Text>
        <Text bold>Criar Cadastro</Text>
      </View>

      <Center mt={4} w="full">
        <Box w="full" mb={4}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
                placeholder="Nome completo"
              />
            )}
          />
        </Box>

        <Box w="full" mb={4}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                title="E-mail"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
                placeholder="email@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            )}
          />
        </Box>

        <Box w="full" mb={4}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                placeholder="Sua senha"
                showPasswordToggle
              />
            )}
          />
        </Box>

        <Box w="full" mb={4}>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Confirmar Senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.confirmPassword?.message}
                placeholder="Confirme sua senha"
                showPasswordToggle
              />
            )}
          />
        </Box>

        <Box w="full" mt={8}>
          <Button disabled={isSubmitting} title="Criar" onPress={handleSubmit(handleRegister)} />
        </Box>

        <Center w="full" mt={8}>
          <HStack space={2}>
            <Text color="white">Já tem uma conta?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text color={colors.blue[500]}>Entrar</Text>
            </TouchableOpacity>
          </HStack>
        </Center>
      </Center>
    </Screen>
  );
}
