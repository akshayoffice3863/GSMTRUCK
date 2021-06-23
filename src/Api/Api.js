import axios from 'axios';
import {GSM_LOADING_APP_API} from '@env';
export const LoginAPI = async (Email, PassWord) => {
  debugger;
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

export const MediaUpload = async (Data, JWTToken) => {
 

  try {
    let response = await axios.post(
      `${GSM_LOADING_APP_API}/bookings/mediaUpload`,
      Data,
      {
        headers: {Authorization: JWTToken},
      },
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
