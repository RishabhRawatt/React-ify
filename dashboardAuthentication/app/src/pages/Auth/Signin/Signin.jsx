import {
  //   Card,
  Center,
  Container,
  FormControl,
  Stack,
  Text,
  Input,
  FormLabel,
  Flex,
  Checkbox,
  Button,
  FormErrorMessage,
  HStack,
  Box,
} from "@chakra-ui/react";

import Card from "../../../components/Card.jsx";
import { Link } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";

//validation via yup
const signinValidationSchema = object({
  email: string().email("Email is invalid").required("email is required"),
  password: string()
    .min(6, "password must be at least 6 character long")
    .required("password is required"),
});

const Signin = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text fontWeight="medium" textStyle="h2">
            Welcome Back to Crypto App
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={signinValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing="6">
                  <Flex gap="4"></Flex>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email ..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your password ..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember me </Text>
                    </Checkbox>
                    <Link to="/forget-password">
                      <Text textStyle="p3" as="span" color="p.purple">
                        Forget password?
                      </Text>
                    </Link>
                  </HStack>
                  <Box>
                    <Button width="full" type="submit">
                      Log In
                    </Button>
                    <Link to="/signup">
                      <Button variant="outline" mt="3" width="full">
                        Create Account
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signin;
