import React, {useState} from 'react';
import MemberObject from "../../store/memberStore";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./index.module.scss";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import {toast, ToastContainer} from "react-toastify";

const Remove = () => {
    interface ICheckList{
        button: boolean;
        error: boolean;
    }

    const [memberMail, setMemberMail] = useState<string>("");
    const [buttonActive, setButtonActive] = useState<ICheckList>({button: true, error: false});
    const [findedClub, setFindedClub] = useState<{ [key: string]: any }>({})
    const [clickFind, setClick] = useState<boolean>(false)
    const [notFoundText, setNotFoundText] = useState<string>("")
    const notify = () => toast("Member was deleted")

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setClick(true);
        let data = MemberObject.memberLists.find(item => item.email === memberMail);
        if(data){
            setFindedClub(data);
        }else{
            setFindedClub({});
            setNotFoundText(memberMail);
        }
    }

    const deleteNote = () => {
        MemberObject.deleteNote(findedClub.email);
        cancelDelete();
        notify()
    }

    const cancelDelete = () => {
        setFindedClub({});
        setClick(false);
        setNotFoundText("");
        setMemberMail("");
        setButtonActive({button: true, error: false})
    }

    const checkInput = () => {
        if(memberMail.length >= 3 && memberMail.includes("@")){
            return {button: false, error: false}
        }else{
            return {button: true, error: true}
        }
    }

    const listOrder:Array<string> = ["email", 'name', "nickName", "phoneNumber", "birthDay"];

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start"
        }}
             component="form"
             onSubmit={handleSubmit}
        >
            <Box width="700px" mr="60px">
                <TextField
                    label="Member Email"
                    error={buttonActive.error}
                    helperText={buttonActive.error ? "Incorrect entry." : ""}
                    onChange={(e) => setMemberMail(e.target.value)}
                    onBlur={() => setButtonActive(checkInput())}
                    value={memberMail}
                    required
                    fullWidth
                    sx={{mb: 5}}
                />

                <Button
                    disabled={buttonActive.button}
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    FIND
                </Button>
            </Box>

            <Box>
                <>
                    {clickFind && (
                        Object.values(findedClub).length > 0 ?
                            <>
                                {listOrder.map((item: string, i: number) => {
                                    return (
                                        <div key={i} className={styles.list_block}>
                                            <div className={styles.list_title}>{item}:</div>
                                            <div
                                                className={styles.text}>{item === "membershipList" && findedClub[item].length === 0 ? "No Membership" : findedClub[item]}</div>
                                        </div>
                                    )
                                })}

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography  variant="h6" mb={2}>
                                        Remove this club:
                                    </Typography>

                                    <Stack spacing={2} direction="row">
                                        <Button onClick={deleteNote} variant="contained">YES</Button>
                                        <Button onClick={cancelDelete} variant="outlined">NO</Button>
                                    </Stack>
                                </Box>
                            </>
                            :
                            <div>{`No such club with name --> ${notFoundText}`}</div>
                        )
                    }
                </>
            </Box>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                icon={true}
            />
        </Box>
    );
};

export default Remove;