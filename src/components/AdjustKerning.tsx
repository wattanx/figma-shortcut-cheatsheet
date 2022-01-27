import { HStack, Stack, Text } from '@chakra-ui/react';
import { ShortcutBlock } from './ShortcutBlock';

export const AdjustKerning: React.FC<{ colorMode: string }> = ({
  colorMode,
}) => (
  <Stack
    spacing={5}
    border="3px solid black"
    w="100%"
    p={4}
    maxW="400px"
    borderRadius="20px"
    bg="base"
  >
    <Text fontSize="md" fontWeight="bold">
      カーニング調整
    </Text>
    <HStack spacing={2}>
      <HStack spacing={2}>
        <ShortcutBlock
          colorMode={colorMode}
          keyName="⌥"
          description="option"
          isModifier={true}
        />
        <Text fontSize="md">+</Text>
      </HStack>
      <HStack spacing={2}>
        <ShortcutBlock colorMode={colorMode} keyName="<" />
        <Text fontSize="md">or</Text>
        <ShortcutBlock colorMode={colorMode} keyName=">" />
      </HStack>
    </HStack>
  </Stack>
);
