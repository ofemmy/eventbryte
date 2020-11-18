import { Box, FormControl, FormLabel,HStack,Input } from "@chakra-ui/core";
import React from "react";
import SelectAutoComplete from "./SelectAutoComplete";
import Countries from "../utils/countries"
const AddressInput = ({inputRef}) => {
    return (
        <Box mb={6}>
            <FormControl mb={4}>
                <FormLabel>Address Line 1</FormLabel>
                <Input ref={inputRef} name="addressLine1"/>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Address Line 2</FormLabel>
                <Input ref={inputRef} name="addressLine2"/>
            </FormControl>
            <HStack spacing={2}>
                <FormControl>
                    <FormLabel>Zip Code</FormLabel>
                    <Input ref={inputRef} name="zipcode"/>
                </FormControl>
                <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input ref={inputRef} name="city"/>
                </FormControl>
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <SelectAutoComplete options={Countries} registerFn={inputRef}/>
                </FormControl>
            </HStack>
        </Box>
    );
};

export default AddressInput;
