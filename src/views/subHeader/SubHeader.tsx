import React from 'react';
import styles from "./index.module.scss";
import Box from "@mui/material/Box";

interface IProps {
    nameList: Array<string>
}

const SubHeader = ({nameList} : IProps) => {
    return (
        <div className="container">
            <Box className={styles.header}>
                {nameList.map((item, i) => (
                    <p key={i}>{item}</p>
                ))}
            </Box>
        </div>
    );
};

export default SubHeader;