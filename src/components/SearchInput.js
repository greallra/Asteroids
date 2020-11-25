import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
margin: 10px 0;
  padding: 18px;
  box-sizing: border-box;
  height: 50px;
  border: 1px solid lightgrey;
  display: flex;
  min-width: 300px;

//   align-items: center;
  border-radius: .5rem;
`;

export function SearchInput({placeholder, setValue}) {

    return <Input placeholder={placeholder} onChange={setValue} data-testid="searchInput"/>
}