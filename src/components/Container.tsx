import { useColorMode, Box } from '@chakra-ui/react';

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box maxW="780px" margin="0 auto" padding="0 1.5rem">
      {children}
    </Box>
  );
};
