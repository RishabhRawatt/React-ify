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
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const RegisterSuccess = () => {
  return (
    <Container>
      {" "}
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing="6">
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green"></Icon>
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Successfully Registration
            </Text>
            <Text textAlign="center" textStyle="p2" color="p.black">
              Hurray! You have successfully created your account. Enter the app
              to explore all it's features.
            </Text>
            <Box w="full">
              <Link to="/signin">
                <Button width="full">Enter the App</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterSuccess;
