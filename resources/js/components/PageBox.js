import React from "react"
import { Inertia } from '@inertiajs/inertia'
import {Flex} from "@chakra-ui/react"
const PageBox = ({ page,active,clickfn}) => {
    const clickHandler2 = () => {
        if (page === "...") {
            return;
        } else {
            clickfn(page);
            Inertia.get(`http://localhost:8000?page=${page}`)
        }
    };
    return (
        <Flex
            justify="center"
            align="center"
            as="button"
            height="35px"
            width="35px"
            textAlign="center"
            color="gray"
            _notLast={{borderRight:"0"}}
            fontWeight={active?"bold":null}
            border="1px"
            bg={active ? "primary" : "white"}
            borderColor="#ccc"
            _hover={{ bg: active ? "primary" : "#ebedf0", cursor: "pointer" }}
            onClick={clickfn}
        >
            {page}
        </Flex>
    );
};
export default PageBox
