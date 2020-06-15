import axios from 'axios';

export const getItems = (userId) => {
    // debugger
    return (dispatch) => {
        dispatch({type: "LOADING_ITEMS"})
        axios.get(`https://localhost:3001/users/${userId}/items`, {withCredentials:true}).then(resp =>
            {return resp.json()}
        )
        .then(json => {
            if (json.data.logged_in) {
                dispatch({type: "ADD_ITEMS", items: json.data.items, loading: false })
            } else {
                dispatch({type: "LOG_OUT", isLoggedIn: false, user: {}})
            }
        })
        .catch(error => console.log('api errors:', error))
    };
};