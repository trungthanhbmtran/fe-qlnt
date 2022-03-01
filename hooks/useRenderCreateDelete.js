// import {useState,useEffect} from 'react';
// import {useSelector } from "react-redux";
// import ToastNotication from '../lib/GetToast';
// import {GetLogin} from '../service/Query';
// import Router from 'next/router';
// import AxiosService from "../../common/axiosService";
// import useCreateUrl from './useCreateUrl';
import {OtherQuery} from '../service/Query';
import ToastNotication from '../lib/GetToast';


const useRenderCreateDelete = (dataUpdateForm,payload,nameMethod,_on_Toggle_Modal,ObjectUpdate,_on_fetch) => {
    // console.log('ObjectUpdate',dataUpdateForm)
    let keyValue = ObjectUpdate.keyValue
    let keyUpdate = ObjectUpdate.KeyUpdate
    // const [value,SetValue] = useState();
   
    // useEffect(() => {
    //     if (dataUpdateForm[keyValue]) {
    //         console.log('chay o useEffect')
    //       // setID_SV_MH(dataUpdateForm.User_ID)
    //       // setID_Mon_Lophoc(dataUpdateForm.ID_Mon_Lophoc)
    //     }
    //     // console.log('dataUpdateForm',dataUpdateForm)
    //     return () => {
    //     }
    // },[dataUpdateForm])

    const _on_Render_Header = () => {
        if (dataUpdateForm.hasOwnProperty(`${keyValue}`)) {
            return `Cập nhật ${keyUpdate}: ` + dataUpdateForm[keyValue]
        } else {
            return `Nhập ${keyUpdate}`
        }
    }

    const _on_Render_Jsx = () =>{
        return (!dataUpdateForm.hasOwnProperty(`${keyValue}`))
    }

    const _on_Submit =  async (e) =>{
        e.preventDefault()
        let messageResult = ""
        if (!dataUpdateForm.hasOwnProperty(`${keyValue}`)) {
        const url = `${nameMethod}`
        const method = 'Put'
        const result = await OtherQuery(url,payload,method)
        console.log('result',result)
        messageResult = result.data
        ToastNotication(`success`,`${messageResult}`)
        } else {
        /** update */
        const url = `${nameMethod}`
        const method = 'Post'
        const result = await OtherQuery(url,payload,method)
        console.log('result',result)
        messageResult = result.data
        ToastNotication(`success`,`${messageResult}`)
        }
        _on_fetch()
        _on_Toggle_Modal()
    }

    return {_on_Submit,_on_Render_Header,_on_Render_Jsx}
}

export default useRenderCreateDelete;