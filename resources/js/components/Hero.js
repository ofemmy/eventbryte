import React from "react";
import { Box, Image, Container, Flex, Heading, Button } from "@chakra-ui/core";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Inertia } from "@inertiajs/inertia";
const Hero = () => {
    const createEvent = ()=>Inertia.get("/events/create")
    return (
        <Box background="white">
            <Container
                maxWidth="1200px"
                display="flex"
                flexDir="row-reverse"
                justify="center"
                align="center"
                p={3}
            >
                <Image
                    src="/images/hero.svg"
                    alt="hero"
                    objectFit="cover"
                    borderWidth="5px"
                    flex="2"
                />
                <Box flex="1" py={4} textAlign="center" alignSelf="center">
                    <Heading>
                        {" "}
                        your <br /> one-{" "}
                        <Box as="span" color="primary">
                            stop
                        </Box>
                        -shop
                        <br />
                        for events
                    </Heading>
                    <Button
                        mt={3}
                        colorScheme="red"
                        rightIcon={<ArrowForwardIcon />}
                        onClick={createEvent}
                    >
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
