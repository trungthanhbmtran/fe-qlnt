// import {useState,useEffect} from 'react';
// import {useSelector } from "react-redux";
// import ToastNotication from '../lib/GetToast';
// import {GetLogin} from '../service/Query';
// import Router from 'next/router';
// import AxiosService from "../../common/axiosService";
// import useCreateUrl from './useCreateUrl';
import {useRouter } from 'next/router'



const useProccessForm = () => {
    const router = useRouter();
    const { slug,page,limit,searchName } = router.query
    // console.log('router.query',slug)
    return {slug,page,limit,searchName}

}

export default useProccessForm;