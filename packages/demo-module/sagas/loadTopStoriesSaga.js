import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTopStories } from './utils';
import { LOAD_TOP_STORIES_START, loadTopStoriesAction } from '../actions';

function* loadTopStories() {
    let data;
    try {
        data = yield call(fetchTopStories);
    } catch (error) {
        yield put(loadTopStoriesAction.failure());
        return;
    }

    yield put(loadTopStoriesAction.success(data));
}

export default function*() {
    yield takeLatest(LOAD_TOP_STORIES_START, loadTopStories);
}
