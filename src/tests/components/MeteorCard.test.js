import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux';
import { MeteorCard } from '../../components/MeteorCard';
import MeteorObject from '../fixtures/MeteorObject'


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('MeteorCard', () => {
    useSelector.mockImplementation((selector) => selector({
        mainReducer: {
            fetchingMeteors: true,
            meteors: [],
            selectedMeteor: MeteorObject,
            fetchError: false
        }   
      }));
    

    const { container, getByText } = render(<MeteorCard />);

    it('renders meteor card according to provided data', () => {
      expect(getByText(/Aachen/i)).toBeTruthy()
      expect(getByText(/Mass \(g\): 21/i)).toBeTruthy()
      expect(getByText(/Year Fell: 1st January 1880/i)).toBeTruthy()
      expect(getByText(/Show On Map/i)).toBeTruthy()
    
    });

});