import { all, fork } from 'redux-saga/effects';
import { hackerNewsRootSaga } from '@modular-toolkit/demo-module';

export default function* rootSaga() {
    yield all([fork(hackerNewsRootSaga)]);
}
