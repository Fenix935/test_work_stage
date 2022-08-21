import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ClubObject from "../../store/clubStore";
import {toast, ToastContainer} from "react-toastify";

const Modify = () => {
    interface IForm{
        name: string;
        intro: string;
        search: string;
    }

    const [formObj, setFormObj] = useState<IForm>({name: "", intro: "", search: ""});
    const [inputsValues, setInputValues] = useState<IForm>({name: "", intro: "", search: ""});
    const [buttonActive, setButtonActive] = useState<boolean>(true);
    const [searchMode, setSearchMode] = useState<boolean>(true);
    const [findedClub, setFindedClub] = useState<{ [key: string]: any }>({})
    const [notFoundText, setNotFoundText] = useState<string>("")
    const [clickFind, setClick] = useState<boolean>(false)
    const notify = () => toast("Club was changed")

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(searchMode){
            let data = ClubObject.clubLists.find(item => item.name === formObj.search);
            setClick(true);
            if(data){
                setFindedClub(data)
                setSearchMode(false);
                setInputValues({name : data.name, intro: data.intro, search: ""})
                setFormObj({name : data.name, intro: data.intro, search: ""})
            }else{
                setNotFoundText(formObj.search)
            }
        }else{
            ClubObject.changeList({usid: findedClub.usid, name: formObj.name, intro: formObj.intro});
            setSearchMode(true);
            setFindedClub({});
            setClick(false);
            setNotFoundText("")
            setInputValues({name: "", intro: "", search: ""});
            setFormObj({name: "", intro: "", search: ""});
            notify();
        }
    }

    useEffect(() => {
        if(searchMode){
            if(formObj.search.length >= 3) setButtonActive(false)
            else setButtonActive(true)
        }else{
            if(formObj.name.length >= 3 && formObj.intro.length >= 10) setButtonActive(false)
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
                        label="CLUB Name"
                        error={formObj.search.length !== 0 && !(formObj.search.length >= 3)}
                        helperText={formObj.search.length !== 0 && !(formObj.search.length >= 3) ? "Incorrect entry." : ""}
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