import { call, put } from 'redux-saga/effects'
import Region from '@/pages/api/Region'
import { GetRegionSuccess,GetRegionFailed, AddRegionSuccess, AddRegionFailed } from '../action/regionAction'

function* handleGetRegion() {
    try {
        const result = yield call(Region.GetData)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFailed(error))
    }
}

function* handleAddRegion(action:any) {
    const {payload} = action
    try {
        const result = yield call(Region.upload,payload)
        yield put(AddRegionSuccess(result.data))
    } catch (error) {
        yield put(AddRegionFailed(error))
        
    }
}

export {
    handleGetRegion,
    handleAddRegion
}