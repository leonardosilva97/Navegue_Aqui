import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  color?: string;
  colorPressed?: string;
};

export function Button({
  title,
  variant,
  color = 'blue.500',
  colorPressed = 'blue.700',
  ...rest
}: Props) {
  return (
    <ButtonNativeBase
      style={{ borderRadius: 16 }}
      w="full"
      h={12}
      bg={variant === 'outline' ? 'transparent' : color}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="blue.500"
      rounded="sm"
      _pressed={{
        bg: variant === 'outline' ? 'gray.200' : colorPressed,
      }}
      {...rest}>
      <Text color={variant === 'outline' ? 'blue.500' : 'white'} fontSize="lg">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
