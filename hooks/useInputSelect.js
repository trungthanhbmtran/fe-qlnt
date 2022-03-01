import { useState,useEffect, useMemo,useCallback } from 'react';
import {GetQuery} from '../service/Query';
import {  Select } from '@material-ui/core';

const useInputSelect = (ValueSelect,ValueRender,Conditional={},splitdata={}) => {
//   console.log('ValueRender',ValueRender.key)
//   console.log('ValueRender',ValueRender.value)
  // console.log('Conditional',Conditional)
  // console.log('splitdata',splitdata)
  const [value, setValue] = useState(0)
  const [data,setData] = useState([])
    
    function onChange(e) {
      setValue(e.target.value)
    }

    // const ConsiderConditionsfunction =(get_value) =>{
    //   console.log('get_value into function',get_value)
    //   return get_value.data.filter(c => console.log(c))
    // }
    
      const _on_fetch_department = async () =>{
        const get_value =await GetQuery(`${ValueSelect}`)
        // const get_valueroles =await GetQuery(`roles`)
        // const get_staffs =await GetQuery(`staffs`)
        // console.log('get_value',get_value.data)
        // let ProcessArray = get_value.data
        // console.log('get_value',get_value.data.filter(c => c[splitdata.Key] === splitdata.Value))
        // const Result = ProcessArray.filter(c => c[splitdata.Key] === splitdata.Value )
        // console.log('Result',Result)
        // const ResultConsiderConditions = ConsiderConditionsfunction(get_value)
        // console.log('ResultConsiderConditions',ResultConsiderConditions)
        setData(get_value.data)
      }

    useEffect(()=>{
        _on_fetch_department()
        // console.log(`chay thay doi ne ${ValueSelect}`)
        return ()=>{
          setData()
        }
      },[ValueSelect])
    
   

    const renderselectbox = () => {
        // return GetDepartments.map(e => <option  value={e.ID_Donvi}>{e.TENDONVI}</option>)
        // return data.reduce((t, v) => [...t,<option  value={v[ValueRender.key]}>{v[ValueRender.value]}</option> ], []);
        return data.reduce((t, v,index) => (v[Conditional.Key] === Conditional.Value && v[splitdata.Key] === splitdata.Value)
        ? [...t, <option key={index}  value={v[ValueRender.Key]}>{v[ValueRender.Value]}</option>] 
        : t, []);
    }

    const select = () =>{
        return(
          <Select
                  native
                  value={value}
                  onChange={onChange}
                >
                  <option value={0}>[none]</option>
                  {renderselectbox()}
          </Select>
        )
    }
    
    return { value, onChange,setValue,renderselectbox,select}
  // const renderValue = () => {
  //   // return GetDepartments.map(e => <option  value={e.ID_Donvi}>{e.TENDONVI}</option>)
  //   return data.reduce((t, v) => [...t,<option  value={v.ID_Donvi}>{v.TENDONVI}</option> ], []);
  // }
};

export default useInputSelect;