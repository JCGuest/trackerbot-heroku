export default function usersReducer( state = { isLoggedIn: false, user: {}, loading: false}, action) {
    // debugger
    switch (action.type) {
        case "LOADING_STATUS":
            return {
                isLoggedIn: false,
                user: {},
                loading: true
            }
        case "LOG_IN":
            return {
                isLoggedIn: action.isLoggedIn,
                user: action.user,
                loading: false
            }
        case "LOG_OUT":
            return {
                isLoggedIn: action.isLoggedIn,
                user: action.user,
                loading: false
            }
        default: return state;
    };
};