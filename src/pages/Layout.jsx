
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MyAppBar from "../components/AppBar";


const Layout = () => {
    return (
        <>
            <MyAppBar />
            <Container maxWidth='md'>
                <Outlet />

            </Container>
        </>
    );
}

export default Layout;