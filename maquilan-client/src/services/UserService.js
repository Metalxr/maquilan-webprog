import axios from 'axios';
import constants from '../constants';

const API = axios.create({
  // REMOVED trailing slash from the base URL configuration
  baseURL: `${constants.HOST}/users`, 
});

export const fetchUsers = () => API.get(''); // Use empty string or '/'
export const createUser = (user) => API.post('', user);
export const loginUser = (credentials) => API.post('/login', credentials);