import React from 'react';
import styles from "./index.module.scss";
import Box from "@mui/material/Box";
import SubHeaderActive from "../../store/subHeaderActive";
import {observer} from 'mobx-react-lite';

interface IProps {
    nameList: Array<string>,
    pathName?: string,
    className?: string
}

const SubHeader = observer(({nameList, className} : IProps) => {
    return (
        <div className="container">
            <Box className={`${styles.header} ${className ? styles[className] : ""}`}>
                {nameList?.map((item, i) => (
                    <p onClick={() => SubHeaderActive.changeActive(i)} className={SubHeaderActive.activeIndex === i ? styles.active : ""} key={i}>{item}</p>
                ))}
            </Box>
        </div>
    );
});

export default SubHeader;