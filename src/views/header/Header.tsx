import React from 'react';
import "./header.scss";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import {Navigate, Route, Routes } from "react-router";

const Header = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Box className="some">
                    <div>some</div>
                    <Link
                        href="#"
                        underline="none"
                        sx={{
                            marginRight: "20px"
                        }}
                    >
                        Club Menu
                    </Link>
                    <Link
                        href="#"
                        underline="none"
                    >
                        Club Menu
                    </Link>
                    <Link
                        href="#"
                        underline="none"
                    >
                        Club Menu
                    </Link>
                </Box>
            </Container>
        </>
    );
};

export default Header;