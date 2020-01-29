const reducer = (state = {data: null}, action) => {

    switch (action.type) {
        case 'MESSAGE':
            const data = JSON.parse(action.payload.data);
            let newState = data;
            return newState;
  
        default:
            return state;
    }
  };
  
  export default reducer;