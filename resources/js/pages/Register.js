import React,{useState,useEffect} from "react";
import { isEmpty } from "lodash";
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
    Text,
    Button,
    FormErrorIcon,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/core";
import {
    ViewIcon,
    ViewOffIcon,
    InfoIcon
} from "@chakra-ui/icons";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
const schema = object().shape({
    firstname: string().required("First name is required"),
    lastname: string().required("Last name is required"),
    email: string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password: string().required("Password cannot be empty"),
    password_confirmation: string().oneOf(
        [ref("password"), null],
        "Passwords must match"
    )
});
const Register = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        setHasError(!isEmpty(props.errors));
        document.title = "Register";
    }, [props.errors]);

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const submitData = (data) => {
        Inertia.post("/register",data)
    };
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
                {hasError ? (
                        <HStack spacing={1} mt={2} color="red.600">
                            <InfoIcon />
                            <Text color="red.600">
                                Email or password incorrect
                            </Text>
                        </HStack>
                    ) : null}

                <FormControl isRequired mb={4} isInvalid={errors.email}>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                        <Input
                            placeholder="Enter Email"
                            name="email"
                            ref={register}
                            type="email"
                        />
                        <InputRightElement
                            pointerEvents="none"
                            children={<FormErrorIcon color="red.500" />}
                        />
                    </InputGroup>
                    {!!errors.email ? (
                        <FormErrorMessage mt={2}>
                            {errors.email.message}
                        </FormErrorMessage>
                    ) : null}
                </FormControl>
                <HStack spacing={4} mb={4}>
                    <FormControl
                        id="first-name"
                        isRequired
                        isInvalid={errors.firstname}
                    >
                        <FormLabel>First name</FormLabel>
                        <InputGroup>
                            <Input
                                placeholder="First name"
                                name="firstname"
                                ref={register}
                            />
                            <InputRightElement
                                pointerEvents="none"
                                children={<FormErrorIcon color="red.500" />}
                            />
                        </InputGroup>

                        {!!errors.firstname ? (
                            <FormErrorMessage>
                                {errors.firstname.message}
                            </FormErrorMessage>
                        ) : null}
                    </FormControl>
                    <FormControl
                        id="last-name"
                        isRequired
                        isInvalid={errors.lastname}
                    >
                        <FormLabel>Last name</FormLabel>
                        <InputGroup>
                            <Input
                                placeholder="Last name"
                                name="lastname"
                                ref={register}
                            />
                            <InputRightElement
                                pointerEvents="none"
                                children={<FormErrorIcon color="red.500" />}
                            />
                        </InputGroup>

                        {!!errors.lastname ? (
                            <FormErrorMessage mt={2}>
                                {errors.lastname.message}
                            </FormErrorMessage>
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
                    <InputGroup>
                        <Input
                            placeholder="Enter Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            ref={register}
                        />
                        <InputRightElement>
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                    </InputGroup>

                    {!!errors.password ? (
                        <FormErrorMessage mt={2}>
                            {errors.password.message}
                        </FormErrorMessage>
                    ) : null}
                </FormControl>
                <FormControl
                    id="password_confirmation"
                    isRequired
                    mb={4}
                    isInvalid={errors.confirmpassword}
                >
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input
                            placeholder="Confirm password"
                            name="password_confirmation"
                            ref={register}
                            type={showConfirmPassword ? "text" : "password"}
                        />
                       <InputRightElement>
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                    </InputGroup>

                    {!!errors.confirmpassword ? (
                        <FormErrorMessage mt={2}>
                            {errors.confirmpassword.message}
                        </FormErrorMessage>
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
                 color="#0e918c"
                 variant="link">
                   <InertiaLink href="/login">
                        Already a user? Log in
                   </InertiaLink>
                </Button>
            </Flex>
        </Flex>
    );
};

export default Register;
