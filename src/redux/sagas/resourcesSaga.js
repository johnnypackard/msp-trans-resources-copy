// import { put, call, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// function* fetchResources(action) {
//     try {
//         const resourcesResponse = yield call(axios.get, '/api/resources');
//         yield put({type: 'UPDATE_RESOURCES', payload: resourcesResponse.data})
//     } catch (error) {
//         console.log('error in GET all');
//     }
// } // end GET resources

// function* resourcesSaga() {
//     yield takeLatest('FETCH_RESOURCES', fetchResources);
// }

// export default resourcesSaga;