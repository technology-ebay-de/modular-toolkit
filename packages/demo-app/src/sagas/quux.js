import { takeLatest } from 'redux-saga/effects';

function* quux() {
    /* eslint-disable no-console */
    console.log(
        '%c🦄 [PH_LOG]',
        'font-size: 12px; color: white; background-color: lime; border-radius: 8px; padding: 2px 8px 2px 4px',
        'QUUX!!1!'
    ); // PH_TODO
    /* eslint-enable no-console */
}

export default function*() {
    yield takeLatest('QUUX', quux);
}
