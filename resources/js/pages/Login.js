import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import {
    Flex,
    Heading,
    FormControl,
    FormErrorMessage,
    FormErrorIcon,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    InputRightElement,
    HStack,
    Button,
    ButtonGroup,
    Checkbox,
    Text
} from "@chakra-ui/react";
import {
    LockIcon,
    EmailIcon,
    ViewIcon,
    ViewOffIcon,
    InfoIcon
} from "@chakra-ui/icons";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const schema = object().shape({
    email: string()
        .email("Please enter a valid email")
        .required("Email cannot be empty"),
    password: string().required("Password cannot be empty")
});
const Login = props => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setHasError(!isEmpty(props.errors));
        document.title = "Login";
    }, [props.errors]);

    const login = data => {
        Inertia.post("/login", data);
    };
    const getRegisterPage = () => {
        Inertia.get("/register");
    };
    return (
        <Flex
            as="main"
            bg="gray.50"
            minH="100vh"
            w="100%"
            justify="flex-end"
            align="center"
            bgImage="url('/images/login.svg')"
            bgSize="cover"
            bgPos="center"
        >
            <Flex
                as="form"
                onSubmit={handleSubmit(login)}
                w="28%"
                h="13%"
                rounded="sm"
                boxShadow="xl"
                marginRight="13%"
                direction="column"
                p={6}
            >
                <Heading mx="auto" color="gray.800">
                    Login
                </Heading>

                <Stack spacing={6} my={6}>
                    {hasError ? (
                        <HStack spacing={1} mt={2} color="red.600">
                            <InfoIcon />
                            <Text color="red.600">
                                Email or password incorrect
                            </Text>
                        </HStack>
                    ) : null}
                    <FormControl isInvalid={hasError || !!errors.email}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<EmailIcon color="gray.300" />}
                            />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                variant="filled"
                                ref={register}
                            />
                        </InputGroup>

                        {!!errors.email ? (
                            <HStack spacing={1} mt={2}>
                                <FormErrorIcon />
                                <FormErrorMessage>
                                    {errors.email.message}
                                </FormErrorMessage>
                            </HStack>
                        ) : null}
                    </FormControl>
                    <FormControl isInvalid={hasError || !!errors.password}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<LockIcon color="gray.300" />}
                            />
                            <Input
                                placeholder="Enter password"
                                type={show ? "text" : "password"}
                                name="password"
                                variant="filled"
                                ref={register}
                            />

                            <InputRightElement>
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {!!errors.password ? (
                            <HStack spacing={1} mt={2}>
                                <FormErrorIcon />
                                <FormErrorMessage>
                                    {errors.password.message}
                                </FormErrorMessage>
                            </HStack>
                        ) : null}
                    </FormControl>
                </Stack>
                <HStack mb={6} justify="space-between">
                    <Checkbox colorScheme="blue" defaultIsChecked>
                        Remember Me
                    </Checkbox>
                    <Text color="blue.700">
                        <InertiaLink>Forgot Password?</InertiaLink>
                    </Text>
                </HStack>
                <ButtonGroup spacing={4} colorScheme="red">
                    <Button type="submit">Login</Button>
                    <Button variant="outline" onClick={getRegisterPage}>
                        Create Account
                    </Button>
                </ButtonGroup>
            </Flex>
        </Flex>
    );
};

export default Login;
