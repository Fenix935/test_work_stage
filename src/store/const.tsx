import {IRotesList, ISubHeaderList} from "../types";
import Club from "../views/club/Club";
import React from "react";

export const linkList: Array<IRotesList> = [
    {
        name: "Club Menu",
        path: "/club",
        elem: <Club />
    },
    {
        name: "Members Menu",
        elem: <Club />,
        path: "/club"
    },
    {
        name: "Board Menu",
        elem: <Club />,
        path: "/club"
    }
]

export const subHeaderLinks: ISubHeaderList = {
    "/club": ["Register", "Find", "Modify", "Remove", "Membership Menu"],
    "/member": ["test"]
}