import { all, fork } from 'redux-saga/effects';

import docgens from './docgens';
import sassdocs from './sassdocs';
import search from './search';
import themes from './themes';

export default function* sagas() {
  yield all([
    fork(docgens),
    fork(sassdocs),
    fork(search),
    fork(themes),
  ]);
}