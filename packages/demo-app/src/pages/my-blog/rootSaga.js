import { loadTopStoriesSaga } from '@react-modular-toolkit/demo-module/sagas';

export default function* rootSaga() {
    yield [loadTopStoriesSaga()];
}
