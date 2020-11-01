import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/core";

const Navbar = props => {
    return (
        <Flex
            as="nav"
            p="0.8rem"
            bg="primary"
            color="white"
            align="center"
            justify="space-between"
        >
            <Box align="center" mr={5}>
                <Heading as="h2" size="lg" letterSpacing={"-.1rem"}>
                    eventBryte
                </Heading>
            </Box>
            <Spacer/>
            <Flex w="30%" justify="space-around">
            <InertiaLink href="/">Home</InertiaLink>
            <InertiaLink href="/about">About</InertiaLink>
            <InertiaLink href="/contact">Contact</InertiaLink>
            </Flex>

        </Flex>
    );
};

export default Navbar;
