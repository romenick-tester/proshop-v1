const testReducer = (state = { loading: false }, action) => {

    switch (action.type) {
        case "TEST":
            return { loading: true }

        default:
            return state;
    }
};

export default testReducer;
