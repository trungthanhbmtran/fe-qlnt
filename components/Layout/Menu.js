import React, { useState } from 'react';
import BoxMenu from './BoxMenu';
import { useSelector} from "react-redux";

const Menu = () => {
   // console.log('Giá trị RoleUsers',RoleUsers)
   // console.log('Giá trị RoleUsers destrion',RoleUsers.RoleUsers)
   const GetRolesLocal = useSelector(state => state.Roles)
//    console.log('GetRolesLocal',GetRolesLocal)
   const Arraymenu = [
    {id :1,path :'/post/getuser',query :{ page: 1,limit: 2,searchName :''},nameRoute : 'Tổng quan chung',roles : 2},
    {id :2,path :'/post/getsemester',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'Thuốc',roles : 2},
    {id :3,path :'/post/getclasses',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'Đơn thuốc',roles : 2},
    {id :4,path :'/post/getsubjects',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'Bệnh nhân',roles : 2},
    // {id :5,path :'/report/getscore',query :{ page: 1,limit: 2,searchName :'',ID_He_Daotao:2,ID_Nganhnghe:4,ID_Lophoc :8518,Thutu :1,ID_Mon_Lophoc:46122,MANHANVIEN:0 },nameRoute : 'reportSinhVien',roles : 2},
    {id :5,path :'/report/getscore',query :{ page: 1,limit: 2,searchName :''},nameRoute : 'Bác sĩ',roles : 2},
    {id :6,path :'/post/getscore',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'Phòng khám',roles : 2},
    {id :7,path :'/report/reportclass',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'Lịch làm việc',roles : 2},
    {id :8,path :'/report/reportclass',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'Khám',roles : 2},
    {id :9,path :'/report/reportclass',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'In ấn',roles : 2},
    {id :10,path :'/report/reportclass',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'Logs hệ thống',roles : 2},
    {id :11,path :'/multistep/asyncformstep',query :{ page: 1,limit: 2,searchName :'' },nameRoute : 'Sổ khám bệnh',roles : 2},

   ]
        return (
        <>
        {
            // Can not clean warning because Reduce not support key value same as Map
            Arraymenu.reduce((t,v,index) => v.roles === GetRolesLocal 
            ? [...t,
                (
                <BoxMenu key={index} path={v.path} query={v.query} name={v.nameRoute}/>
                 )] 
            : t
            , [])
            // Arraymenu.map((v,i)=>{
            //     return (
            //         <BoxMenu key={i}  path={v.path} query={v.query} name={v.nameRoute}/>
            //     )
            // })
        }
        </>
        )
}
    

export default Menu