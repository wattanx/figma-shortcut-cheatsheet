import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack,
  chakra,
  Heading,
  HStack,
  Box,
  useColorMode,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { basicShortcutData, textShortcutData } from '@data/shortcut-data';
import { ShortcutBlockContainer } from '@components/ShortcutBlock';

const Index = () => {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <chakra.main>
        <Stack spacing={7}>
          <Heading as="h2" fontSize="xl">
            基本機能ショートカット
          </Heading>
          {basicShortcutData.map((x) => {
            return <ShortcutBlockContainer key={x.id} {...x} />;
          })}
        </Stack>
        <Stack spacing={7} marginTop="40px">
          <Heading as="h2" fontSize="xl">
            テキスト系ショートカット
          </Heading>
          {textShortcutData.map((x) => {
            return <ShortcutBlockContainer key={x.id} {...x} />;
          })}
        </Stack>
      </chakra.main>
      <Footer />
    </Container>
  );
};

export default Index;
