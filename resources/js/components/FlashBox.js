import React from "react";
import { Box, Heading, HStack,Text } from "@chakra-ui/core";
import { CheckCircleIcon, WarningTwoIcon, WarningIcon } from "@chakra-ui/icons";
const FlashBox = ({ title, description, status }) => {
    const statusMap = {
        success: { color: "green.500", icon: <CheckCircleIcon /> },
        warning: { color: "yellow.500", icon: <WarningTwoIcon /> },
        error: { color: "red.500", icon: <WarningIcon /> }
    };
    return (
        <Box
            m={8}
            color="white"
            p={3}
            bg={statusMap[status].color}
            width="500px"
            rounded="md"
            boxShadow="lg"
        >
            {title && <Heading size="md">{title}</Heading>}
            <HStack spacing={2}>
                {statusMap[status].icon}
                <Text>{description}</Text>
            </HStack>
        </Box>
    );
};

export default FlashBox;
