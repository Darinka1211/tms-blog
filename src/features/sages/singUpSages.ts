import {put,call,takeEvery} from 'redux-saga/effects'
import { singUpFailure,singUpSuccess } from '../auth/authSlice'


const delay =( ms:numder)=> new Promise (res =>{
    setTimeout (res,ms)
})
export function* singUp(){
    try{
        yield call(delay,ms:2000)
        const data={
            name: 'user',
            email:'123@gmail.com',
            password:'123456',
        }
        yield put (singUpSuccess(data))
        catch (error:any){
            yield put (singUpFailure(error.message))
        }
    }
export function* sngUpSage(){
    yield takeEvery('auth/singUp',singUp)
}