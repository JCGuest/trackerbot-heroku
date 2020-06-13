export default function usersReducer( state = { isLoggedIn: false, user: {}}, action) {
    // debugger
    switch (action.type) {
        case "LOG_IN":
            return {
                isLoggedIn: action.isLoggedIn,
                user: action.user
            }
        case "LOG_OUT":
            return {
                isLoggedIn: action.isLoggedIn,
                user: action.user
            }
        default: return state;
    };
};