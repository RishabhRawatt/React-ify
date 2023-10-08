import Card from "../../../components/Card";
import {
  Button,
  Center,
  Icon,
  Text,
  Stack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Container,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { object, string, ref } from "yup";
const ResestPassword = () => {
  //validation via yup
  const resetPasswordVaidation = object({
    password: string()
      .min(6, "password must be at least 6 character long")
      .required("password is required"),

    repeatPassword: string()
      .oneOf([ref("password"), null], "passwords must match")
      .required("Repeat password is required"),
  });

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
          <Link to="/forget-password">
            {" "}
            <Icon as={BsArrowLeft} boxSize="6" />
          </Link>
          <Text mt="4" fontWeight="medium" textStyle="h2">
            Reset Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your new password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={resetPasswordVaidation}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing="6">
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your new password ..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="repeatPassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="repeatPassword">
                          Repeat Password
                        </FormLabel>
                        <Input
                          {...field}
                          name="repeatPassword"
                          type="password"
                          placeholder="Re-Enter your new password ..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button width="full" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ResestPassword;
