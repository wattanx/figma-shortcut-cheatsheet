import { HStack, useColorMode, Text, Stack } from '@chakra-ui/react';
import { Shortcut, ShortCutDataType } from '@data/shortcut-data';
export const ShortcutBlockContainer: React.FC<ShortCutDataType> = ({
  shortcutList,
  action,
}) => {
  const { colorMode } = useColorMode();
  return (
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
        {action}
      </Text>
      <HStack>
        {shortcutList.map((x, index) => {
          return (
            <HStack key={index} spacing={2}>
              <ShortcutBlock colorMode={colorMode} {...x} />
              {index !== shortcutList.length - 1 && (
                <Text fontSize="md">+</Text>
              )}
            </HStack>
          );
        })}
      </HStack>
    </Stack>
  );
};

export const ShortcutBlock: React.FC<Shortcut & { colorMode: string }> = ({
  colorMode,
  isModifier,
  description,
  keyName,
}) => (
  <HStack
    h="30px"
    w={isModifier ? '100px' : '100%'}
    borderRadius="5px"
    bg={colorMode === 'dark' ? '#33373c' : 'gray.100'}
    py="2"
    px="2"
    justifyContent="space-around"
  >
    {typeof keyName === 'string' && <Text fontSize="sm">{keyName}</Text>}
    {typeof keyName === 'object' && keyName}
    {description && <Text fontSize="sm">{description}</Text>}
  </HStack>
);
