import { createStore, combineReducers } from 'redux';
import themeReducer from '../Themes/ThemeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
