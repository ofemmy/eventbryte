import React from "react";
import {
    Container,
    Image,
    Flex,
    Heading,
    Divider,
    Box,
    Stat,
    StatNumber,
    Text,
    VStack,
    Button
} from "@chakra-ui/react";
import CommonLayout from "../../shared/CommonLayout";
import { formatDateToString, formatPrice } from "../../utils";
import Subheading from "../../components/Subheading";

const Details = ({ event }) => {
    console.log(event)
    const addLine1 = event["address-line1"];
    const addLine2 = event["address-line2"];
    return (
        <CommonLayout title={event.title}>
            <Container
                maxW="1080px"
                minH="100vh"
                rounded="sm"
                bg="white"
                p={0}
                mt={6}
                overflow="none"
                display="flex"
                flexDirection="column"
            >
                <Image
                    src="https://images.unsplash.com/photo-1603599825343-4bd89bd34e15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                    width="100%"
                    height="471px"
                    // objectFit="cover"
                    position="center"
                    fit="cover"
                    overflow="none"
                />
                <Box direction="column" p={4}>
                    <Heading>{event.title}</Heading>
                </Box>
                <Divider />
                <Flex px={8} mt={4} justify="space-between">
                    <Flex width="40%" direction="column">
                    <Box mb={4}>
                        <Subheading text="Organiser"/>
                        <Text>{event.user.name}</Text>
                    </Box>
                    <Box>
                        <Subheading text="Description"/>
                        <Text>{event.description}</Text>
                    </Box>
                    </Flex>

                    <Flex
                        borderWidth="2px"
                        borderColor="gray.100"
                        rounded="md"
                        width="40%"
                        p={4}
                        direction="column"
                        bg="gray.100"
                    >
                        <Box mb={4}>
                            <Subheading text="Date And Time" />
                            <Text>
                                Start: {formatDateToString(event.startDate)}
                            </Text>
                            <Text>
                                End:&nbsp;&nbsp;&nbsp;
                                {formatDateToString(event.endDate)}
                            </Text>
                        </Box>
                        <Box mb={4}>
                            <Subheading text="Venue" />
                            <Text>{addLine1}</Text>
                            <Text>{addLine2 || null}</Text>
                            <Text>{`${event.zipcode}, ${event.city}`}</Text>
                            <Text>{event.country}</Text>
                        </Box>
                        <Box mb={6}>
                            <Subheading text="Price" />
                            <Stat>
                                <StatNumber>
                                    {formatPrice(event.price)}
                                </StatNumber>
                            </Stat>
                        </Box>
                        <Button width="100%" size="lg" colorScheme="green">
                            Register
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </CommonLayout>
    );
};

export default Details;
