import meteorObject from '../fixtures/meteorObject';
import meteorsArray from '../fixtures/meteorsArray';
import { setFetching, setSelectedMeteor, resetMeteors, setMeteors } from '../../redux/actions'



describe('setFetching actions', () => {
  it('should create an action to set fetching status - passed param true', () => {
    const value = true
    const expectedAction = {
      type: 'SET_FETCHING',
      data: value
    }
    expect(setFetching(value)).toEqual(expectedAction)
  })
  it('should create an action to set fetching status - passed param false', () => {
    const value = false;
    const expectedAction = {
      type: 'SET_FETCHING',
      data: value
    }
    expect(setFetching(value)).toEqual(expectedAction)
  })
  it('should create an action to set fetching status - pass nothing should stay at false', () => {
    const expectedAction = {
      type: 'SET_FETCHING',
      data: false
    }
    expect(setFetching()).toEqual(expectedAction)
  })
})

describe('setSelectedMeteor actions', () => {
  it('should create an action to set setSelectedMeteor - passed param meteorObject', () => {
    const expectedAction = {
      type: 'SET_SELECTED_METEOR',
      data: meteorObject
    }
    expect(setSelectedMeteor(meteorObject)).toEqual(expectedAction)
  })
  it('should create an action to set setSelectedMeteor - passed nothing state should remain unchanged', () => {
    const expectedAction = {
      type: 'SET_SELECTED_METEOR',
      data: undefined
    }
    expect(setSelectedMeteor()).toEqual(expectedAction)
  })

})

describe('resetMeteors actions', () => {
  it('should create an action to set resetMeteors - passed 0 params', () => {
    const expectedAction = {
      type: 'RESET_METEORS'
    }
    expect(resetMeteors()).toEqual(expectedAction)
  })
  it('should create an action to set resetMeteors - passed params should ignore them', () => {
    const expectedAction = {
      type: 'RESET_METEORS'
    }
    expect(resetMeteors({foo: 'bar'})).toEqual(expectedAction)
  })
})

describe('setMeteors actions', () => {
  it('should create an action to set setMeteors - passed valid data', () => {
    const expectedAction = {
      type: 'SET_METEORS',
      data: meteorsArray
    }
    expect(setMeteors(meteorsArray)).toEqual(expectedAction)
  })
  it('should create an action to set setMeteors - passed nothing data should be undefined', () => {
    const expectedAction = {
      type: 'SET_METEORS',
      data: undefined
    }
    expect(setMeteors()).toEqual(expectedAction)
  })
})
