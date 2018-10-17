import { all, fork } from 'redux-saga/effects';
import loadTopStoriesSaga from './loadTopStoriesSaga';

export default function* sagas() {
    yield all([fork(loadTopStoriesSaga)]);
}
