import React, {useEffect} from 'react';
import styles from "./index.module.scss";
import {Link, useLocation} from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {Navigate, Route, Routes } from "react-router";
import Router from "../../router";
import Club from "../club/Club";
import {linkList} from "../../App";
import Navigation from "../../store/navigation";

const Header = () => {
    let location = useLocation();
    console.log(location)

    useEffect(() => {
        if(location.pathname){
            Navigation.changePath(location.pathname);
        }
    }, [location])

    return (
        <div className="container">
            <Box className={styles.header}>
                {linkList.map((item, i) => {
                    if(item.name){
                        return(
                            <Link key={i} to={item.path}>{item.name}</Link>
                        )
                    }
                })}
            </Box>
        </div>
    );
};

export default Header;