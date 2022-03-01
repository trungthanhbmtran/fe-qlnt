import { useState } from 'react';
import GetQuery from '../service/Query'

const usePagination  = (page,limit) => {
  const [perPage, setPerPage] = useState(2)
  const [curPage, setCurPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const [keySearch, setKeySearch] = useState('')

  const _on_fetch = async () =>{
    const GetData = await GetQuery(`getuser`,{page : curPage , limit :perPage})
    // console.log('GetData',GetData)
    const Create = await useCreateUrl({page : curPage , limit :perPage})
    Router.replace(`/post/${comment}${Create}`)
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

  const _on_Change_Page = (page) => {
    setCurPage(page)
    // _on_Fetch(page, perPage, keySearch)
  }

  const _change_Limit = (limit) => {
    setPerPage(limit)
    // _on_Fetch(1, limit, keySearch)
  }

  const _on_Do_Search = () => {
    alert('do search')
      // _on_Fetch(1, perPage, keySearch)
  }


  return {
    perPage,
    curPage,
    totalPage,
    keySearch
  }
};

export default usePagination;