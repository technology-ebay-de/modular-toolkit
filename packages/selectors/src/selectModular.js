import { select } from 'redux-saga/effects';
import makeWorkWithGlobalState from './makeWorkWithGlobalState';

export default selector => select(makeWorkWithGlobalState(selector));
