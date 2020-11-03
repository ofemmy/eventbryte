import { Container,Heading,Divider,Box, SimpleGrid } from "@chakra-ui/core";
import React from "react";
import Hero from "../components/Hero";

import Layout from "../shared/Layout";

export default function Index() {
    return (
        <Layout title="Home">
                <Hero/>
                <Box p={4}>
                <Heading mb={2}>Popular Events</Heading>
                <Divider/>
                </Box>
                <Container maxWidth="1200px">
                    <SimpleGrid minChildWidth="300px" spacing="40px">

                    </SimpleGrid>
                </Container>

        </Layout>
    );
}
