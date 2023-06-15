import {applyMiddleware, combineReducers, createStore} from 'redux';
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import LoaiDTReducers from './reducers/LoaiDTReducers';
import DienThoaiReducers from './reducers/DienThoaiReducers';

const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    // reduces con
    LoaiDTReducers,
    DienThoaiReducers
})


const store = createStore(rootReducer,applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;