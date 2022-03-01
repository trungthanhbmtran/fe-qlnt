import {useState,useEffect} from 'react';
import {useSelector } from "react-redux";
import ToastNotication from '../lib/GetToast';
import {GetLogin} from '../service/Query';
import Router from 'next/router'


function useAuth() {
    const CheckToken = useSelector(state => state.Token)
    // console.log('CheckToken',CheckToken)
    const ProccesLogin = async() =>{
        if(!CheckToken){
          // console.log('chay khi nao nhỉ')
          ToastNotication('error','Chưa đăng nhập bạn ơi')
          Router.push('/login')
        }else{
          const result = await GetLogin(CheckToken)
          if(result.status === 200){
            ToastNotication('success',result.data)
          }
          if(result.status === 302){
            ToastNotication('success',result.data)
          }
        }
    }

    useEffect(() => {
       return ProccesLogin()
    },[]);
  }
  
  export {useAuth};