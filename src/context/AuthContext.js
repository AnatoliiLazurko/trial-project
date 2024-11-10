import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    isAuth: false,
    user: null,
};

const initiaLoading = {
    status: null
};

const loadingReducer = (state, { type, payload }) => {
    switch (type) {
        case 'LOADING':
            return {
                ...state,
                status: 'loading'
            }
        case 'LOADED':
            return {
                ...state,
                status: 'loaded'
            }
    
        default:
            return state
    }
}

const authReducer = (state, {type, payload}) => {
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                isAuth: true,
                user: payload.user,
                status: true
            }
        
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                user: null,
                status: null
            }
    
        default:
            return state;
    }
}

const AuthContext = createContext();
export const LoadingContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [stateLoading, dispatchLoading] = useReducer(loadingReducer, initiaLoading);

    const [error, setError] = useState(null);
    const [isEmailVerifi, setEmailVerifi] = useState(false);

    const navigate = useNavigate();

    const login = async ({ email, password }) => {
        dispatchLoading({ type: 'LOADING' })
        try {
            await axios.post(USER_ENDPOINTS.login, { email, password }, {
                    withCredentials: true
                }
            );

            await getUser();
        }
        catch (error) { 
            //console.log('Login error:' + error);
            setError(error.response.data);
        }
        dispatchLoading({ type: 'LOADED' })
    }

    const register = async ({ email, password }) => {
        dispatchLoading({ type: 'LOADING' })
        try {
            await axios.post(USER_ENDPOINTS.register, { email, password });

            setEmailVerifi(true);
        }   
        catch (error) {
            //console.log('Register error:' + error.response.data);
            setError(error.response.data);
        }
        dispatchLoading({ type: 'LOADED' })
    }

    const authWithGoogle = async (googleToken) => {
        dispatchLoading({ type: 'LOADING' })
        try {
            await axios.post(USER_ENDPOINTS.googleAuth, { token: googleToken }, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    withCredentials: true
                }
            );

            await getUser();
        }
        catch (error) {
            console.log('Login with Google error:' + error);
        }
        dispatchLoading({ type: 'LOADED' })
    }

    const logout = async () => {
        dispatchLoading({ type: 'LOADING' })
        try {
            await axios.delete(USER_ENDPOINTS.logout, {  withCredentials: true });

            dispatch({
                type: 'LOGOUT'
            });
        }
        catch (error) {
            console.log('Logout error: ' + error);
        }
        dispatchLoading({ type: 'LOADED' })
    }

    const getUser = async () => {
        dispatchLoading({ type: 'LOADING' })

        if (cookiesInfo.authenticated) {
            try {
                const res = await axios.get(USER_ENDPOINTS.getUserById, { withCredentials: true });

                dispatch({
                    type: 'LOGIN',
                    payload: {
                        user: res.data
                    }
                });
            } catch (error) {
                console.log('Get user error: ' + error);
                setError(error.response.data);
            }
        }
        else {
            console.log('Not authenticated!');
        }
        dispatchLoading({ type: 'LOADED' })
    }

    const getUserInfo = async () => {
        if (!state.user) {
            await getUser();
        }
    }

    useEffect(() => {
        getUserInfo();
    }, [state, cookiesInfo.authenticated]);

    // useEffect(() => {
    //     const tokenRefreshInterval = setInterval(() => {
    //         refreshJwtToken();
    //     }, 133 * 60 * 1000);

    //     return () => clearInterval(tokenRefreshInterval);
    // }, [state.user]);

    // const refreshJwtToken = async () => {
    //     try {
    //         await axios.put(USER_ENDPOINTS.refreshToken, null, { withCredentials: true });
    //     } catch (error) {
    //         console.error('JWT токен не оновлено:', error);
    //     }
    // };

    // useEffect(() => {       
    //     refreshJwtToken();
    // }, []);

    return <AuthContext.Provider value={{...state, login, register, authWithGoogle, logout}}>
        <LoadingContext.Provider value={{ ...stateLoading }}>
            {children}
        </LoadingContext.Provider>
    </AuthContext.Provider>;
}

export default AuthContext;