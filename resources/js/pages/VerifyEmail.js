import React,{useEffect} from "react";
import { Flex, Heading, Text, Button, Box } from "@chakra-ui/react";
import CommonLayout from "../shared/CommonLayout";
import { EmailIcon } from "@chakra-ui/icons";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
const VerifyEmail = ({ user }) => {
    const resendVerification = () => {
        Inertia.post("/email/verification-notification", {
            onSuccess: page => console.log(page)
        });
    };
    return (
        <CommonLayout title="Verify Email">
            <Flex
                minH="100vh"
                minW="100%"
                // justify="center"
                align="center"
                direction="column"
            >
                <EmailIcon boxSize={16} color="primary-dark" mt="10%" />
                <Heading as="h2">Please verify your email</Heading>
                <Box fontSize="md" mt={4} textAlign="center">
                    We sent an email to
                    <Text fontWeight="bold" display="inline">
                        {" "}
                        {user?.email}
                    </Text>
                    <br />
                    Please click on the link in the mail to confirm your email
                </Box>
                <Text mt="24px">You did not get any mail?</Text>
                <Button
                    size="lg"
                    colorScheme="yellow"
                    mt={2}
                    onClick={resendVerification}
                >
                    Resend Verification Link
                </Button>
            </Flex>
        </CommonLayout>
    );
};

export default VerifyEmail;
