import React from 'react'
import { Box, SimpleGrid, Image,Link } from "@chakra-ui/core";
import { InertiaLink } from '@inertiajs/inertia-react'
import Layout from '../../shared/Layout'

const Index = ({events}) => {
    return (
        <Layout title="Events">
             <SimpleGrid minChildWidth="330px" spacing="30px" p={6}>
                {events.map(event => (
                    <Box
                        key={event.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={4}
                    >
                        <Image src={event.imageUrl} alt="hi there" />
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            <InertiaLink href={event.detailsUrl}>{event.title}</InertiaLink>

                        </Box>
                        ˙
                    </Box>
                ))}
            </SimpleGrid>
        </Layout>
    )
}

export default Index
