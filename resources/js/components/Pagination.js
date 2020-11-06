import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Flex } from "@chakra-ui/core";
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlineLeft,
    AiOutlineRight
} from "react-icons/ai";
import PageBox from "./PageBox";
import { range } from "../utils";

const Pagination = ({paginationData}) => {
    const {
            activePage,
            totalRecord,
            recordPerPage,
            firstPageUrl,
            lastPageUrl,
            prevPageUrl,
            nextPageUrl,
           baseUrl,
           lastPage
        } = paginationData
   const totalPages=Math.ceil(totalRecord/recordPerPage)
    const [currentPage, setCurrentPage] = useState(
        Math.min(activePage, totalPages)
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

    const pageChangeHandler = page => {
        if (page!=="...") {
            setCurrentPage(page);
        Inertia.get(encodeURI(`${baseUrl}?page=${page}`), {
            preserveScroll: true,
            preserveState:true
        });
        }
    };
    const goToFirstPage=()=>{
        if (activePage !=1) {
            Inertia.get(encodeURI(firstPageUrl), {
                preserveScroll: true
            });
        }
    }
    const goToLastPage=()=>{
        if (activePage!=lastPage) {
            Inertia.get(encodeURI(lastPageUrl), {
                preserveScroll: true
            });
        }

    }
    const goToPrevpage=()=>{
        if (activePage!=1) {
            setCurrentPage(Math.max(currentPage - 1, START_PAGE))
            Inertia.get(encodeURI(prevPageUrl))
        }

    }
    const goToNextPage=()=>{
        if (activePage!=lastPage) {
            setCurrentPage(Math.min(currentPage + 1, LAST_PAGE))
            Inertia.get(encodeURI(nextPageUrl))
        }
    }
    return (
        <Flex justify="flex-end">
            <PageBox
                page={<AiOutlineDoubleLeft />}
                clickfn={goToFirstPage}
            />
            <PageBox
                page={<AiOutlineLeft />}
                clickfn={goToPrevpage}
            />
            {pages.map((page, idx) => (
                <PageBox
                    page={page}
                    active={page === currentPage}
                    key={idx}
                    clickfn={() => pageChangeHandler(page)}
                />
            ))}
            <PageBox
                page={<AiOutlineRight />}
                clickfn={goToNextPage}
            />
            <PageBox
                page={<AiOutlineDoubleRight />}
                clickfn={goToLastPage}
            />
        </Flex>
    );
};

export default Pagination;
