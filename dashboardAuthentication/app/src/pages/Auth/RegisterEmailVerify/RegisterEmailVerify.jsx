import Card from "../../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
const RegisterEmailVerify = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing="6">
            <Icon as={MdEmail} boxSize="48px" color="p.purple"></Icon>
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="p.black">
              We have sent you an email verification to{" "}
              <Box as="b" color="p.black">
                jenny.wilson@gmail.com
              </Box>
              . If you didn't receive it, click the button below.
            </Text>
            <Button width="full" variant="outline">
              Re-send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
