import { Box, FormControl, FormLabel,HStack,Input } from "@chakra-ui/core";
import React from "react";
import SelectAutoComplete from "./SelectAutoComplete";
import Countries from "../utils/countries"
const AddressInput = () => {
    return (
        <Box mb={6}>
            <FormControl mb={4}>
                <FormLabel>Address Line 1</FormLabel>
                <Input />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Address Line 2</FormLabel>
                <Input />
            </FormControl>
            <HStack spacing={2}>
                <FormControl>
                    <FormLabel>Zip Code</FormLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <SelectAutoComplete options={Countries}/>
                </FormControl>
            </HStack>
        </Box>
    );
};

export default AddressInput;
