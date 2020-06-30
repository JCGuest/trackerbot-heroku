import axios from 'axios';

export const getLoginStatus = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_STATUS"})
        axios.get('http://localhost:3001/logged_in', {withCredentials:true})
        .then(json => {
            if (json.data.logged_in) {
                dispatch({type: "LOG_IN", isLoggedIn: true, user: json.data.user })
            } else {
                dispatch({type: "LOG_OUT", isLoggedIn: false, user: {}})
            }
        })
        .catch(error => console.log('api errors:', error))
    };
};