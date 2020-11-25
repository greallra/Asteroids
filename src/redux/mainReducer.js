  export const defaultState = {
    fetchingMeteors: true,
    meteors: [],
    selectedMeteor: undefined,
    fetchError: false
  };
  
  export const mainReducer = (state = defaultState, { type, data }) => {
      switch (type) {
          case 'SET_FETCHING':
            return {...state, fetchingMeteors: data}
          case 'SET_FETCH_ERROR':
            return {...state, fetchError: data}
          case 'SET_METEORS':
            return {...state, meteors: data }
          case 'SET_SELECTED_METEOR':
            return {...state, selectedMeteor: data }
          case 'RESET_METEORS':
            return {...state, selectedMeteor: undefined }
          default:
            return state;
      }
  
  };
  