import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {OtherQuery,PostToken} from '../service/Query';
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../redux/Actions";
import Router from 'next/router';
import ToastNotication from '../lib/GetToast';
import UseInputText from '../hooks/useInputText'



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Login() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const UserNameObject = UseInputText('')
    const PassWordObject = UseInputText('')

    
    const OnClickHandle = async () =>{
        const dataPayload ={
            username : UserNameObject.value,
            password : PassWordObject.value
        }
        const url = `login`
        const method = 'post'
        const result = await OtherQuery(url,dataPayload,method)
        // // const result = await PostToken(dataPayload)
        if(result.status === 200){
            ToastNotication('error',result.data)
        }
        if(result.status === 202){
            dispatch(Actions.default.set_Token(result.data.access_Token));
            dispatch(Actions.default.set_UserName(UserNameObject.value));
            dispatch(Actions.default.set_Roles(result.data.roles));
            ToastNotication('success',` Chào mừng ${UserNameObject.value}`)
            Router.push('/')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HomeIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng nhập
                </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        {...UserNameObject}
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        {...PassWordObject}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={OnClickHandle}
                        className={classes.submit}
                        endIcon={<ExitToAppIcon />}
                    >Đăng nhập
            </Button>
            </div>
        </Container>
    );
}