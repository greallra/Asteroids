import { mainReducer } from '../../redux/mainReducer'
import meteorsArray from '../fixtures/meteorsArray'
import meteorObject from '../fixtures/meteorObject'

const defaultState = {
    fetchingMeteors: true,
    meteors: [],
    selectedMeteor: undefined,
    fetchError: false
  };
  

describe('main reducer', () => {
    it('should return the initial state', () => {
      expect(mainReducer(undefined, {})).toEqual(defaultState)
    })
    it('should handle SET_FETCHING - param false', () => {
      expect(
        mainReducer(undefined, {
          type: 'SET_FETCHING',
          data: false
        })
      ).toEqual( {...defaultState, fetchingMeteors: false} )
    })
    it('should handle SET_FETCH_ERROR - param true', () => {
      expect(
        mainReducer(undefined, {
          type: 'SET_FETCH_ERROR',
          data: true
        })
      ).toEqual( {...defaultState, fetchError: true} )
    })
    it('should handle SET_METEORS', () => {
      expect(
        mainReducer(undefined, {
          type: 'SET_METEORS',
          data: meteorsArray
        })
      ).toEqual( {...defaultState, meteors: meteorsArray} )
    })
    it('should handle SET_SELECTED_METEOR', () => {
      expect(
        mainReducer(undefined, {
          type: 'SET_SELECTED_METEOR',
          data: meteorObject
        })
      ).toEqual( {...defaultState, selectedMeteor: meteorObject} )
    })
    it('should handle RESET_METEORS', () => {
      expect(
        mainReducer(undefined, {
          type: 'RESET_METEORS'
        })
      ).toEqual( {...defaultState} )
    })
})