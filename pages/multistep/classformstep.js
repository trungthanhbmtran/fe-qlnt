import React, { useState, useEffect, useContext } from 'react'
import _ from 'lodash';
import { addClass, updateGVCN } from '../../services/student'
import LoadingOverlay from '../../components/Kits/LoadingOverlay';
import { TextField, Select, Button, FormControl, InputLabel } from '@material-ui/core';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserContext from '../../components/Container/UserContext';

const ClassFormStep = ({ openModal, dataUpdateForm, _on_Refresh, _on_Toggle_Modal, classes,data_staff,data_brenches,data_classsemester,data_TypeSemester,data_ListStaffDepartments,handleNext,step,steps})=> {
  const [ID_Nienkhoa, setID_Nienkhoa] = useState(0)
  const [ID_Lophoc, setID_Lophoc] = useState(0)
  const [ID_Donvi, setID_Donvi] = useState(0)
  const [ID_He_Daotao, setID_He_Daotao] = useState(0)
  const [ID_Nganhnghe, setID_Nganhnghe] = useState(0)
  const [MANHANVIEN, setMANHANVIEN] = useState(0)
  const [Max, setMax] = useState(0)
  const [loading, setLoading] = useState(false)
  const { cookies } = useContext(UserContext);

  /**reset form khi form ẩn - hiện */
  useEffect(() => {
    setID_Nienkhoa(0)
    setID_Nganhnghe(0)
    setMANHANVIEN(0)
    return () => {
    }
  }, [openModal])

  /** update lại ID_SV_MH nếu form là update */
  

  /** START: submit form */
  const _on_Submit = async (e) => {
    e.preventDefault()
    /**hiện loading */
    setLoading(true)
    const itemFindNK = data_classsemester.find((item)=>item.ID_Nienkhoa == ID_Nienkhoa)
    const itemFindNN = data_brenches.find((item)=>item.ID_Nganhnghe == ID_Nganhnghe)

    /** data post */
    const dataPayload = {
      "Ten_Nienkhoa" : `${itemFindNK.Ten_Nienkhoa}`,
      "Tentat_Nganhnghe" : `${itemFindNN.Tentat_Nganhnghe}`,
      "ID_Nienkhoa" : ID_Nienkhoa,
      "ID_GV_Chunhiem" : MANHANVIEN,
      "ID_Nganhnghe" : ID_Nganhnghe,
      ID_Lophoc : ID_Lophoc,
      ID_He_Daotao : ID_He_Daotao,
      Max :Max,
    }
    console.log(step)
    let messageResult = ""
    const result = await addClass(dataPayload, cookies.accessToken)
    console.log("result addClass", result);
    messageResult = result.data || 'Lỗi đồng bộ'
    handleNext(messageResult);

  
    /** add */
 
    /**ẩn loading */
    setLoading(false)

    /** load lại table list - ẩn modal form */
    /** hiện kết quả */
  }
  /** END: submit form */

  /** START: check để hiện thị tiêu đề form add hoặc form update */
  
  /** END: check để hiện thị tiêu đề form add hoặc form update */

  /** START: change select (có thể tối ưu thêm bằng useCallback) */
  const handleChange_Nienkhoa = (e) => {
    setID_Nienkhoa(e.target.value)
}

const handleChange_Nganh = (e) => {
    setID_Nganhnghe(e.target.value)
}

const handleChange_Nhanvien = (e) => {
    setMANHANVIEN(e.target.value)
}

const handleChange_Type = (e) => {
  setID_He_Daotao(e.target.value)
}
 

const handleChange_StaffDepartments = (e) => {
  setID_Donvi(e.target.value)
}
  /** END: change select (có thể tối ưu thêm bằng useCallback) */

  /** START: render select */
  const _render_Nganh = () => {
    switch(parseInt(ID_He_Daotao)) {
      case 1:
      return _.filter(data_brenches, {Ma_TC :parseInt(ID_He_Daotao) })
        .map((item) => {
            return (
                <option value={item.ID_Nganhnghe}>{item.Ten_Nganhnghe}</option>
            )
        })
        break;
      case 2:
      return _.filter(data_brenches, {Ma_CD :parseInt(ID_He_Daotao)})
          .map((item) => {
              return (
                  <option value={item.ID_Nganhnghe}>{item.Ten_Nganhnghe}</option>
              )
          })
       break;
       default:
          // code block          
  }
  }

const _render_Nienkhoa = () => {
    return _.filter(data_classsemester, {ID_He_Daotao : parseInt(ID_He_Daotao)})
        .map((item) => {
            return (
                <option value={item.ID_Nienkhoa} >{item.Ten_Nienkhoa}</option>
            )
        })
}

const _render_nhanvien = () => {
    return _.filter(data_staff, {donvi_thaotac : parseInt(ID_Donvi)})
        .map((item) => {
            return (
                <option value={item.MANHANVIEN}>{item.HOTEN}</option>
            )
        })
}
const _render_Type = () => {
  return _.filter(data_TypeSemester, {})
    .map((item) => {
      return (
        <option value={item.ID_He_Daotao}>{item.Ten_He_Daotao}</option>
      )
    })
}

const _render_StaffDepartments = () => {
  return _.filter(data_ListStaffDepartments, {})
    .map((item) => {
      return (
        <option value={item.ID_Donvi}>{item.TENDONVI}</option>
      )
    })
}

  /** END: render select */

  return (
        <form noValidate autoComplete="off">
          {/* START: nếu không có ID_SV_MH -> đang là form update -> chỉ hiện Loại điểm, điểm, ghi chú */}
            <div>
               <FormControl variant="outlined" fullWidth={true} margin="normal" className={classes.formControl}>
                <InputLabel htmlFor="ID_He_Daotao">HệĐàoTạo</InputLabel>
                <Select
                  native
                  value={ID_He_Daotao}
                  label="ID_He_Daotao"
                  onChange={handleChange_Type}
                  inputProps={{
                    name: 'ID_He_Daotao',
                    id: 'ID_He_Daotao',
                  }}
                >
                  <option value={0}>[none]</option>
                  {_render_Type()}
                </Select>
              </FormControl>

              <FormControl variant="outlined" fullWidth={true} margin="normal" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Khóa</InputLabel>
                <Select
                  native
                  value={ID_Nienkhoa}
                  label="Khóa"
                  onChange={handleChange_Nienkhoa}
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option value={0}>[none]</option>
                  {_render_Nienkhoa()}
                </Select>
              </FormControl>

              <FormControl variant="outlined" fullWidth={true} margin="normal" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Ngành</InputLabel>
                <Select
                  native
                  value={ID_Nganhnghe}
                  label="Ngành"
                  onChange={handleChange_Nganh}
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option value={0}>[none]</option>
                  {_render_Nganh()}
                </Select>
              </FormControl>

              <TextField id="Max" value={Max} onChange={(e) => { setMax(e.target.value) }} margin="normal" label="Số lượng" fullWidth={true} variant="outlined" placeholder="Biên chế mỗi lớp..." required />

            </div>
          
          {/* END: nếu không có ID_SV_MH -> đang  là form update -> chỉ hiện Loại điểm, điểm, ghi chú */}

          <FormControl variant="outlined" fullWidth={true} margin="normal" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Đơn vị</InputLabel>
                <Select
                  native
                  value={ID_Donvi}
                  label="GiáoViên"
                  onChange={handleChange_StaffDepartments}
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option value={0}>[none]</option>
                  {_render_StaffDepartments()}
                </Select>
              </FormControl>

          <FormControl variant="outlined" fullWidth={true} margin="normal" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">GiáoViên</InputLabel>
                <Select
                  native
                  value={MANHANVIEN}
                  label="GiáoViên"
                  onChange={handleChange_Nhanvien}
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option value={0}>[none]</option>
                  {_render_nhanvien()}
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" onClick={_on_Submit}>Next</Button>
            
        {(loading)
          &&
          <LoadingOverlay />
        }
        </form>
     
  )
}
export default ClassFormStep 