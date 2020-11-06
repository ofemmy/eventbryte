import React from "react";
import { Container, Heading, Divider, Box, SimpleGrid } from "@chakra-ui/core";

import Hero from "../components/Hero";
import Layout from "../shared/Layout";
import EventCard from "../components/EventCard";
import Pagination from "../components/Pagination";

export default function Index({ events }) {
    console.log(events[0])
    return (
        <Layout title="Home">
            <Hero />
            <Container maxWidth="1200px">
                <Box p={4}>
                    <Heading mb={2}>Popular Events</Heading>
                    <Divider />
                </Box>
            </Container>

            <Container maxWidth="1200px">
                <SimpleGrid minChildWidth="300px" spacing="40px">
                    {events.map(event => (
                        <EventCard event={event} key={event.id}/>
                    ))}
                </SimpleGrid>

            </Container>
            <Container maxWidth="1200px" mt={6}>
            <Pagination defaultActivePage={3} totalPages={8}/>
            </Container>
        </Layout>
    );
}
