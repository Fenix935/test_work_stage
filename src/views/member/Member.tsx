import React, { ReactElement } from 'react';
import Box from "@mui/material/Box";
import {observer} from 'mobx-react-lite';
import Register from "./Register";
import Find from "./Find";
import SubHeaderActive from "../../store/subHeaderActive";
import Typography from '@mui/material/Typography';
import Modify from "./Modify";
import Remove from "./Remove";


const Member = observer(() => {

    let componentsArray:Array<ReactElement> = [
        <Register />,
        <Find />,
        <Modify />,
        <Remove />
    ]

    return (
        <div className="container">
            <Box sx={{padding: "70px 100px 0"}}>
                {componentsArray[SubHeaderActive.activeIndex] || (
                    <Typography variant="h2" align="center">
                        This tab is under development
                    </Typography>
                )}
            </Box>
        </div>
    );
});

export default Member;