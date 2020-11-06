import React from "react"
import {Flex} from "@chakra-ui/core"
const PageBox = ({ content,active,clickfn}) => {
    const clickHandler2 = () => {
        if (content === "...") {
            return;
        } else {
            clickfn(content);
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
            onClick={clickHandler2}
        >
            {content}
        </Flex>
    );
};
export default PageBox
