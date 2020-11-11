import {
    Input,
    Box,
    List,
    ListItem
} from "@chakra-ui/core";
import React, { useState } from "react";

const SelectAutoComplete = ({options}) => {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const onTextChanged = e => {
        const inputValue=e.target.value;
        let filteredSuggestions = [];
        if (inputValue.length > 0) {
            const regex = new RegExp(`^${inputValue}`, "i");
            filteredSuggestions = options.sort().filter(v => regex.test(v));
        }
        setSuggestions(filteredSuggestions);
        setInput(inputValue);
    };
    const suggestionSelected = val => {
        setInput(val);
        setSuggestions([]);
    };
    return (
        <Box position="relative">
            <Input onChange={onTextChanged} value={input} />
            {suggestions.length == 0 ? null : (
                <List
                    position="absolute"
                    width="100%"
                    zIndex={2}
                    borderWidth="2px"
                    borderColor="gray.100"
                    rounded="md"
                    boxShadow="md"
                >
                    {suggestions.map(item => (
                        <ListItem
                            p={2}
                            listStyleType="none"
                            key={item}
                            cursor="pointer"
                            _hover={{
                                background: "gray.100"
                            }}
                            onClick={() => suggestionSelected(item)}
                        >
                            {item}
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default SelectAutoComplete;
