import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Box, Button, Flex, Heading, InputGroup,Input, InputLeftElement, Spacer } from "@chakra-ui/core";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = props => {
    return (
        <Flex
            as="nav"
            p=".8rem"
            bg="gray.100"
            align="center"
            justify="space-between"
        >
            <Box align="center" mr={7}>
                <Heading as="h2" size="lg" letterSpacing={"-.1rem"}>
                    <Box as="span">event</Box>
                    <Box as="span" color="primary">
                        bryte
                    </Box>
                </Heading>
            </Box>
            <Box flex="3" mr={2}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.400"/>}
                    />
                    <Input placeholder="Search Events" bg="gray.50"/>
                </InputGroup>
            </Box>
            <Flex justify="space-around" flex="2">
                <Button mr={2}>
                    <InertiaLink href="/">Home</InertiaLink>
                </Button>
                <Button variant="outline" colorScheme="red" mr={2}>
                    <InertiaLink href="/about">Create Event</InertiaLink>
                </Button>
                <Button>
                    <InertiaLink href="/contact">Sign in</InertiaLink>
                </Button>
            </Flex>
        </Flex>
    );
};

export default Navbar;
