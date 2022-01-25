import Link from 'next/link';
import { Box, Container, HStack, Spacer, useColorMode } from '@chakra-ui/react';
import { DarkModeSwitch } from './DarkModeSwitch';

export const SiteHeader: React.FC<{ borderBottomColor?: string }> = ({
  borderBottomColor,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="header"
      position="sticky"
      p="1rem 0"
      top="0"
      zIndex="sticky"
      backgroundColor={colorMode === 'dark' ? '#000' : '#fff'}
    >
      <Box maxW="780px" margin="0 auto">
        <HStack alignItems="center" fontWeight="bold" px="4">
          <Box>
            <Link href="/" passHref>
              <Box as="a" alignItems="center" textDecoration="none">
                Figma shortcut cheatsheet
              </Box>
            </Link>
          </Box>
          <Spacer />
          <DarkModeSwitch />
        </HStack>
      </Box>
    </Box>
  );
};
