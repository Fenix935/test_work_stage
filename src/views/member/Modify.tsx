import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MemberObject from "../../store/memberStore";
import {toast, ToastContainer} from "react-toastify";

const Modify = () => {
    interface IForm{
        email: string;
        name: string;
        nickName: string;
        phoneNumber: string;
        birthDay: string;
        search: string;
        previusEmail?: string;
    }

    const [formObj, setFormObj] = useState<IForm>({email: "", name: "", phoneNumber: "", nickName: "", birthDay: "", search: ""});
    const [inputsValues, setInputValues] = useState<IForm>({email: "", name: "", phoneNumber: "", nickName: "", birthDay: "", search: ""});
    const [buttonActive, setButtonActive] = useState<boolean>(true);
    const [searchMode, setSearchMode] = useState<boolean>(true);
    const [findedClub, setFindedClub] = useState<{ [key: string]: any }>({})
    const [notFoundText, setNotFoundText] = useState<string>("")
    const [clickFind, setClick] = useState<boolean>(false)
    const notify = () => toast("Member was changed")

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(searchMode){
            let data = MemberObject.memberLists.find(item => item.email === formObj.search);
            setClick(true);
            console.log(data)
            if(data){
                setFindedClub(data)
                setSearchMode(false);
                setInputValues({...data, search: ""})
                setFormObj({...data, search: ""})
            }else{
                setNotFoundText(formObj.search)
            }
        }else{
            formObj.previusEmail = findedClub.email;
            MemberObject.changeList({...formObj});
            setSearchMode(true);
            setFindedClub({});
            setClick(false);
            setNotFoundText("")
            setInputValues({email: "", name: "", phoneNumber: "", nickName: "", birthDay: "", search: ""});
            setFormObj({email: "", name: "", phoneNumber: "", nickName: "", birthDay: "", search: ""});
            notify();
        }
    }

    useEffect(() => {
        if(searchMode){
            if(formObj.search.length >= 3) setButtonActive(false)
            else setButtonActive(true)
        }else{
            if(formObj.name.length >= 3 && (formObj.email.length >= 3 && formObj.email.includes("@")) &&
                formObj.phoneNumber.length >= 3 && formObj.nickName.length >= 3 && formObj.birthDay.length >= 3) setButtonActive(false)
            else setButtonActive(true)
        }

    }, [formObj])

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start"
            }}
            component="form"
            onSubmit={handleSubmit}

        >
            <Box  width="700px" mr="60px">
                {searchMode ?
                    <TextField
                        label="Member Email"
                        error={formObj?.search?.length !== 0 && !(formObj?.search?.length >= 3)}
                        helperText={formObj?.search?.length !== 0 && !(formObj?.search?.length >= 3) ? "Incorrect entry." : ""}
                        onBlur={(e) => setFormObj({...formObj, search: e.target.value})}
                        onChange={(e) => setInputValues({...inputsValues, search: e.target.value})}
                        value={inputsValues.search}
                        required
                        fullWidth
                        sx={{mb: 5}}
                    />
                    :
                    <>
                        <TextField
                            label="Member Email"
                            error={formObj.email.length !== 0 && (!formObj.email.includes("@") || !(formObj.email.length >= 3))}
                            helperText={formObj.email.length !== 0 && (!formObj.email.includes("@") || !(formObj.email.length >= 3)) ? "Value must be longer than 3 letters and include @ symbol" : ""}
                            onBlur={(e) => setFormObj({...formObj, email: e.target.value})}
                            onChange={(e) => setInputValues({...inputsValues, email: e.target.value})}
                            value={inputsValues.email}
                            required
                            fullWidth
                            sx={{mb: 5}}
                        />

                        <TextField
                            label="Member Name"
                            error={formObj.name.length !== 0 && !(formObj.name.length >= 3)}
                            helperText={formObj.name.length !== 0 && !(formObj.name.length >= 3) ? "Value must be longer than 3 letters" : ""}
                            onBlur={(e) => setFormObj({...formObj, name: e.target.value})}
                            onChange={(e) => setInputValues({...inputsValues, name: e.target.value})}
                            value={inputsValues.name}
                            required
                            fullWidth
                            sx={{mb: 5}}
                        />

                        <TextField
                            label="Member Phone Number"
                            error={formObj.phoneNumber.length !== 0 && !(formObj.phoneNumber.length >= 3)}
                            helperText={formObj.phoneNumber.length !== 0 && !(formObj.phoneNumber.length >= 3) ? "Value must be longer than 3 letters" : ""}
                            onBlur={(e) => setFormObj({...formObj, phoneNumber: e.target.value})}
                            onChange={(e) => setInputValues({...inputsValues, phoneNumber: e.target.value})}
                            value={inputsValues.phoneNumber}
                            required
                            fullWidth
                            sx={{mb: 5}}
                        />

                        <TextField
                            label="Member Nickname"
                            error={formObj.nickName.length !== 0 && !(formObj.nickName.length >= 3)}
                            helperText={formObj.nickName.length !== 0 && !(formObj.nickName.length >= 3) ? "Value must be longer than 3 letters" : ""}
                            onBlur={(e) => setFormObj({...formObj, nickName: e.target.value})}
                            onChange={(e) => setInputValues({...inputsValues, nickName: e.target.value})}
                            value={inputsValues.nickName}
                            required
                            fullWidth
                            sx={{mb: 5}}
                        />

                        <TextField
                            label="Member Birthday"
                            error={formObj.birthDay.length !== 0 && !(formObj.birthDay.length >= 3)}
                            helperText={formObj.birthDay.length !== 0 && !(formObj.birthDay.length >= 3) ? "Value must be longer than 3 letters" : ""}
                            onBlur={(e) => setFormObj({...formObj, birthDay: e.target.value})}
                            onChange={(e) => setInputValues({...inputsValues, birthDay: e.target.value})}
                            value={inputsValues.birthDay}
                            required
                            fullWidth
                            sx={{mb: 5}}
                        />
                    </>
                }

                <Button
                    disabled={buttonActive}
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    {searchMode ? "search" : "save"}
                </Button>
            </Box>

            <Box>

                <>
                    {(clickFind && (Object.values(findedClub).length === 0)) &&
                        <div>{`No such club with name --> ${notFoundText}`}</div>
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

export default Modify;