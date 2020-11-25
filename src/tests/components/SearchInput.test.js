import React from 'react';
import { render, fireEvent, queryByPlaceholderText } from '@testing-library/react'
import { SearchInput } from '../../components/SearchInput'


describe('SearchBox tests', () =>{
    it('renders correctly', ()=>{
        const { queryByTestId, queryByPlaceholderText } = render(<SearchInput placeholder="search meteor name"/>)

        expect(queryByPlaceholderText("search meteor name")).toBeTruthy()
        expect(queryByTestId("searchInput")).toBeTruthy()
    })

    it('updates on change and calls the setValue function', ()=>{
        const setValue = jest.fn();
        const { queryByTestId } = render(<SearchInput setValue={setValue}/>)
        const input = queryByTestId('searchInput')

        fireEvent.change(input, { target: {value: "test"} })
        expect(input.value).toBe("test")
        expect(setValue).toHaveBeenCalled();
    }) 
})