import React from 'react';
import styles from "./index.module.scss";
import Box from "@mui/material/Box";

interface IProps {
    nameList: Array<string>,
    pathName?: string,
    className?: string
}

const SubHeader = ({nameList, className} : IProps) => {
    console.log(nameList)
    return (
        <div className="container">
            <Box className={`${styles.header} ${className ? styles[className] : ""}`}>
                {nameList?.map((item, i) => (
                    <p key={i}>{item}</p>
                ))}
            </Box>
        </div>
    );
};

export default SubHeader;