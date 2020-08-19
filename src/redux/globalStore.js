import { createStore, combineReducers } from 'redux';

import UsersDataReducer from './usersData.reducer';
import FilterReducer from './filters.reducer';

const globalStore = () => {
    const state = createStore(combineReducers({
        usersData: UsersDataReducer,
        filter: FilterReducer
    }));
    // state.subscribe(() => {
    //     console.log(state.getState())
    // })
    return state;
}


export default globalStore;