import {useState,useEffect} from 'react';

const  useDropLimit = (init = false) => {
    const [dropdownOpen, setOpen] = useState(init);
    // const { current, arrayLimit, _change_Limit } = props    
    
    const toggle = () => setOpen(!dropdownOpen);
    
    return {dropdownOpen,toggle}
      
}

export default useDropLimit
  
