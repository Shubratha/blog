import * as actionTypes from './actionTypes';
// import * as reducers from '../reducers/auth';
import Axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('user');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expTime * 1000)
    }
}

// export const handletokens = () => {
//     const token = res.data.key;
//     const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
//     localStorage.setItem('token', token);
//     localStorage.setItem('expirationDate', expirationDate);
//     dispatch(authSuccess(token));
//     dispatch(checkAuthTimeout(3600));
// }

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        Axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            console.log(res);
            const token = res.data.key;
            const user = res.data.user;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('user',user);
            dispatch(authSuccess(token, user));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignUp = (username, email, password1, password2, role) => {
    return dispatch => {
        dispatch(authStart());
        Axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
            // role: role
        })
        .then(res => {
            console.log(res);
            const user = res.data.user;
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('user',user);
            dispatch(authSuccess(token, user));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(token === undefined) {
            dispatch(logout());
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date() ) {
                dispatch(logout());
            }
            else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime() )/ 1000));
            }
        }
    }
}