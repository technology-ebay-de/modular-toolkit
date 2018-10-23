import { all, fork } from 'redux-saga/effects';
import loadGistsSaga from './loadGistsSaga';

export default function* sagas() {
    yield all([fork(loadGistsSaga)]);
}
