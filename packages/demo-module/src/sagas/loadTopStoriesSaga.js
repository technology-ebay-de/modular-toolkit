import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TOP_STORIES_START, loadTopStoriesAction } from '../actions';
import { fetchTopStories } from '../utils';

function* loadTopStories() {
    const data = yield call(fetchTopStories);
    yield put(loadTopStoriesAction.success(data));
}

export default function*() {
    yield takeLatest(LOAD_TOP_STORIES_START, loadTopStories);
}
