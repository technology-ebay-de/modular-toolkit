import { takeLatest } from 'redux-saga/effects';

function* plugh() {
    /* eslint-disable no-console */
    console.log(
        '%c🦄 [PH_LOG]',
        'font-size: 12px; color: white; background-color: hotpink; border-radius: 8px; padding: 2px 8px 2px 4px',
        'PLUGH!!1!'
    ); // PH_TODO
    /* eslint-enable no-console */
}

export default function*() {
    yield takeLatest('PLUGH', plugh);
}
