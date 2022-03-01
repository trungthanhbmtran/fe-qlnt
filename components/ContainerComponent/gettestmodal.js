import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button} from '@material-ui/core';
import {OtherQuery} from '../../service/Query'
// import { useEffect } from 'react';


const Getusermodal = ({openModal,_on_Toggle_Modal,nameMethod}) =>{
  const MANHANVIEN = 11
  const ID_NhomNguoiDung = 1
  const UserName = 'thanhkute'
  const Pass = '123456'
  const ID_Donvi = `1233`
  const User_ID = 1122
  const _on_Submit =  async (e) =>{
    e.preventDefault()
    const payload = {
      id_nv: parseInt(MANHANVIEN),
      groupid: parseInt(ID_NhomNguoiDung),
      Username: UserName,
      Pass: Pass,
      MADONVI : parseInt(ID_Donvi),
      User_ID: User_ID
    }
    // console.log('nameMethod',nameMethod)
    const url = `${nameMethod}`
    const method = 'post'
    const result = await OtherQuery(url,payload,method)
    console.log('result',result)
    _on_Toggle_Modal()
  } 
    return (
    <Modal isOpen={openModal} toggle={_on_Toggle_Modal} >
      <ModalHeader toggle={_on_Toggle_Modal}>Modal title</ModalHeader>
      <ModalBody>
        This is form test
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={_on_Submit}>Do Something</Button>{' '}
        <Button color="secondary" onClick={_on_Toggle_Modal}>Cancel</Button>
      </ModalFooter>
    </Modal>
    )
}

export default Getusermodal