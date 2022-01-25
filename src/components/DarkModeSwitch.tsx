import { useColorMode, IconButton, Flex } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems="center" justifyContent="flex-end" pr={7}>
      {colorMode === 'light' && (
        <IconButton
          aria-label="moon"
          icon={<FaMoon />}
          onClick={toggleColorMode}
        />
      )}
      {colorMode === 'dark' && (
        <IconButton
          aria-label="moon"
          icon={<FaSun />}
          onClick={toggleColorMode}
        />
      )}
    </Flex>
  );
};
