import Router,{ useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import {GetQuery} from '../../service/Query';
import useCreateUrl from '../../hooks/useCreateUrl';
import useProccessForm from '../../hooks/useProccessForm';
import DropdownLimit from '../../components/kits/DropdownLimit'
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Table from '../../components/Kits/Table';
import Layout from '../../components/Layout/Layout';
import ToastNotication from '../../lib/GetToast';
import { Input,Button, Grid} from '@material-ui/core';
import useModal from '../../hooks/useModal';
import dynamic from 'next/dynamic';
import printTable from '../../lib/printTable';
import printSelectReport from '../../lib/printSelectReport';
import {useAuth} from '../../hooks/useAuth'
import Delete from '@material-ui/icons/Delete';
import AddBox from '@material-ui/icons/AddBox';
import ProccesCondition from '../../lib/ObjectCondition';
import UseInputSelect from '../../hooks/useInputSelect';
import { FormControl,InputLabel } from '@material-ui/core';

const renderBranches = (value) =>{
  const arrayRender ={
    1 : ProccesCondition('Ma_TC',parseInt(value)),
    2 : ProccesCondition('Ma_CD',parseInt(value))
  }
  return arrayRender[value] || []
}



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
}));



const Slug = ({}) => {
  const Authentication = useAuth();
  const classes = useStyles();
  const router = useRouter()
  const {isShowing,toggle} = useModal()
  const {slug} = router.query

  console.log('router.query',router.query)
  // console.log('router.query',router.query)

  const [perPage, setPerPage] = useState(2)
  const [curPage, setCurPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const [keySearch, setKeySearch] = useState('')
  const [listusers, setlistusers] = useState([])

  const [resultConcat,setResultConcat] = useState()

  const [dataUpdateForm, setDataUpdateForm] = useState({})


  const columns = printTable(`${slug}`)



  const SemestertypeObject = UseInputSelect(`semestertype`,ProccesCondition('ID_He_Daotao','Ten_He_Daotao'))
  // console.log('SemestertypeObject',SemestertypeObject.value)
  const BranchesObject = UseInputSelect(`branches`,ProccesCondition('ID_Nganhnghe','Ten_Nganhnghe'),renderBranches(SemestertypeObject.value))
  const ClassesObject =  UseInputSelect(`classes`,ProccesCondition('ID_Lophoc','Ten_Lophoc'),ProccesCondition('ID_Nganhnghe',parseInt(BranchesObject.value)),ProccesCondition('ID_He_Daotao',parseInt(SemestertypeObject.value)))
  // console.log('ClassesObject',ClassesObject.value)
  const DetailsemesterObject =  UseInputSelect(`detailsemesterclasses`,ProccesCondition('Thutu','Ten_Hocky'),ProccesCondition('ID_Lophoc',parseInt(ClassesObject.value)))
  // console.log('DetailsemesterObject',DetailsemesterObject)
  const SubjectObject =  UseInputSelect(`subjects`,ProccesCondition('ID_Mon_Lophoc','Ten_Monhoc'),ProccesCondition('ID_Lophoc',parseInt(ClassesObject.value)),ProccesCondition('Thutu',parseInt(DetailsemesterObject.value)))

  const StudentsObject =  UseInputSelect(`students`,ProccesCondition('MANHANVIEN','HOTEN'),ProccesCondition('ID_Lophoc',parseInt(ClassesObject.value)))





  // console.log('columns',printTable(`gettest`))

  // const [openModal, setOpenModal] = useState(false)

  // const toggle = async () => setModal(!modal);

  
  // const [page,setPage] = useState(0)
  // const [name,setName] = useState('')
  // const [totalpage,settotalpage] = useState(100)
  // const [data,setData] = useState([])

  const onClickEditAction = (event, rowData) => { alert(rowData.HOTEN) }
  const onClickDeleteAction = (event, rowData) => { alert(rowData.HOTEN) }


  
  const actions = [
  {
    icon: () => <AddBox style={{ color: '#90F' }}>edit</AddBox>,
    tooltip: 'Edit',
    onClick: (event, rowData) => { _on_Edit_Form(rowData) }
  },
  {
    icon: () => <Delete style={{ color: '#90F' }}>delete</Delete>,
    tooltip: 'Delete',
    onClick: (event, rowData) => { _on_Edit_Form(rowData) }
  }
  ]

  const _on_Edit_Form = (data) => {
    setDataUpdateForm(data)
    _on_fetch()
    toggle()
  }

  const _on_Add_Form = async () => {
    setDataUpdateForm({})
    _on_fetch()
    toggle()
  }


  const DynamicLazyComponent  = dynamic(() =>  
  import(`../../components/ReportForm/ReportStudent`),
  //  { ssr: false },
  )

  // use production
  // const DynamicLazyComponent = dynamic(() => import('../../components/ContainerComponent/getusermodal'), {
  //   suspense: true,
  // })

  const _on_fetch = async () =>{
      const params = {
        page : curPage , limit :perPage,
        ID_He_Daotao : SemestertypeObject.value,
        ID_Nganhnghe : BranchesObject.value,
        ID_Lophoc : ClassesObject.value,
        Thutu :  DetailsemesterObject.value,
        ID_Mon_Lophoc : SubjectObject.value,
        MANHANVIEN : StudentsObject.value
      }
      const GetData = await GetQuery(`${slug}`,params)
      // console.log('GetData',GetData)
      const Create = await useCreateUrl(params)
      Router.replace(`/report/${slug}${Create}`)
      // console.log('create',Create.data)
      const length = GetData.data.data.length
      if(length ===0){
        ToastNotication(`error`,`Thất bại trang ${curPage} với ${perPage} và key ${keySearch}`)
        setTotalPage(GetData.data.total_page)
        setlistusers(GetData.data.data)
      }else{
        ToastNotication(`success`,`Lấy dữ liệu thành công trang ${curPage} với ${perPage} và key ${keySearch}`)
        setTotalPage(GetData.data.total_page)
        setlistusers(GetData.data.data)
      }
  }

  useEffect(() =>{
      _on_fetch()
  },[curPage,perPage,keySearch])


  // const renderSelect = () =>{
    
  // }


  const _on_Change_Page = (page) => {
    setCurPage(page)
  }

  const _change_Limit = (limit) => {
    setPerPage(limit)
  }

  const _on_Do_Search = () => {
    alert('do search')
  }

  const render = () =>{
    switch (slug) {
      case 'getscore':
        return(
          <>
          <FormControl variant="outlined"  margin="normal" >
                        <InputLabel htmlFor="ID_He_Daotao">HệĐàoTạo</InputLabel>
                          {SemestertypeObject.select()}
                    </FormControl>
                  
                    <FormControl variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-age-native-simple">Ngành</InputLabel>
                        {BranchesObject.select()}
                    </FormControl>
    
                    <FormControl variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-age-native-simple">Lớp</InputLabel>
                        {ClassesObject.select()}
                    </FormControl>
    
                    <FormControl variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-age-native-simple">Học Kỳ</InputLabel>
                        {DetailsemesterObject.select()}
                    </FormControl>
    
                    <FormControl variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-age-native-simple">Môn học</InputLabel>
                        {SubjectObject.select()}
                    </FormControl>
                  </>
        )
        break;
      case 'reportclass':
        return(
          <>
          <FormControl variant="outlined"  margin="normal" >
                        <InputLabel htmlFor="ID_He_Daotao">HệĐàoTạo</InputLabel>
                          {SemestertypeObject.select()}
                    </FormControl>
                  
                    <FormControl variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-age-native-simple">Ngành</InputLabel>
                        {BranchesObject.select()}
                    </FormControl>
    
                    <FormControl variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-age-native-simple">Lớp</InputLabel>
                        {ClassesObject.select()}
                    </FormControl>
    
                    <FormControl variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-age-native-simple">Học Kỳ</InputLabel>
                        {DetailsemesterObject.select()}
                    </FormControl>
    
                    <FormControl variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-age-native-simple">Tên</InputLabel>
                        {StudentsObject.select()}
                    </FormControl>
                  
                 
                  </>
        )
        break;
      default:
        break;
    }
    
  }

  // console.log('isshowing',isShowing)
  // console.log('toggle',toggle)
  console.log('listusers',listusers)
  return (
    <>
    <Layout title={`Danh sách ${slug}`}>

      {/* <Header />
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1> */}
    <div className={classes.root}>
            <Grid container spacing={3}
             justifyContent="flex-end"
             direction="row"
             >
                {render()}
            <Grid item xs={6}>
            <DropdownLimit arrayLimit={[2, 5, 10, 20, 30]} _change_Limit={_change_Limit} current={perPage} />
            </Grid>
            <DynamicLazyComponent
            fileName="BẢNG ĐIỂM"
            sheetName="Bảng điểm"
            buttontext="In"
            dataList={listusers}
            // dataRender={DetailsemesterObject.value}
            />
            </Grid>
            
            <Input defaultValue="" placeholder="Từ khóa..." inputProps={{ 'aria-label': 'description' }}
                      onChange={(e) => setKeySearch(e.target.value)} />
           <Button variant="contained" color="primary" onClick={_on_Do_Search}>Tìm kiếm</Button>
      </div>

      <Table
        title={`Danh sách ${slug}`}
        columns={columns}
        data={listusers}
        actions={actions}
      />
      
       

      
   
    {/* <UserModal
      openModal={isShowing}
      nameMethod={resultConcat}
      _on_Toggle_Modal={toggle}
      /> */}
     {/* <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal> */}


      
      <Pagination count={totalPage} size="large" defaultPage={curPage} page={curPage}
              onChange={(e, page) => { _on_Change_Page(page) }} />
    </Layout>

    </>
  )
}


export default Slug