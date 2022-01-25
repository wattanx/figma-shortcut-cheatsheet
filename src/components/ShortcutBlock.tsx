import {
  Box,
  HStack,
  useColorMode,
  Text,
  Flex,
  Center,
} from '@chakra-ui/react';
import { Shortcut, ShortCutDataType } from '@data/shortcut-data';
export const ShortcutBlockContainer: React.FC<ShortCutDataType> = ({
  shortcutList,
  action,
}) => {
  const { colorMode } = useColorMode();
  return (
    <HStack spacing={3}>
      {shortcutList.map((x, index) => {
        return (
          <HStack key={index} spacing={3}>
            <ShortcutBlock colorMode={colorMode} {...x} />
            {index !== shortcutList.length - 1 && <Text fontSize="md">+</Text>}
          </HStack>
        );
      })}
      <Text fontSize="md">{action}</Text>
    </HStack>
  );
};

const ShortcutBlock: React.FC<Shortcut & { colorMode: string }> = ({
  colorMode,
  isModifier,
  description,
  keyName,
}) => (
  <HStack
    h="30px"
    w={isModifier ? '100px' : '100%'}
    borderRadius="5px"
    bg={colorMode === 'dark' ? '#202225' : 'gray.100'}
    py="2"
    px="2"
    justifyContent="space-around"
  >
    {typeof keyName === 'string' && <Text fontSize="sm">{keyName}</Text>}
    {typeof keyName === 'object' && keyName}
    {description && <Text fontSize="sm">{description}</Text>}
  </HStack>
);
