import { toast } from 'react-toastify';

// const PrinterCaseToast = (value,message) =>{
//     const ArrayToast = {
//         success : [ProcessToast(value,message)],
//         error : [ProcessToast(value,message)],
//         updated : [ProcessToast(value,message)],
//         delete : [ProcessToast(value,message)] 
//     }
//     return ArrayToast[value] || []
// } 

const ProcessToast = (value,message) =>{
    return toast[value](message, {
        position: toast.POSITION.TOP_RIGHT
    });
}

const ToastNotication = (value,message) => {
    switch(value) {
        case `success`:
           return ProcessToast(`success`,message)
          break;
        case `error`:
            return ProcessToast(`error`,message)
          break;
        case `info`:
            return ProcessToast(`info`,message)
          break;   
        case `warn`:
            return ProcessToast(`warn`,message)
          break;  
      }
}



// function ToastNotication(value,message) {
//     // console.log('value',value)
//     const ArrayToast = {
//         success: 1,
//         error: 5,
//         info: 3,
//         warn: 4,
//     };
//     return ArrayToast[`${value}`] || [];
// }
 
// console.log(ToastNotication('success',32312))
export default ToastNotication