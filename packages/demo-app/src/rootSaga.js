import { all, fork } from 'redux-saga/effects';
import { saga as hackerNewsRootSaga } from '@modular-toolkit/demo-module';

export default function* rootSaga() {
    yield all([fork(hackerNewsRootSaga)]);
}
