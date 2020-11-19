import React, { useEffect } from "react";
import {
    Box,
    Text,
    Image,
    Link,
    Container,
    Heading,
    HStack,
    Flex,
    Stat,
    StatGroup,
    StatLabel,
    StatHelpText,
    StatNumber,
    SimpleGrid,
    Grid,
    GridItem,
    Badge,
    IconButton,
    Tooltip,
    useDisclosure
} from "@chakra-ui/react";
import { format, formatDistanceToNow } from "date-fns";
import { InertiaLink } from "@inertiajs/inertia-react";
import AdminLayout from "../../shared/AdminLayout";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Alert from "../../components/Alert";
import Pagination from "../../components/Pagination";

const TableRow = ({ children, bg, textColor, isHeader }) => {
    return (
        <Grid
            templateColumns="repeat(8,1fr) 60px"
            width="100%"
            bg={bg}
            textColor={textColor}
            p={4}
            gap={2}
            mb="5px"
            boxShadow="sm"
            _hover={isHeader ? null : { cursor: "pointer", boxShadow: "lg" }}
        >
            {children}
        </Grid>
    );
};
const TableHeader = ({ children }) => {
    return (
        <TableRow bg="gray.700" textColor="whitesmoke" isHeader={true}>
            {children}
        </TableRow>
    );
};
const Index = ({ events }) => {
    //console.log(events)
    useEffect(() => {
        console.log(events);
    }, []);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const paginationData = {
        firstPageUrl: events.first_page_url,
        lastPageUrl: events.last_page_url,
        lastPageNum: events.last_page,
        prevPageUrl: events.prev_page_url,
        nextPageUrl: events.next_page_url,
        baseUrl: events.path,
        activePage: events.current_page,
        totalRecord: events.total,
        recordPerPage: events.per_page,
        lastPage: events.last_page
    };
    return (
        <AdminLayout title="My Events">
            <Container maxWidth="1200px" mt={6}>
                <HStack mb={4}>
                    <Heading size="lg">Events</Heading>
                </HStack>
                <TableHeader>
                    <GridItem colSpan={5}>
                        <Heading size="sm">Title</Heading>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Heading size="sm">Start Date</Heading>
                    </GridItem>
                    <GridItem colSpan={1} textAlign="center">
                        <Heading size="sm">Registered</Heading>
                    </GridItem>
                    <GridItem colSpan={1} textAlign="center">
                        <Heading size="sm">Status</Heading>
                    </GridItem>
                    {/* <GridItem colSpan={1} textAlign="center"></GridItem> */}
                </TableHeader>
                {events.data.map(event => (
                    <TableRow bg="white" textColor="gray.900" key={event.id}>
                        <GridItem
                            colSpan={5}
                            py="5px"
                            display="flex"
                            alignItems="center"
                        >
                            <Text fontSize="lg" color="gray.700">
                                {event.title}
                            </Text>
                        </GridItem>
                        <GridItem colSpan={1} py="5px">
                            <Text>
                                {format(
                                    new Date(event.startDate),
                                    "LLL Mo yyyy"
                                )}
                            </Text>
                            <Text as="sub" color="gray.500">
                                {formatDistanceToNow(
                                    new Date(event.startDate),
                                    { addSuffix: true }
                                )}
                            </Text>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            py="5px"
                            textAlign="center"
                            alignItems="center"
                        >
                            <Text>
                                {event.registered}/{event.maxAttendees}
                            </Text>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            py="5px"
                            justifyContent="center"
                            display="flex"
                            alignItems="center"
                        >
                            <Badge
                                variant="outline"
                                borderRadius="sm"
                                colorScheme="pink"
                            >
                                {event.status}
                            </Badge>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            py="5px"
                            justifyContent="center"
                            display="flex"
                            alignItems="center"
                        >
                            <HStack spacing={2}>
                                <Tooltip label="Edit">
                                    <IconButton
                                        icon={<EditIcon />}
                                        isRound
                                        size="xs"
                                    />
                                </Tooltip>
                                <Tooltip label="Delete">
                                    <IconButton
                                        icon={
                                            <DeleteIcon color="primary-dark" />
                                        }
                                        isRound
                                        size="xs"
                                        onClick={onOpen}
                                    />
                                </Tooltip>
                            </HStack>
                        </GridItem>
                    </TableRow>
                ))}
                <Alert
                    onClose={onClose}
                    isOpen={isOpen}
                    message="Are you sure you want to delete this event?"
                />
                <Box my={6}>
                    {paginationData.lastPageNum > 1 && (
                        <Pagination paginationData={paginationData} />
                    )}
                </Box>
            </Container>
        </AdminLayout>
    );
};

export default Index;
