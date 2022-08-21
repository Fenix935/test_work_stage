import React, {useEffect} from 'react';
import styles from "./index.module.scss";
import {Link, useLocation} from "react-router-dom";
import Box from "@mui/material/Box";
import Navigation from "../../store/navigation";
import {linkList} from '../../store/const';


const Header = () => {
    let location = useLocation();

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