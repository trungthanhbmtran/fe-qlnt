import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TextField, Select, Button, FormControl, InputLabel } from '@material-ui/core';
import { useState,useEffect } from 'react';
import UseInputSelect from '../../hooks/useInputSelect';
import UseInputText from '../../hooks/useInputText';
import UseRenderCreateDelete from '../../hooks/useRenderCreateDelete';
import ProccesCondition from '../../lib/ObjectCondition'

const renderBranches = (value) =>{
  const arrayRender ={
    1 : ProccesCondition('Ma_TC',parseInt(value)),
    2 : ProccesCondition('Ma_CD',parseInt(value))
  }
  return arrayRender[value] || []
}

const GetscoreStatisticnModal = ({openModal,_on_Toggle_Modal,nameMethod,dataUpdateForm,_on_fetch}) =>{
  const SemestertypeObject = UseInputSelect(`semestertype`,{key :'ID_He_Daotao', value :'Ten_He_Daotao'})
  console.log('SemesterObject',SemestertypeObject.value)
  const SemesterObject = UseInputSelect(`semester`,{key :'ID_Nienkhoa', value :'Ten_Nienkhoa'},ProccesCondition('ID_He_Daotao',parseInt(SemestertypeObject.value)))
  const BranchesObject = UseInputSelect(`branches`,{key :'ID_Nganhnghe', value :'Ten_Nganhnghe'},renderBranches(SemestertypeObject.value))
  const ConfigMaxObject =  UseInputText('')
  const DepartmentsObject = UseInputSelect(`department`,{key :'ID_Donvi', value :'TENDONVI'})
  const ConvertToChar10 = ((DepartmentsObject.value).toString()).padEnd(10)
  // console.log('DepartmentsObject',ConvertToChar10)
  const StaffsObject = UseInputSelect(`staffs`,{key :'MANHANVIEN', value :'HOTEN'},ProccesCondition('donvi_thaotac',`${ConvertToChar10}`))

  
  const payload = {
    ID_Nienkhoa : parseInt(SemesterObject.value) ,
    ID_He_Daotao : parseInt(SemestertypeObject.value),
    ID_Nganhnghe : parseInt(BranchesObject.value),
    ID_GV_Chunhiem : parseInt(StaffsObject.value),
    ID_Nganhnghe : parseInt(BranchesObject.value),
    //   ID_Lophoc : dataUpdateForm.ID_Lophoc,
    Max : parseInt(ConfigMaxObject.value),
  }

  const ObjectUpdate = {
    keyValue: `ID_Lophoc`,
    KeyUpdate : `L???p h???c`,
  }
  // v.Ma_CD === 2
 
  const CheckUpdateCreate = UseRenderCreateDelete(dataUpdateForm,payload,nameMethod,_on_Toggle_Modal,ObjectUpdate,_on_fetch)
  
  // useEffect(() => {
  //   if (dataUpdateForm[`${ObjectUpdate.keyValue}`]) {
  //       SemestertypeObject.setValue(dataUpdateForm.ID_Loai_Daotao)
  //     // setID_SV_MH(dataUpdateForm.User_ID)
  //     // setID_Mon_Lophoc(dataUpdateForm.ID_Mon_Lophoc)
  //   }
  //   // console.log('dataUpdateForm',dataUpdateForm)
  //   return () => {
  //   }
  // },[dataUpdateForm])


  // const _on_Submit =  async (e) =>{
  //   e.preventDefault()
  //   const payload = {
  //     id_nv: parseInt(StaffObject.value),
  //     groupid: parseInt(GroupObject.value),
  //     Username: UserObject.value,
  //     Pass: PassObject.value,
  //     MADONVI : parseInt(DepartmentObject.value),
  //     User_ID: User_ID
  //   }
  //   // console.log('nameMethod',nameMethod)
  //   const url = `${nameMethod}`
  //   const method = 'post'
  //   const result = await OtherQuery(url,payload,method)
  //   // console.log('result',result)
  //   _on_Toggle_Modal()
  // }
  
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
                <InputLabel htmlFor="outlined-age-native-simple">Ng??nh</InputLabel>
                  {BranchesObject.select()}
        </FormControl>

        <TextField  {...ConfigMaxObject} margin="normal" label="S??? l?????ng" fullWidth={true} variant="outlined" placeholder="Bi??n ch??? m???i l???p..." required />
       
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

export default GetscoreStatisticnModal