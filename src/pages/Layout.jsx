
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MyAppBar from "../components/AppBar";


const Layout = () => {
    return (
        <>
            <MyAppBar />
            <Container>
                <Outlet />

            </Container>
        </>
    );
}

export default Layout;