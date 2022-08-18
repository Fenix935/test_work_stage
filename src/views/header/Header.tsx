import React from 'react';
import "./header.scss";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Header = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </>
    );
};

export default Header;