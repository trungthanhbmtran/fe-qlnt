import axios from 'axios'

const AxiosService = axios.create({
  baseURL: "http://"+(process.env.API_IP || process.env.NEXT_PUBLIC_API_IP) + ":3005", // server - browser
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'GET',
});

/** middleware request */
// AxiosService.interceptors.request.use(
//   (config)=>{
//     try{
//       /** lấy cookie ở server side (truyền từ _app.js) */
//       let accessToken = GLOBALS.cookies.accessToken || ''
//       if(!accessToken){
//         /** lấy cookie ở client side */
//         const allCookies = cookies(NextContext)
//         if(allCookies && allCookies.accessToken){
//           accessToken = allCookies.accessToken;
//         }
//       }
//       config.headers['token'] = accessToken;
//     }catch(err){
//      // console.log(err);
//     }
//    // console.info(config.url + ' :', config.headers.token);
//     return config;
//   }, 
//   (err)=>{
//     return Promise.reject(err);
//   }
// );

/** middleware response */
AxiosService.interceptors.response.use(
  (response)=>{
    return response
  }, 
  (err)=>{
    return Promise.reject(err);
  }
);

export default AxiosService