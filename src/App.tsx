import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./views/header/Header";
import Club from "./views/club/Club";
import Router from "./router";
import { useLocation  } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import Navigation from "./store/navigation";
import SubHeader from "./views/subHeader/SubHeader";

export const linkList = [
    {
        name: "Club Menu",
        elem: <Club />,
        path: "/club"
    },
    {
        name: "Member Menu",
        elem: <Club />,
        path: "/club"
    },
    {
        name: "Board Menu",
        elem: <Club />,
        path: "/club"
    },

]

const App = observer(() => {
  return (
    <BrowserRouter>
        <Header />
        {Navigation.activePath !== "/" &&
            <SubHeader nameList={["Register", "Find", "Modify", "Remove", "Membership Menu"]} />
        }
        <Router routesList={linkList} />
    </BrowserRouter>
  );
})

export default App;
