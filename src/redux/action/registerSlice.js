// import axios from 'axios';
// import {showMessage} from '../../utils';
// import {setLoading} from '../reducer/globalSlice';

// const API_HOST = {
//   url: 'http://e02c-2001-448a-304a-1613-bde3-8305-ec50-b8b0.ngrok-free.app/api',
// };

// export const signUpAction =
//   (dataRegister, photoReducer, navigation) => dispatch => {
//     axios
//       .post(`${API_HOST}/register`, dataRegister)
//       .then(res => {
//         // console.log('data success', res.data);

//         console.log('photoReducer', photoReducer);

//         console.log('imageForm', photoReducer);

//         if (photoReducer.isUploadPhoto) {
//           const photoForUpload = new FormData();
//           photoForUpload.append('file', photoReducer);
//           axios
//             .post(`${api.API_HOST}/user/photo`, photoForUpload, {
//               headers: {
//                 Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
//                 // Authorization: `Bearer 28|CsBRylEA0ugV91NNqxG5d1puCcS8IT7pjfNTaMLC`,
//                 'Content-Type': 'multipart/form-data',
//               },
//             })
//             .then(resUpload => {
//               console.log('success upload: ', resUpload);
//               dispatch(setLoading(false));
//             })
//             .catch(err => {
//               console.log('err', err);
//               showMessage('Upload photo tidak berhasil');
//               dispatch(setLoading(false));
//             });
//         }

//         dispatch(setLoadinging(false));
//         showMessage('Register Success', 'success');
//         navigation.replace('SuccessSignUp');
//       })
//       .catch(err => {
//         dispatch(setLoading(false));
//         console.log('sign up error: ', err.response.data.message);
//         showMessage(err?.response?.data?.message);
//       });
//   };
