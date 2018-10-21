import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_GISTS_START, loadGistsAction } from '../actions';
import { fetchGists } from '../utils';

function* loadGists() {
    const data = yield call(fetchGists);
    yield put(loadGistsAction.success(data));
}

export default function*() {
    yield takeLatest(LOAD_GISTS_START, loadGists);
}
