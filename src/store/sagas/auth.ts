import { call, put } from 'redux-saga/effects';

import { IAction } from '../../models/store/action.interface';
import {authSucceed, authFail, authExpired} from '../actions/auth';
import { User } from '../../models/entities/user.class';
import { setMessage } from '../actions/layout';
import { UserService } from '../../services/api/user';
import { Message, MessageType } from '../../models/UI/message.class';

export function* authenticate(action:IAction){
    // yield put(authSucceed(new User(action.login)));
    const res = yield UserService.signIn(action.login, action.password);
    if(typeof res === 'string'){
        yield put(authFail(res));
        return;
    }
    yield put(authSucceed(new User(action.login)));
}

export function* alertAuthFail(action:IAction){
    yield put(setMessage(new Message(action.message, MessageType.Error)));
}