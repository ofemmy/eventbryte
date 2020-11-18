import React, { useEffect, useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import {
    Box,
    Button,
    Flex,
    Heading,
    InputGroup,
    Input,
    InputLeftElement,
    AvatarBadge,
    Menu,
    Text,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    MenuDivider,
    VStack,
    HStack
} from "@chakra-ui/core";
import { ChevronDownIcon, InfoIcon, SearchIcon } from "@chakra-ui/icons";
import { Inertia } from "@inertiajs/inertia";

const Navbar = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = usePage().props;
    useEffect(() => {
        user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, [user]);
    const handleClick = () => {
        isLoggedIn ? Inertia.post("/logout") : Inertia.get("/login");
    };
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
                        children={<SearchIcon color="gray.400" />}
                    />
                    <Input placeholder="Search Events" bg="gray.50" />
                </InputGroup>
            </Box>
            <Flex justify="space-around" flex="2">
                <Button mr={2}>
                    <InertiaLink href="/">Home</InertiaLink>
                </Button>
                <Button variant="outline" colorScheme="red" mr={2}>
                    <InertiaLink href="/events/create">Create Event</InertiaLink>
                </Button>
                {isLoggedIn ? (
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <Avatar size="sm" name={user?.name}>
                                <AvatarBadge
                                    boxSize="1.2rem"
                                    bg={
                                        user?.hasVerifiedEmail
                                            ? "green.500"
                                            : "red.500"
                                    }
                                />
                            </Avatar>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <VStack align="flex-start">
                                    <Text fontWeight="bold">{user?.name}</Text>
                                    {
                                    user?.hasVerifiedEmail ?
                                    <Text fontSize="sm">{user?.email}</Text> :
                                    <HStack>
                                    <InfoIcon color="red.500"/>
                                    <Text as="small" fontSize="xs" color="red.500">Please verify your email</Text>
                                    </HStack>

                                    }
                                </VStack>
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem><InertiaLink href="/events/me">My Events</InertiaLink></MenuItem>
                            <MenuItem>Liked</MenuItem>
                            <MenuItem>Registered</MenuItem>
                            <MenuDivider />
                            <MenuItem
                                as="button"
                                onClick={handleClick}
                                variant="outline"
                            >
                                Log out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
                    <Button onClick={handleClick}>Sign in</Button>
                )}
            </Flex>
        </Flex>
    );
};

export default Navbar;
