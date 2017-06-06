import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import ware_sales_reducer from './ware_sales_reducers';


const allReducers = combineReducers({
    ware_sales: ware_sales_reducer,
    form: formReducer
});

export default allReducers
