import React from "react";
import {Box,Container,SimpleGrid} from '@chakra-ui/react'
import Pagination from '../components/Pagination'
import EventCard from "../components/EventCard"
const Eventslisting = ({events,paginationData,isMe}) => {

    return (
        <Box>
            <Container maxWidth="1200px">
                <SimpleGrid minChildWidth="300px" spacing="40px">
                    {events.data.map(event => (
                        <EventCard
                        event={event}
                        key={event.id}
                        />
                    ))}
                </SimpleGrid>
            </Container>
            <Container maxWidth="1200px" my={6}>
                <Pagination paginationData={paginationData} />
            </Container>
        </Box>
    );
};

export default Eventslisting;
