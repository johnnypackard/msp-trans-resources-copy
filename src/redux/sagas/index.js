import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
// import businessesSaga from './businessesSaga';
// import resourcesSaga from './resourcesSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    // businessesSaga(),
    // resourcesSaga(),
    // watchIncrementAsync()
  ]);
}
