import axios from 'axios';

export const fetchItems = (userId) => {
    let id = userId
    return (dispatch) => {
    axios.get(`/users/${id}/items`, {withCredentials:true})
    .then(json => {
        if (json.data.logged_in) {
            dispatch({type: "ADD_ITEMS", isLoggedIn: true, items: json.data.items})
        } else {
            dispatch({type: "LOG_OUT", isLoggedIn: false, user: {}})
        }
    })
    .catch(error => console.log('api errors:', error))
    }
};
