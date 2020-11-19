import React, { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import BaseLayout from "./BaseLayout";

export default function CommonLayout({ title, children, bG }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <BaseLayout title={title}>
            <Navbar />
            <div>{children}</div>
        </BaseLayout>
    );
}
