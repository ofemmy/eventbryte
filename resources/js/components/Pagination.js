import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/core";
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlineLeft,
    AiOutlineRight
} from "react-icons/ai";
import PageBox from "./PageBox";
import { range } from "../utils";

const Pagination = ({ defaultActivePage, totalPages }) => {
    const [currentPage, setCurrentPage] = useState(
        Math.min(defaultActivePage, totalPages)
    );
    const [pages, setPages] = useState([]);
    const MINIMUM_PAGE_BEFORE_SPLIT = 5;
    const MINIMUM_PAGINATION_NUMBER = 8;
    const START_PAGE = 1;
    const LAST_PAGE = totalPages;
    useEffect(() => {
        const hasNoSpill = totalPages < MINIMUM_PAGINATION_NUMBER;
        const hasRightSpill = totalPages - MINIMUM_PAGE_BEFORE_SPLIT >= 3;
        const hasBothSpill =
            currentPage >= MINIMUM_PAGE_BEFORE_SPLIT &&
            totalPages - currentPage >= 3;
        const hasLeftSpill =
            currentPage > MINIMUM_PAGE_BEFORE_SPLIT &&
            totalPages - currentPage <= 3;
        switch (true) {
            case hasNoSpill:
                setPages(range(1, totalPages));
                break;
            case hasLeftSpill:
                setPages([1, "...", ...range(totalPages - 4, totalPages)]);
                break;
            case hasBothSpill:
                setPages([
                    1,
                    "...",
                    ...range(currentPage - 1, currentPage + 1),
                    "...",
                    totalPages
                ]);
                break;
            case hasRightSpill:
                setPages([...range(1, 5), "...", totalPages]);

                break;
            default:
                break;
        }
    }, [currentPage]);
    return (
        <Flex justify="flex-end">
            <PageBox
                content={<AiOutlineDoubleLeft />}
                clickfn={() => setCurrentPage(START_PAGE)}
            />
            <PageBox
                content={<AiOutlineLeft />}
                clickfn={() =>
                    setCurrentPage(Math.max(currentPage - 1, START_PAGE))
                }
            />
            {pages.map((content, idx) => (
                <PageBox
                    content={content}
                    active={content === currentPage}
                    key={idx}
                    clickfn={setCurrentPage}
                />
            ))}
            <PageBox
                content={<AiOutlineRight />}
                clickfn={() =>
                    setCurrentPage(Math.min(currentPage + 1, LAST_PAGE))
                }
            />
            <PageBox
                content={<AiOutlineDoubleRight />}
                clickfn={() => setCurrentPage(LAST_PAGE)}
            />
        </Flex>
    );
};

export default Pagination;
