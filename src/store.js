import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer =  combineReducers({
  form: reduxFormReducer
})

const store = createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_);

export default store;
