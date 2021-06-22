import axios from 'axios';
import {GSM_LOADING_APP_API} from '@env';
export const LoginAPI = async (Email, PassWord) => {
  try {
    let response = await axios.get(
      `${GSM_LOADING_APP_API}/account/login?email=${Email}&password=${PassWord}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetAllBookings = async () => {
  try {
    let response = await axios.get(
      `${GSM_LOADING_APP_API}/bookings/getAllBookings`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

// export const MediaUpload = async (Data, JWTToken) => {
//   debugger;
//   const headers = {
//     Authorization: JWTToken,
//   };
//   try {
//     let response = await axios.post(
//       `http://103.232.124.170:11111/bookings/mediaUpload/bookings/mediaUpload`,
//       Data,
//       {
//         headers,
//       },
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// export const MediaUpload =  (formdata, JWTToken) => {
//   let result = new Promise((myResolve, myReject) => {
//     axios
//       .post('http://103.232.124.170:11111/bookings/mediaUpload',formdata,{Authorization: JWTToken,})
//       .then((result) => {
//         alert("hello")
//         console.log('result',result)
//         if (result) {
//           myResolve(result);
//         }
//       })
//       .catch((error) => {
//         myReject(error);
//       });
//   });
//   return result;
// };

// export async function MediaUpload(formdata, JWTToken) {
//   let result = new Promise((myResolve, myReject) => {
//     axios
//       .post('http://103.232.124.170:11111/bookings/mediaUpload',{Authorization: JWTToken},formdata)
//       .then((result) => {
//         if (result) {
//           // console.log('resultreq',result)
//           myResolve(result);
//         }
//       })
//       .catch((error) => {
//         // console.log('errorrew',error)
//         myReject(error);
//       });
//   });
//   return result;
// }
