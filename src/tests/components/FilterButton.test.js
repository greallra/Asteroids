import React from 'react';
import { render, fireEvent, queryByPlaceholderText } from '@testing-library/react'
import { FilterButton } from '../../components/FilterButton'


describe('FilterButton tests', () =>{
    const params = {
        buttonType: 'weight', 
        sortBy: 'weight', 
        setSortBy: jest.fn(), 
        setAscending: jest.fn(), 
        ascending: true
    }
    const { buttonType, sortBy, setSortBy, setAscending, ascending } = params;

    it('renders correctly', ()=>{ 
        const { getByText, queryByTestId } = render(<FilterButton buttonType={buttonType} sortBy={sortBy} setSortBy={setSortBy} setAscending={setAscending} ascending={ascending}/>)
        expect(getByText("weight")).toBeTruthy()
        expect(queryByTestId("upArrow")).toBeTruthy() 
    })
    it('should call the setSortBy function', ()=>{
       const { getByText, queryByTestId } = render(<FilterButton buttonType={buttonType} sortBy={sortBy} setSortBy={setSortBy} setAscending={setAscending} ascending={ascending}/>)
       const leftbtn = getByText("weight")
       fireEvent.click(leftbtn)
       expect(setSortBy).toHaveBeenCalled();
       
    }) 
    it('should call the setAscending function', ()=>{
       const { getByText, queryByTestId } = render(<FilterButton buttonType={buttonType} sortBy={sortBy} setSortBy={setSortBy} setAscending={setAscending} ascending={ascending}/>)
       const rightBtn = queryByTestId("right-btn");
       fireEvent.click(rightBtn)
       expect(setAscending).toHaveBeenCalled(); 
    }) 
})