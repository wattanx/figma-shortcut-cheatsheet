import {
  Center,
  chakra,
  Text,
  FlexProps,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

export const Footer = (props: FlexProps) => {
  const { colorMode } = useColorMode();
  return (
    <chakra.footer
      backgroundColor={colorMode === 'dark' ? '#000' : '#fff'}
      padding="7"
    >
      <Center>
        <Stack>
          <Text fontSize="sm" paddingBottom="2" textAlign="center">
            © {new Date().getFullYear()} wattanx
          </Text>
          <Text fontSize="sm">
            This site uses Google Analytics.{` `}
            <chakra.a
              href="https://policies.google.com/technologies/partner-sites?hl=ja"
              target="_blank"
              rel="external noopener"
              textDecoration="underline"
            >
              See more details
            </chakra.a>
          </Text>
        </Stack>
      </Center>
    </chakra.footer>
  );
};
