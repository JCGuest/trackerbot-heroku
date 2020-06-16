import axios from 'axios';

export const getItems = (userId) => {
    console.log(userId)
    return (dispatch) => {
        return axios.get(`http://localhost:3001/users/${userId}/items`, {withCredentials:true})
        .then(json => {
            if (json.data.logged_in) {
                console.log('getItems')
                dispatch({type: "ADD_ITEMS", items: json.data.items, loading: false })
            } else {
                dispatch({type: "LOG_OUT", isLoggedIn: false, user: {}})
            }
        })
        .catch(error => console.log('api errors:', error))
    };
};