const usersData = []

export default (state=usersData,action) => {
    switch(action.type){
        case 'SET_DATA':
            return[
                ...state,
                action.userdata
            ]
        default:
            return state;
    }
}