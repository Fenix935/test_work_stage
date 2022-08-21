import React from 'react';
import {Route, Routes} from "react-router";
import {IRotesList} from "./types";

interface IProps {
    routesList: Array<IRotesList>
}

function Router ({ routesList }: IProps) {
    return (
        <Routes>
            {routesList.map((item, i) => {
                return (
                    <Route key={i} path={item.path} element={item.elem} />
                )
            })}
        </Routes>
    );
};

export default Router;