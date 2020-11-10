import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, ref } from "yup";
import {
    Flex,
    Heading,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Button,
    FormErrorIcon,
    FormErrorMessage
} from "@chakra-ui/core";
const schema = object().shape({
    firstname: string().required("First name is required"),
    lastname: string().required("Last name is required"),
    email: string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password: string().required("Password cannot be empty"),
    confirmpassword: string().oneOf(
        [ref("password"), null],
        "Passwords must match"
    )
});
const Register = () => {
    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const submitData = data => console.log(data);
    return (
        <Flex
            as="main"
            bg="#EEF1F4"
            minH="100vh"
            minW="100%"
            justify="center"
            align="center"
        >
            <Flex
                as="form"
                bg="white"
                rounded="lg"
                boxShadow="md"
                borderWidth="1px"
                direction="column"
                width="35%"
                p={10}
                onSubmit={handleSubmit(submitData)}
                noValidate
            >
                <Heading mx="auto" color="gray.800">
                    Register
                </Heading>

                <FormControl isRequired mb={4} isInvalid={errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        placeholder="Enter Email"
                        name="email"
                        ref={register}
                        type="email"
                    />
                    {!!errors.email ? (
                        <HStack spacing={1} mt={2}>
                            <FormErrorIcon />
                            <FormErrorMessage>
                                {errors.email.message}
                            </FormErrorMessage>
                        </HStack>
                    ) : null}
                </FormControl>
                <HStack spacing={4} mb={4}>
                    <FormControl
                        id="first-name"
                        isRequired
                        isInvalid={errors.firstname}
                    >
                        <FormLabel>First name</FormLabel>
                        <Input
                            placeholder="First name"
                            name="first-name"
                            ref={register}
                        />
                         {!!errors.firstname ? (
                        <HStack spacing={1} mt={2}>
                            <FormErrorIcon />
                            <FormErrorMessage>
                                {errors.firstname.message}
                            </FormErrorMessage>
                        </HStack>
                    ) : null}
                    </FormControl>
                    <FormControl
                        id="last-name"
                        isRequired
                        isInvalid={errors.lastname}
                    >
                        <FormLabel>Last name</FormLabel>
                        <Input
                            placeholder="Last name"
                            name="lastname"
                            ref={register}
                        />
                         {!!errors.lastname ? (
                        <HStack spacing={1} mt={2}>
                            <FormErrorIcon />
                            <FormErrorMessage>
                                {errors.lastname.message}
                            </FormErrorMessage>
                        </HStack>
                    ) : null}
                    </FormControl>
                </HStack>
                <FormControl
                    id="password"
                    isRequired
                    mb={4}
                    isInvalid={errors.password}
                >
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="Enter Password"
                        name="password"
                        ref={register}
                    />
                     {!!errors.password ? (
                        <HStack spacing={1} mt={2}>
                            <FormErrorIcon />
                            <FormErrorMessage>
                                {errors.password.message}
                            </FormErrorMessage>
                        </HStack>
                    ) : null}
                </FormControl>
                <FormControl
                    id="confirm-password"
                    isRequired
                    mb={4}
                    isInvalid={errors.confirmpassword}
                >
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                        placeholder="Confirm password"
                        name="confirmpassword"
                        ref={register}
                    />
                     {!!errors.confirmpassword ? (
                        <HStack spacing={1} mt={2}>
                            <FormErrorIcon />
                            <FormErrorMessage>
                                {errors.confirmpassword.message}
                            </FormErrorMessage>
                        </HStack>
                    ) : null}
                </FormControl>
                <Button
                    w="100%"
                    type="submit"
                    colorScheme="red"
                    size="lg"
                    mb={4}
                >
                    Sign up
                </Button>
                <Button
                    alignSelf="flex-end"
                    variant="link"
                    color="#0e918c"
                >
                    Already a user? Log in
                </Button>
            </Flex>
        </Flex>
    );
};

export default Register;
