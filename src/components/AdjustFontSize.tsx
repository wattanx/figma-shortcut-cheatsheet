import { HStack, Stack, Text } from '@chakra-ui/react';
import { ShortcutBlock } from './ShortcutBlock';

export const AdjustFontSize: React.FC<{ colorMode: string }> = ({
  colorMode,
}) => (
  <Stack
    spacing={5}
    border="3px solid black"
    w="100%"
    p={4}
    maxW="400px"
    borderRadius="20px"
    bg={colorMode === 'dark' ? '#202225' : '#FFF'}
  >
    <Text fontSize="md" fontWeight="bold">
      フォントサイズ調整
    </Text>
    <HStack spacing={2}>
      <HStack spacing={2}>
        <ShortcutBlock
          colorMode={colorMode}
          keyName="⌘"
          description="command"
          isModifier={true}
        />
        <Text fontSize="md">+</Text>
      </HStack>
      <HStack spacing={2}>
        <ShortcutBlock colorMode={colorMode} keyName="⇧" description="shift" />
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
