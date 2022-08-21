import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ClubObject from "../../store/clubStore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    interface IForm{
        name: string;
        intro: string;
    }

    const [formObj, setFormObj] = useState<IForm>({name: "", intro: ""})
    const [inputsValues, setInputValues] = useState<IForm>({name: "", intro: ""})
    const [buttonActive, setButtonActive] = useState<boolean>(true);
    const notify = () => toast("Club was created")

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        ClubObject.addDataToList(formObj);
        setInputValues({name: "", intro: ""})
        setFormObj({name: "", intro: ""})
        notify()
    }

    useEffect(() => {
        if(formObj.name.length >= 3 && formObj.intro.length >= 10) setButtonActive(false)
        else setButtonActive(true)
    }, [formObj])

    return (
        <Box sx={{width: "700px"}} component="form" onSubmit={handleSubmit}>
            <TextField
                label="CLUB Name"
                error={formObj.name.length !== 0 && !(formObj.name.length >= 3)}
                helperText={formObj.name.length !== 0 && !(formObj.name.length >= 3) ? "Incorrect entry." : ""}
                onBlur={(e) => setFormObj({...formObj, name: e.target.value})}
                onChange={(e) => setInputValues({...inputsValues, name: e.target.value})}
                value={inputsValues.name}
                required
                fullWidth
                sx={{mb: 5}}
            />

            <TextField
                label="CLUB Intro"
                error={formObj.intro.length !== 0 && !(formObj.intro.length >= 10)}
                helperText={formObj.intro.length !== 0 && !(formObj.intro.length >= 10) ? "Incorrect entry." : ""}
                onBlur={(e) => setFormObj({...formObj, intro: e.target.value})}
                onChange={(e) => setInputValues({...inputsValues, intro: e.target.value})}
                value={inputsValues.intro}
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