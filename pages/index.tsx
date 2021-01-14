import Image from "next/image";
import {
  PatternCenter,
  Box,
  Card,
  CardContent,
  Container,
  Heading,
  AutoGrid,
  Text,
  Link,
} from "@openpatch/patches";

export default function Home() {
  return (
    <PatternCenter>
      <Box p="standard">
        <Container maxWidth="small">
          <Card>
            <CardContent>
              <Heading textAlign="center">Welcome to Patches!</Heading>
              <Image alt="logo" width="800" height="auto" src="/patches.svg" />
              <Text textAlign="center">
                Get started by editing pages/index.tsx.
              </Text>
            </CardContent>
          </Card>
          <Box mt="standard">
            <AutoGrid columns={[1, 2]} gap="standard">
              <Card>
                <CardContent>
                  <Link external href="https://openpatch.github.io/patches">
                    Documentation
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Link external href="https://github.com/openpatch/patches">
                    Source Code
                  </Link>
                </CardContent>
              </Card>
            </AutoGrid>
          </Box>
        </Container>
      </Box>
    </PatternCenter>
  );
}
