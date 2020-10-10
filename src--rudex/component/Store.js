import {createStore} from 'redux';
const defaultState={
    arr:[]
}
const reducer = function(state=defaultState,action){
    const {data,type} = action;
    switch(type){
        case 'USER_ADD':
        state.arr.push({username:data});
        break;
        case 'USER_DEL':
        state.arr.splice(data,1);
        break;
    }
    return state
}
const Store = createStore(reducer);
export default Store;
