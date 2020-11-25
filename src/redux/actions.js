import moment from 'moment';
import { getMeteors } from '../utils/http';

export const setFetching = (data = false) => ({
    type: 'SET_FETCHING',
    data,
  });

export const setSelectedMeteor = (data) => ({
    type:'SET_SELECTED_METEOR',
    data
})
export const resetMeteors = () => ({ type:'RESET_METEORS' })

export const setMeteors = (data) => ({
    type:'SET_METEORS',
    data
})

export const setFetchError = (data = false) => ({
    type: 'SET_FETCH_ERROR',
    data,
  });


export const getData = ()=> {
    return async (dispatch, getState)=>{
        try {
            dispatch(setFetching(true))
            let result = await getMeteors()
            if(result.error) {
                dispatch(setFetchError(true)); 
                dispatch(setFetching(false));
                return;
            } 
            //Get Rid of data before 1900 + data that doesnt have coords + slice it as too much data slowing app performance a bit
            let filteredData = result.data.filter( meteor => meteor.geolocation && moment(meteor.year).year() > 1899).slice(0,200)        
             await dispatch(setMeteors(filteredData))
             dispatch(setFetching(false))
        } catch (error) {
            dispatch(setFetching(false))
            console.log("error ", error);
        }
    }
}
