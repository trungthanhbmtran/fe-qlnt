import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {OtherQuery,GetQuery} from '../../service/Query';
import { TextField, Select, Button, FormControl, InputLabel } from '@material-ui/core';
import { useState,useEffect } from 'react';
import UseInputText from '../../hooks/useInputText';
import UseInputSelect from '../../hooks/useInputSelect';
import ProccesCondition from '../../lib/ObjectCondition';
import UseRenderCreateDelete from '../../hooks/useRenderCreateDelete';


const renderBranches = (value) =>{
  const arrayRender ={
    1 : ProccesCondition('Ma_TC',parseInt(value)),
    2 : ProccesCondition('Ma_CD',parseInt(value))
  }
  return arrayRender[value] || []
}

const GetSubjectsModal = ({openModal,_on_Toggle_Modal,nameMethod,dataUpdateForm,_on_fetch}) =>{
  const SemestertypeObject = UseInputSelect(`semestertype`,ProccesCondition('ID_He_Daotao','Ten_He_Daotao'))
  const SemesterObject = UseInputSelect(`semester`,ProccesCondition('ID_Nienkhoa','Ten_Nienkhoa'),ProccesCondition('ID_He_Daotao',parseInt(SemestertypeObject.value)))
  // console.log('SemesterObject',SemesterObject.value)
  const BranchesObject = UseInputSelect(`branches`,ProccesCondition('ID_Nganhnghe','Ten_Nganhnghe'),renderBranches(SemestertypeObject.value))
  const DetailSemestersObject = UseInputSelect(`detailsemester`,ProccesCondition('Thutu','Ten_Hocky'),ProccesCondition('ID_Nienkhoa',parseInt(SemesterObject.value)))
  const GroupSubjectsObject = UseInputSelect(`groupsubject`,ProccesCondition('ID_Nhommon','Ten_Nhom'))
  const DepartmentsObject = UseInputSelect(`department`,ProccesCondition('ID_Donvi','TENDONVI'))
  const ConvertToChar10 = ((DepartmentsObject.value).toString()).padEnd(10)
  // console.log('DepartmentsObject',ConvertToChar10)
  const StaffsObject = UseInputSelect(`staffs`,ProccesCondition('MANHANVIEN','HOTEN'),ProccesCondition('donvi_thaotac',`${ConvertToChar10}`))


  const payload = {
    ID_Nienkhoa : parseInt(SemesterObject.value) ,
    ID_Nhomhe : parseInt(SemestertypeObject.value),
    ID_Nganhnghe : parseInt(BranchesObject.value),
    Hoc_ky: parseInt(DetailSemestersObject.value),
    ID_Nhommon: parseInt(GroupSubjectsObject.value),
    MANHANVIEN : parseInt(StaffsObject.value)
  }

  const ObjectUpdate = {
    keyValue: `ID_Monhoc`,
    KeyUpdate : `M??n h???c`,
  }
 
  const CheckUpdateCreate = UseRenderCreateDelete(dataUpdateForm,payload,nameMethod,_on_Toggle_Modal,ObjectUpdate,_on_fetch)

  // useEffect(() => {
  //   if (dataUpdateForm.User_ID) {
  //     // setID_SV_MH(dataUpdateForm.User_ID)
  //     // setID_Mon_Lophoc(dataUpdateForm.ID_Mon_Lophoc)
  //   }
  //   // console.log('dataUpdateForm',dataUpdateForm)
  //   return () => {
  //   }
  // },[dataUpdateForm])


  
  
//   const _on_Render_Header = () => {
//     if (dataUpdateForm.hasOwnProperty("User_ID")) {
//         return "C???p nh???t nh??n s???: " + dataUpdateForm.HOTEN
//     } else {
//         return "Nh???p Nh??n S???"
//     }
// }

  // console.log('UserObject',UserObject.value)
  // console.log('PassObject',PassObject.value)
  // console.log('DepartmentObject',DepartmentObject.value)
  // console.log('StaffObject',StaffObject.value)
  // console.log('GroupObject',GroupObject.value)
    return (
    <Modal isOpen={openModal} toggle={_on_Toggle_Modal} zIndex={9999999999}>
      <ModalHeader toggle={_on_Toggle_Modal}>{CheckUpdateCreate._on_Render_Header()}</ModalHeader>
      <ModalBody>
      <form noValidate autoComplete="off">
      {CheckUpdateCreate._on_Render_Jsx()
        &&
        <div>
     <FormControl variant="outlined" fullWidth={true} margin="normal" >
                <InputLabel htmlFor="ID_He_Daotao">H???????oT???o</InputLabel>
                  {SemestertypeObject.select()}
      </FormControl>
      <FormControl variant="outlined" fullWidth={true} margin="normal" >
                <InputLabel htmlFor="ID_NienKhoa">Ni??n Kh??a</InputLabel>
                  {SemesterObject.select()}
      </FormControl>

      <FormControl variant="outlined" fullWidth={true} margin="normal" >
                <InputLabel htmlFor="Thutu">H???c k???</InputLabel>
                  {DetailSemestersObject.select()}
      </FormControl>

      <FormControl variant="outlined" fullWidth={true} margin="normal" >
                <InputLabel htmlFor="outlined-age-native-simple">Ng??nh</InputLabel>
                  {BranchesObject.select()}
        </FormControl>

        <FormControl variant="outlined" fullWidth={true} margin="normal" >
                <InputLabel htmlFor="outlined-age-native-simple">Nh??m M??n</InputLabel>
                  {GroupSubjectsObject.select()}
        </FormControl>
        </div>
        }
<FormControl variant="outlined" fullWidth={true} margin="normal" >
                <InputLabel htmlFor="outlined-age-native-simple">????n v???</InputLabel>
                  {DepartmentsObject.select()}
          </FormControl>

          <FormControl variant="outlined" fullWidth={true} margin="normal" >
                <InputLabel htmlFor="outlined-age-native-simple">Gi??oVi??n</InputLabel>
                  {StaffsObject.select()}
              </FormControl>
        
      </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="contained" color="secondary" onClick={CheckUpdateCreate._on_Submit}>L??u</Button>{' '}
        <Button variant="contained" color="primary" onClick={_on_Toggle_Modal}>H???y</Button>
      </ModalFooter>
    </Modal>
    )
}

export default GetSubjectsModal