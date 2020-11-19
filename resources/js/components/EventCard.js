import React from "react";
import {
    Box,
    Image,
    Text,
    HStack,
    Button,
    IconButton,
    Icon,
    Badge,
    Flex,
    StatNumber,
    Stat
} from "@chakra-ui/react";
import { HiOutlineShare, HiOutlineHeart } from "react-icons/hi";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import {formatDateToString,formatPrice} from "../utils"
const EventCard = ({ event}) => {

    const showDetails = () => {
        Inertia.get(event.detailsUrl);
    };
    return (
        <Box height="370px" overflow="hidden" shadow="sm" bg="white">
            <Box height="180px" overflow="hidden" position="relative">
                <Image
                    src={
                        "https://source.unsplash.com/featured/?event,party,people"
                    }
                    alt="hi there"
                    fit="cover"
                    objectPosition="50%"
                />
                {event.price == 0 && (
                    <Badge position="absolute" top="10px" right="10px">
                        Free
                    </Badge>
                )}
            </Box>
            <Box p={3}>
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    fontSize="lg"
                    color="primary-dark"
                >
                    {event.title}
                </Box>
                <Box>
                    <Text fontSize="sm">
                        {formatDateToString(event.startDate)}
                    </Text>
                </Box>
                <Box>
                    <Stat>
                        <StatNumber>{formatPrice(event.price)}</StatNumber>
                    </Stat>
                </Box>
                <Flex mt={4} justify="space-between">
                    <HStack>
                        <IconButton
                            variant="outline"
                            aria-label="Share"
                            isRound
                            icon={<Icon as={HiOutlineShare} />}
                        />
                        <IconButton
                            variant="outline"
                            isRound
                            aria-label="Save"
                            icon={<Icon as={HiOutlineHeart} />}
                        />
                    </HStack>
                    <HStack>
                        <Button
                            size="sm"
                            variant="outline"
                            colorScheme="red"
                            textTransform="uppercase"
                            onClick={showDetails}
                        >
                            See more
                        </Button>
                    </HStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default EventCard;
