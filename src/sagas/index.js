
import {takeEvery,put,delay,takeLatest} from 'redux-saga/effects';


function* incrementAsync()
{   yield delay(4000);
    yield put ({type:'INCREMENT_ASYNC',value:1})
}

export function* watchAgeUp()
{
     yield takeEvery('INCREMENT',incrementAsync); // ACTIONS THAT ARE DISPATCHED
     // can use takeLatest will take the last click
}