import React, {useState} from 'react';
import Box from '@mui/material/Box';
import styles from "./index.module.scss";
import ClubObject from "../../store/clubStore";
import MemberObject from "../../store/memberStore";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Radio} from "@mui/material";

const MemberShip = () => {

    interface IActiveIndex {
        club: string;
        member: string

    }

    const [activeIndex, setActiveIndex] = useState<IActiveIndex>({club: "", member: ""});

    const changeClub = () => {

    }

    return (
        <div className="container">
            <Box
                sx={{
                    display: 'flex',
                    width: "100%",
                }}
            >
                <div className={styles.member_row}>
                    <div className={styles.member_title}>Choose Club: </div>
                    {ClubObject.clubLists.map((item, i) => (
                        <div onClick={() => setActiveIndex({...activeIndex, club: item.usid || ""})}
                             className={activeIndex.club === item.usid ? `${styles.member_item} ${styles.active}` : `${styles.member_item}`}
                             key={item.usid}
                        >
                            {`${i + 1}. ${item.name}`}
                        </div>
                    ))}
                </div>

                <div className={`${styles.member_row} ${styles.member_list}`}>
                    <div className={styles.member_title}>Members List: </div>
                    {MemberObject.memberLists.map((item, i) => (
                        <div
                            onClick={() => activeIndex.club && setActiveIndex({...activeIndex, member: String(i) || ""})}
                            className={activeIndex.member === String(i) ? `${styles.member_item} ${styles.active}` : `${styles.member_item}`}
                            key={i}
                        >
                            <p>{`${i + 1}. ${item.email}`}</p>

                            <div className={styles.member_role}>
                                <span className={styles.span}>Role: </span>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel disabled={!Boolean(activeIndex.club)} value="president" control={<Radio />} label="President" />
                                    <FormControlLabel disabled={!Boolean(activeIndex.club)} value="member" control={<Radio />} label="Member" />
                                </RadioGroup>
                            </div>
                        </div>
                    ))}
                </div>
            </Box>
        </div>
    );
};

export default MemberShip;