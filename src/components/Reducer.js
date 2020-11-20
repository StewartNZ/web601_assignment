const Reducer = (state, action) => {
    switch (action.type) {
        case 'field': {
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        }
        case 'login': {
            return {
                ...state,
                error: '',
                isLoading: true
            }
        }
        case 'success': {
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                username: state.draftUsername,
                password: ''
            }
        }
        case 'error': {
            return {
                ...state,
                error: 'Incorrect username or password!',
                isLoggedIn: false,
                isLoading: false,
                username: '',
                password: ''
            }
        }
        case 'logOut': {
            return {
                ...state,
                isLoggedIn: false,
                username: 'Guest'
            }
        }
        default:
            return;
    }
}

export default Reducer;
