import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/core";
import PageBox from "./PageBox";

import {range} from "../utils"

const NewPagination = ({ defaultActivePage, totalPages }) => {
    // const [currentPage, setCurrentPage] = useState(
    //     Math.min(defaultActivePage, totalPages)
    // );
    // const [pages, setPages] = useState([]);
    // useEffect(() => {
    //     setPages(range(1, totalPages));
    // }, [currentPage]);

    console.log(range(1,4))
    return (
        <div>
            show me
        </div>
    );
};

export default NewPagination;
