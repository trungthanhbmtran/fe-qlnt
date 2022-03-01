import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {OtherQuery,GetQuery} from '../../service/Query';
import { TextField, Select, Button, FormControl, InputLabel } from '@material-ui/core';
import { useState,useEffect } from 'react';
import UseInputText from '../../hooks/useInputText';
import UseInputSelect from '../../hooks/useInputSelect';
import UseRenderCreateDelete from '../../hooks/useRenderCreateDelete';
import ProccesCondition from '../../lib/ObjectCondition'
import ToastNotication from '../../lib/GetToast';



const Getusermodal = ({openModal,_on_Toggle_Modal,nameMethod,dataUpdateForm,_on_fetch}) =>{
  const SemesterlevelObject = UseInputSelect(`semestertype`,ProccesCondition('ID_He_Daotao','Ten_He_Daotao'))
  const SemestertypeObject = UseInputSelect(`semesterlevel`,ProccesCondition('ID_Loai_Daotao','Tenloai_Daotao'))
  
  const payload = {
    ID_He_Daotao : parseInt(SemesterlevelObject.value) ,
    ID_Loaihinh_Daotao : parseInt(SemestertypeObject.value)
  }

  const ObjectUpdate = {
    keyValue: `Ten_Nienkhoa`,
    KeyUpdate : `Niên khóa`,
  }

  const CheckUpdateCreate = UseRenderCreateDelete(dataUpdateForm,payload,nameMethod,_on_Toggle_Modal,ObjectUpdate,_on_fetch)
  
  useEffect(() => {
    if (dataUpdateForm[`${ObjectUpdate.keyValue}`]) {
        SemesterlevelObject.setValue(dataUpdateForm.ID_He_Daotao)
        SemestertypeObject.setValue(dataUpdateForm.ID_Loai_Daotao)
      // setID_SV_MH(dataUpdateForm.User_ID)
      // setID_Mon_Lophoc(dataUpdateForm.ID_Mon_Lophoc)
    }
    // console.log('dataUpdateForm',dataUpdateForm)
    return () => {
    }
  },[dataUpdateForm])

    return (
    <Modal isOpen={openModal} toggle={_on_Toggle_Modal} zIndex={9999999999}>
      <ModalHeader toggle={_on_Toggle_Modal}>{CheckUpdateCreate._on_Render_Header()}</ModalHeader>
      <ModalBody>
      <form noValidate autoComplete="off">
      {CheckUpdateCreate._on_Render_Jsx()
        &&
        <div>
        </div>
        }
        <FormControl variant="outlined" fullWidth={true} margin="normal" >
          <InputLabel htmlFor="outlined-age-native-simple">Loại</InputLabel>
            {SemestertypeObject.select()}
        </FormControl>
        <FormControl variant="outlined" fullWidth={true} margin="normal" >
          <InputLabel htmlFor="outlined-age-native-simple">Hệ</InputLabel>
            {SemesterlevelObject.select()}
        </FormControl>
      </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="contained" color="secondary" onClick={CheckUpdateCreate._on_Submit}>Lưu</Button>{' '}
        <Button variant="contained" color="primary" onClick={_on_Toggle_Modal}>Hủy</Button>
      </ModalFooter>
    </Modal>
    )
}

export default Getusermodal