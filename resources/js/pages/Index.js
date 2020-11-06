import React from "react";
import { Container, Heading, Divider, Box, SimpleGrid } from "@chakra-ui/core";

import Hero from "../components/Hero";
import Layout from "../shared/Layout";
import EventCard from "../components/EventCard";
import Pagination from "../components/Pagination";

export default function Index({ events }) {

    const paginationData={
        firstPageUrl:events.first_page_url,
        lastPageUrl:events.last_page_url,
        lastPageNum:events.last_page,
        prevPageUrl:events.prev_page_url,
        nextPageUrl:events.next_page_url,
        baseUrl:events.path,
        activePage:events.current_page,
        totalRecord:events.total,
        recordPerPage:events.per_page,
        lastPage:events.last_page
    }

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
                    {events.data.map(event => (
                        <EventCard event={event} key={event.id}/>
                    ))}
                </SimpleGrid>

            </Container>
            <Container maxWidth="1200px" my={6}>
            <Pagination
            paginationData={paginationData}
            />
            </Container>
        </Layout>
    );
}
