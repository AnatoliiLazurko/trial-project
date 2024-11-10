
export const USER_URL = 'URL';

export const USER_ENDPOINTS = {
    login: `${USER_URL}/api/Auth/authenticate`,
    googleAuth: `${USER_URL}/api/Auth/google`,
    register: `${USER_URL}/api/Auth/register`,
    //refreshToken: `${USER_URL}/api/Auth/refreshjwt`,
    logout: `${USER_URL}/api/Auth/logout`,
    getUserById: `${USER_URL}/api/Users/byid`,
};