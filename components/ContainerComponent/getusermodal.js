import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {OtherQuery,GetQuery} from '../../service/Query';
import { TextField, Select, Button, FormControl, InputLabel } from '@material-ui/core';
import { useState,useEffect } from 'react';
import UseInputText from '../../hooks/useInputText';
import UseInputSelect from '../../hooks/useInputSelect';



const Getusermodal = ({openModal,_on_Toggle_Modal,nameMethod,dataUpdateForm}) =>{
  const [User_ID, setUser_ID] = useState('')
  const UserObject = UseInputText('')
  const PassObject = UseInputText('')
  const DepartmentObject = UseInputSelect(`department`,{key :'ID_Donvi', value :'TENDONVI'})
  const StaffObject = UseInputSelect(`staffs`,{key :'MANHANVIEN', value :'HOTEN'})
  const GroupObject = UseInputSelect(`roles`,{key :'ID_NhomNguoiDung', value :'TenNhom'})

  useEffect(() => {
    if (dataUpdateForm.User_ID) {
      // setID_SV_MH(dataUpdateForm.User_ID)
      setUser_ID(dataUpdateForm.User_ID)
      // setID_Mon_Lophoc(dataUpdateForm.ID_Mon_Lophoc)
    }
    // console.log('dataUpdateForm',dataUpdateForm)
    return () => {
    }
  },[dataUpdateForm])


  const _on_Submit =  async (e) =>{
    e.preventDefault()
    const payload = {
      id_nv: parseInt(StaffObject.value),
      groupid: parseInt(GroupObject.value),
      Username: UserObject.value,
      Pass: PassObject.value,
      MADONVI : parseInt(DepartmentObject.value),
      User_ID: User_ID
    }
    // console.log('nameMethod',nameMethod)
    const url = `${nameMethod}`
    const method = 'post'
    const result = await OtherQuery(url,payload,method)
    // console.log('result',result)
    _on_Toggle_Modal()
  }
  
  const _on_Render_Header = () => {
    if (dataUpdateForm.hasOwnProperty("User_ID")) {
        return "Cập nhật nhân sự: " + dataUpdateForm.User_ID
    } else {
        return "Nhập Nhân Sự"
    }
}

  // console.log('UserObject',UserObject.value)
  // console.log('PassObject',PassObject.value)
  // console.log('DepartmentObject',DepartmentObject.value)
  // console.log('StaffObject',StaffObject.value)
  // console.log('GroupObject',GroupObject.value)
    return (
    <Modal isOpen={openModal} toggle={_on_Toggle_Modal} zIndex={9999999999}>
      <ModalHeader toggle={_on_Toggle_Modal}>{_on_Render_Header()}</ModalHeader>
      <ModalBody>
      <form noValidate autoComplete="off">
      {(!dataUpdateForm.hasOwnProperty("User_ID"))
        &&
        <div>
      <TextField id="UserName" {...UserObject} margin="normal"  label="UserName" fullWidth={true} variant="outlined" placeholder="UserName..." required />
      <TextField id="Pass" 
        {...PassObject}
        type="password"
        margin="normal"  label="Pass" fullWidth={true} variant="outlined" placeholder="Pass..." required />
        <FormControl variant="outlined" fullWidth={true} margin="normal" >
        <InputLabel htmlFor="ID_Donvi">Đơn vị</InputLabel>
            {DepartmentObject.select()}
        </FormControl>
        <FormControl variant="outlined" fullWidth={true} margin="normal" >
        <InputLabel htmlFor="staff">Nhân viên</InputLabel>
            {StaffObject.select()}
        </FormControl>
        </div>
        }
        <FormControl variant="outlined" fullWidth={true} margin="normal" >
        <InputLabel htmlFor="Group">Nhóm Quyền</InputLabel>
          {GroupObject.select()}
        </FormControl>
      </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="contained" color="secondary" onClick={_on_Submit}>Lưu</Button>{' '}
        <Button variant="contained" color="primary" onClick={_on_Toggle_Modal}>Hủy</Button>
      </ModalFooter>
    </Modal>
    )
}

export default Getusermodal