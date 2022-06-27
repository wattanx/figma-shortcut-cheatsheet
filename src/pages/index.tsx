import { Stack, chakra, Heading, useColorMode } from '@chakra-ui/react';

import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import {
  basicShortcutData,
  objectShortcutData,
  textShortcutData,
} from '@data/shortcut-data';
import { ShortcutBlockContainer } from '@components/ShortcutBlock';
import { AdjustFontSize } from '@components/AdjustFontSize';
import { AdjustKerning } from '@components/AdjustKerning';

const Index = () => {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <chakra.main>
        <Stack spacing={7}>
          <chakra.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://portfolio-git-crossdomain-test-wattanx.vercel.app/"
          >
            wattanx preview
          </chakra.a>
          <Heading as="h2" fontSize="xl" color="figma.orange">
            基本機能ショートカット
          </Heading>
          {basicShortcutData.map((x) => {
            return <ShortcutBlockContainer key={x.id} {...x} />;
          })}
        </Stack>
        <Stack spacing={7} marginTop="40px">
          <Heading as="h2" fontSize="xl" color="figma.green">
            テキスト系ショートカット
          </Heading>
          {textShortcutData.map((x) => {
            return <ShortcutBlockContainer key={x.id} {...x} />;
          })}
          {/** TODO: replace component */}
          <AdjustFontSize colorMode={colorMode} />
          <AdjustKerning colorMode={colorMode} />
        </Stack>
        <Stack spacing={7} marginTop="40px">
          <Heading as="h2" fontSize="xl" color="figma.purple">
            オブジェクト整列系ショートカット
          </Heading>
          {objectShortcutData.map((x) => {
            return <ShortcutBlockContainer key={x.id} {...x} />;
          })}
        </Stack>
      </chakra.main>
      <Footer />
    </Container>
  );
};

export default Index;
