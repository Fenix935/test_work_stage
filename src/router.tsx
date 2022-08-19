import React, {ReactElement} from 'react';
import {Navigate, Route, Routes } from "react-router";

interface IRotesList {
    elem: ReactElement;
    path: string;
}

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