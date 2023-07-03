import {
  GET_SERVICES,
  CREATE_SERVICE,
  GET_SERVICE,
  GET_SERVICE_NAME,
  FILTER,
  ADD_ITEMS,
  CLEAR_FILTER,
  GET_TYPE_SERVICES,
  DEL_ONE_SERVICE,
  DEL_ALL,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAN_USER,
} from './actions-types';

import axios from 'axios';

export const getData = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/allService');
    return dispatch({ type: GET_SERVICES, payload: response.data });
  };
};

// export const postData = (payload) => {  ------ANTERIOR POSTDATA------
//     return async (dispatch) => {
//         const response = await axios.post({
//             method: "post",
//             url: "http://localhost:3001/service",
//             data: payload,
//         });
//         return dispatch({type:CREATE_SERVICE, payload: response.data})
//     }
// }

// export const postData = (payload) => {  ------ANTERIOR POSTDATA------
//     return async (dispatch) => {
//         const response = await axios.post({
//             method: "post",
//             url: "http://localhost:3001/service",
//             data: payload,
//         });
//         return dispatch({type:CREATE_SERVICE, payload: response.data})
//     }
// }

export const postData = (payload) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('files', payload.file); // Assuming 'file' is the key for the file data in the payload.
      formData.append('name', payload.name);
      formData.append('typeService', payload.typeService);
      formData.append('price', payload.price);
      formData.append('description', payload.description);

      const response = await axios.post(
        'http://localhost:3001/service',
        formData
      );
      return dispatch({ type: CREATE_SERVICE, payload: response.data });
    } catch (error) {
      // Handle errors if necessary.
      console.error('Error posting data:', error);
    }
  };
};

export const getService = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/serviceById/${id}`);
    return dispatch({ type: GET_SERVICE, payload: response.data });
  };
};

export const getServiceName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/nameService/?name=${name}`
    );
    return dispatch({ type: GET_SERVICE_NAME, payload: response.data });
  };
};

export const getTypeServices = () => {
  console.log('response');
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/allTypeService');
    return dispatch({ type: GET_TYPE_SERVICES, payload: response.data });
  };
};

export const filter = (service) => {
  return { type: FILTER, payload: service };
};

export const addToCart = (data) => {
  return { type: ADD_ITEMS, payload: data };
};

export const clearFilters = (data) => {
  return { type: CLEAR_FILTER, payload: data };
};

export const removeFromCart = (itemId) => {
  return { type: DEL_ONE_SERVICE, payload: itemId };
};

export const removeAll = (payload) => {
  return { type: DEL_ALL, payload };
};

//LOGIN GOOGLE
export const handleLogIn = () => {
  return (dispatch) => {
    // Abrir una nueva ventana para el inicio de sesión de Google
    const popup = window.open(
      'http://localhost:3001/auth',
      'Login',
      'width=500,height=500'
    );
    // Escuchar el evento de mensaje desde la ventana emergente
    window.addEventListener('message', (event) => {
      // Verificar el origen del mensaje
      if (event.origin === 'http://localhost:3001') {
        // Obtener los datos del usuario del mensaje
        const { User_id, idGoogle, name, email, profilePict } = event.data;

        // Actualizar el estado de Redux con los datos del usuario
        dispatch(loginSuccess({ User_id, idGoogle, name, email, profilePict }));
        // Cerrar la ventana emergente
        popup.close();
      }
    });
  };
};

export const loginSuccess = (user) => {
  console.log('user:', user);
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
// END LOGIN GOOGLE

export const cleanUser = (payload) => {
  return { type: CLEAN_USER, payload };
};
