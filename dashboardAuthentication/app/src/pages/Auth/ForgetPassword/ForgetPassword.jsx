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
const ForgetPassword = () => {
  //validation via yup
  const forgotValidationSchema = object({
    email: string().email("Email is invalid").required("email is required"),
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
          <Link to="/signin">
            {" "}
            <Icon as={BsArrowLeft} boxSize="6" />
          </Link>
          <Text mt="4" fontWeight="medium" textStyle="h2">
            Forget Password ?
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Dont worry we are humans! Enter your email address for which account
            you want to reset your password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={forgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing="6">
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

export default ForgetPassword;
