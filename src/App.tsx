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
import { IRotesList } from './types';
import { linkList, subHeaderLinks } from './store/const';

const App = observer(() => {
  return (
    <BrowserRouter>
        <Header />
        <SubHeader nameList={subHeaderLinks[Navigation.activePath]} className={Navigation.activePath !== "/" ? "active" : ""}/>
        <Router routesList={linkList} />
    </BrowserRouter>
  );
})

export default App;
