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
  SIGN_IN,
  SIGN_UP,
  EDIT_USER,
  PERSONAL_USER_DATA,
  REFRESH_USER,
  GET_SERVICES_BY_USER,
  UPDATE_SERVICE,
  ALL_USERS,
  UPDATE_USER,
  POST_COMENTARIO,
  IS_ADMIN,
  DELETE_SERVICE_BY_USER,
} from './actions-types';
import axios from 'axios';

export const getData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/allService');
      return dispatch({ type: GET_SERVICES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postData = (payload) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('files', payload.file);
      formData.append('name', payload.name);
      formData.append('typeService', payload.typeService);
      formData.append('price', payload.price);
      formData.append('description', payload.description);
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: ` Bearer ${token}`, //aqui agrego el token al encabezado "Authorization"
        },
      };
      const response = await axios.post(
        'http://localhost:3001/service',
        formData,
        config
      );
      return dispatch({ type: CREATE_SERVICE, payload: response.data });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
};

export const getService = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/serviceById/${id}`
      );
      return dispatch({ type: GET_SERVICE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getServiceName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/nameService/?name=${name}`
      );
      return dispatch({ type: GET_SERVICE_NAME, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTypeServices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/allTypeService/');
      return dispatch({ type: GET_TYPE_SERVICES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
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
    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:3001') {
        const { name, email, profilePict } = event.data;
        dispatch(loginSuccess({ name, email, profilePict }));
        popup.close();
      }
    });
  };
};

export const loginSuccess = (user) => {
  localStorage.setItem('token', document.cookie.split('token=').pop().trim());
  return { type: LOGIN_SUCCESS, payload: user };
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error };
};
// END LOGIN GOOGLE

export const cleanUser = (payload) => {
  return { type: CLEAN_USER, payload };
};

export const signIn = (payload) => {
  return async (dispatch) => {
  
      const response = await axios.post('http://localhost:3001/singIn',payload);
      console.log('mi respuesta ', response);
      const token = response.data.token;
      const name = response.data.name;
      const profilePict = response.data.profilePict;
      console.log( "la imagen que deveria devolverme",profilePict);
      const user = {
        name: name,
        profilePict: profilePict,
      };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      return dispatch({ type: LOGIN_SUCCESS, payload: user });

  };
};

export const signUp = (payload) => {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:3001/singUp', payload);
    return dispatch({ type: SIGN_UP, payload: response.data });
  };
};

export const personalUserData = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: ` Bearer ${token}` } };
      const response = await axios(
        'http://localhost:3001/getUserById/',
        config
      );
      return dispatch({ type: PERSONAL_USER_DATA, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (payload) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('method', 'put');
      formData.append('name', payload.name);
      formData.append('password', payload.password);
      formData.append('profilePict', payload.profilePict);
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: ` Bearer ${token}` } };
      const response = await axios.put(
        'http://localhost:3001/editUser',
        formData,
        config
      );
      return dispatch({ type: EDIT_USER, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const refreshUser = (user) => {
  return { type: REFRESH_USER, payload: user };
};

export const getServicesByUser = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: ` Bearer ${token}`}};
    const response = await axios.get('http://localhost:3001/getServiceByUser/', config);
    console.log(response);
    return dispatch({ type: GET_SERVICES_BY_USER, payload: response.data });
  };
};


//EN PROCESO!!!
export const updateService = (update) =>{
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: ` Bearer ${token}` } };
    const response = await axios.put('http://localhost:3001/editService', update, config);
    return dispatch({ type: UPDATE_SERVICE, payload: response.data });
  }
}

export const getAllUsers = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: ` Bearer ${token}` } };
    console.log(config);
    const response = await axios.get('http://localhost:3001/allUsers/', config)
    return dispatch({ type: ALL_USERS, payload: response.data });
  }
}

export const postComentario = (comentario) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: ` Bearer ${token}` } };
      const response = await axios.post("http://localhost:3001/review/", comentario, config)
      return dispatch({ type: POST_COMENTARIO, payload: response.data})
    } catch (error) {
      console.log(error);
    }
  }
};

export const updateUser = (id) => {
  return async (dispatch) => {
      const token = localStorage.getItem('token')
      const config = { headers: { Authorization: ` Bearer ${token}` } };
      const response = await axios.put(`http://localhost:3001/deleteUser/`, id, config)
      return dispatch({type: UPDATE_USER, payload: response.data})
  }
}

export const isAdminChange = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
      const config = { headers: { Authorization: ` Bearer ${token}`}};
      const response = await axios.put(`http://localhost:3001/changeAdmin/`, id, config)
      return dispatch({type: IS_ADMIN, payload: response.data})
  }
}

export const deleteService = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
    const config = { headers: {Authorization: ` Bearer ${token}`}}
    const response = await axios.delete('http://localhost:3001/deleteService/', config)
    return dispatch({type: DEL_ONE_SERVICE, payload: response.data })
  }
}

export const deleteServiceByUser = (payload) => {
  return {type: DELETE_SERVICE_BY_USER, payload}
}