import { all, fork } from 'redux-saga/effects';
import changeColorSaga from './changeColorSaga';

export default function* sagas() {
    yield all([fork(changeColorSaga)]);
}
