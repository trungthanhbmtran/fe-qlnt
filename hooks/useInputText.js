import { useState,useEffect, useMemo } from 'react';
import {GetQuery} from '../service/Query';
import { Select, FormControl, InputLabel } from '@material-ui/core';


const useInputText = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
    
    function onChange(e) {
      setValue(e.target.value)
    }
    
    return { value, onChange}
  // const renderValue = () => {
  //   // return GetDepartments.map(e => <option  value={e.ID_Donvi}>{e.TENDONVI}</option>)
  //   return data.reduce((t, v) => [...t,<option  value={v.ID_Donvi}>{v.TENDONVI}</option> ], []);
  // }
};

export default useInputText;