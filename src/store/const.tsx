import {IRotesList, ISubHeaderList} from "../types";
import Club from "../views/club/Club";
import React from "react";
import Member from "../views/member/Member";

export const linkList: Array<IRotesList> = [
    {
        name: "Club Menu",
        path: "/club",
        elem: <Club />
    },
    {
        name: "Members Menu",
        elem: <Member />,
        path: "/member"
    }
]

export const subHeaderLinks: ISubHeaderList = {
    "/club": ["Register", "Find", "Modify", "Remove", "Membership Menu"],
    "/member": ["Register", "Find", "Modify", "Remove"]
}