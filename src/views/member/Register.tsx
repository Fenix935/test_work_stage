import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MemberObject from "../../store/memberStore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IMemberDataList} from "../../types";

const Register = () => {
    const [formObj, setFormObj] = useState<IMemberDataList>({email: "", name: "", phoneNumber: "", nickName: "", birthDay: ""})
    const [inputsValues, setInputValues] = useState<IMemberDataList>({email: "", name: "", phoneNumber: "", nickName: "", birthDay: ""})
    const [buttonActive, setButtonActive] = useState<boolean>(true);
    const notify = () => toast("Member was created")

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        MemberObject.addDataToList(formObj);
        setInputValues({email: "", name: "", phoneNumber: "", nickName: "", birthDay: ""})
        setFormObj({email: "", name: "", phoneNumber: "", nickName: "", birthDay: ""})
        notify()
    }

    useEffect(() => {
        if(formObj.name.length >= 3 && (formObj.email.length >= 3 && formObj.email.includes("@")) &&
            formObj.phoneNumber.length >= 3 && formObj.nickName.length >= 3 && formObj.birthDay.length >= 3) setButtonActive(false)
        else setButtonActive(true)
    }, [formObj])

    return (
        <Box sx={{width: "700px"}} component="form" onSubmit={handleSubmit}>
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
            />

            <Button
                disabled={buttonActive}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3}}
            >
                registration
            </Button>


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

export default Register;