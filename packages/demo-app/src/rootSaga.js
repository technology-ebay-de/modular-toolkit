import { all, fork } from 'redux-saga/effects';
import { hackerNewsRootSaga } from './hacker-news';

export default function* rootSaga() {
    yield all([fork(hackerNewsRootSaga)]);
}
