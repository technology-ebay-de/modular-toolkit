import { takeLatest } from 'redux-saga/effects';
import { CHANGE_COLOR } from '../actions';

function* changeColor({ background }) {
    document.body.style.backgroundColor = background;
    yield true;
}

export default function*() {
    yield takeLatest(CHANGE_COLOR, changeColor);
}
