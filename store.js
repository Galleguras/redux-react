
import * as reducers from './reducer';
import { createStore, combinereducers } from 'redux';
export default createStore(combinereducers({ ...reducers }));