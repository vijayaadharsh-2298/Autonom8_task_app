const filter = {
    text: ''
}

export default (state=filter,action) => {
    switch(action.type){
        case 'SET_TEXT':
            return{
                ...state,
                text: action.text
            }
        default:
            return state;
    }
}