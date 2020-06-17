import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/types';
import { authenticate, alertAuthFail } from './auth';

export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_INIT, authenticate);
    yield takeEvery(actionTypes.AUTH_FAIL, alertAuthFail);
}