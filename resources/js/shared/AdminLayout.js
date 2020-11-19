import React from "react";
import Navbar from "../components/Navbar";
import BaseLayout from "./BaseLayout";
const AdminLayout = ({title,children}) => {
    return (
        <BaseLayout title={title}>
            <Navbar />
            {children}
        </BaseLayout>
    );
};

export default AdminLayout;
