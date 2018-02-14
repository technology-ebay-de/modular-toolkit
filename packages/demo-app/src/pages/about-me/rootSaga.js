import { loadTopStoriesSaga } from '@modular-toolkit/demo-module/sagas';

export default function* rootSaga() {
    yield [loadTopStoriesSaga()];
}
